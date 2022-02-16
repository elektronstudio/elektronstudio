import { useStorage } from "@vueuse/core";
import { uniqueCollection } from "./array";
import ky from "ky-universal";
import { config } from "./config";
import { strapi } from "./strapi";

type TicketStatus = "FREE" | "REQUIRES_TICKET" | "HAS_TICKET";

// We do not have proper types for events yet
// so we accept any object with "fienta_id" key
type Ticketable = {
  fienta_id?: string;
  [key: string]: any;
};

type Ticket = {
  code: string;
  fientaid: string;
};

// Ticket local storage
// Security by obscurity

const tickets = useStorage<Ticket[]>("elektron_data", []);

// Fienta API client instance

const fienta = ky.create({
  prefixUrl: config.fientaUrl as string,
  hooks: {
    beforeRequest: [
      (request) => {
        request.headers.set("Authorization", `Bearer ${config.fientaToken}`);
      },
    ],
  },
});

// Internal functions

function getLocalTicket(code: string): Ticket | undefined {
  return tickets.value?.find((ticket) => ticket.code == code);
}

function setLocalTicket(code: string, fienta_id: string): any {
  tickets.value = uniqueCollection(
    [
      ...tickets.value,
      {
        code: code,
        fientaid: fienta_id,
      },
    ],
    "code",
  );
  return tickets.value;
}

async function getRemoteTicket(
  code: string,
): Promise<{ fienta_status: string; fienta_id: string } | null> {
  try {
    const res: any = await fienta.get(`tickets/${code}`).json();
    if (res && res.ticket) {
      return {
        fienta_status: res.ticket.status, // TODO: type Fienta statuses
        fienta_id: res.ticket.event_id,
      };
    }
    return null;
  } catch {
    return null;
  }
  // TODO: return { status, ticketable }
}

async function getTicketable(fienta_id: string): Promise<Ticketable | null> {
  // TODO: Order by latest date?
  try {
    const events: Ticketable[] = await strapi
      .get(`events?fienta_id=${fienta_id}`)
      .json();
    if (events.length) {
      // TODO: What is the right thing to do
      // on multiple results?
      return events[0];
    }
  } catch {
    return null;
  }
  return null;
  // TODO: return { status, ticketable }
}

// Exported API

// We support multiple fienta IDs per content
// for parent <> child tickets

export function getTicketableStatus(ticketables: Ticketable[]) {
  let status: TicketStatus = "FREE";

  const ticketablesRequiringTickets = ticketables.filter(
    (ticketable) => ticketable.fienta_id,
  );

  if (ticketablesRequiringTickets.length) {
    status = "REQUIRES_TICKET";
  }

  const ticketsForTicketables = ticketablesRequiringTickets.flatMap(
    (ticketable) =>
      tickets.value.filter((t) => t.fientaid == ticketable.fienta_id),
  );

  if (ticketsForTicketables.length) {
    status = "HAS_TICKET";
  }

  //TODO: Should we return the tickets as well?
  return status;
}

export async function validateTicket(code: string): Promise<Ticketable | null> {
  const localTicket = getLocalTicket(code);
  if (localTicket) {
    const ticketable = await getTicketable(localTicket.fientaid);
    if (ticketable) {
      return ticketable;
    }
    // TODO: Handle the case when you have ticket to
    // non-existing ticketable (event)
  } else {
    const remoteTicket = await getRemoteTicket(code);
    if (remoteTicket) {
      const ticketable = await getTicketable(remoteTicket.fienta_id);
      if (ticketable) {
        setLocalTicket(code, remoteTicket.fienta_id);
        return ticketable;
      }
      // TODO: Handle the case when you have ticket to
      // non-existing ticketable (event)
    }
  }
  // TODO: Consider returning { status, ticktable }
  return null;
}
