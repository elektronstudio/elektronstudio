import { onMounted, ref, watch } from "vue";
import { mobile, breakpoints } from "../utils";

export type ContentType = "chat" | "text" | "image" | "video";

export type Draggable = {
  draggableId: string;
  title?: string;
  gridPosX?: number;
  gridPosY?: number;
  tilesWidth?: number;
  tilesHeight?: number;
  isMinimised?: boolean;
  order: number;
  contentType?: ContentType;
};

export function useDraggable(draggablesData: Draggable[]) {
  const draggablesState = ref<Draggable[]>([]);
  const minimisedDraggables = ref<Draggable[]>([]);

  const updateDraggablesState = (draggable: Draggable) => {
    if (!draggable) {
      return;
    }
    const { draggableId, order } = draggable;

    if (mobile) {
      console.log("MOBLA");
      if (draggable.isMinimised) {
        minimisedDraggables.value = draggablesState.value.map((item) => {
          return {
            ...item,
            isMinimised: true,
          };
        });
        draggablesState.value = draggablesState.value.map((item) => {
          return {
            ...item,
            isMinimised: true,
          };
        });
      } else {
        draggablesState.value = draggablesState.value.map((item) => {
          return {
            ...item,
            isMinimised: item.draggableId === draggableId ? false : true,
          };
        });

        minimisedDraggables.value = draggablesState.value.filter(
          (item) => item.draggableId !== draggableId,
        );
      }

      return;
    }

    // Iterate through draggables and set the current draggable last
    draggablesState.value = draggablesState.value.map((item) => {
      if (item.draggableId === draggableId) {
        return { ...draggable, order: draggablesState.value.length };
      } else {
        return {
          ...item,
          order:
            item.order === 1
              ? 1
              : item.order > order
              ? item.order - 1
              : item.order,
        };
      }
    });

    if (draggable.isMinimised) {
      minimisedDraggables.value = [...minimisedDraggables.value, draggable];
    } else {
      minimisedDraggables.value = minimisedDraggables.value.filter(
        (item) => item.draggableId !== draggableId,
      );
    }
  };

  watch(draggablesState, () => {
    if (draggablesState.value.length > 0) {
      localStorage.setItem(
        "windowsState",
        JSON.stringify(draggablesState.value),
      );
    }
  });

  onMounted(() => {
    const initialStates = [] as Draggable[];
    const localData = localStorage.getItem(`windowsState`);
    const localDataParsed = localData ? JSON.parse(localData) : undefined;

    draggablesData.forEach((draggable) => {
      const { draggableId } = draggable;
      const localDraggable = localDataParsed?.find(
        (m: Draggable) => m.draggableId === draggableId,
      );
      const mergedDraggable = localDraggable
        ? {
            ...draggable,
            gridPosX: localDraggable.gridPosX,
            gridPosY: localDraggable.gridPosY,
            isMinimised: localDraggable.isMinimised,
          }
        : { ...draggable };

      if (mergedDraggable.order === undefined) {
        mergedDraggable.order = 1;
      }
      initialStates.push(mergedDraggable);
    });
    const minimised = initialStates.filter((item) => item.isMinimised);
    minimisedDraggables.value = minimised;
    draggablesState.value = initialStates;
  });

  return { draggablesState, minimisedDraggables, updateDraggablesState };
}
