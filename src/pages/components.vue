<script setup lang="ts">
import IconArrowRight from "~icons/radix-icons/arrow-right";
import IconArrowLeft from "~icons/radix-icons/arrow-left";
import {
  ETitle,
  EButton,
  ELogo,
  // ENav,
  ENavButton,
  EContent,
  ECard,
  EProductionCard,
  EAboutPageCard,
  ETeamCard,
  EScheduleEvent,
  EEventInstance,
  EBox,
  ELivePreview,
  EDetailsList,
  EPressItems,
  EInput,
  ELabel,
  EFormCheckbox,
  EFormRadio,
  EFormRange,
  EFormText,
  EFormTextArea,
  EFormNumber,
  EFormEmail,
  EImageSlider,
} from "../lib";
import { ref } from "vue";
const navItems = [
  {
    name: "eˉlektron",
    path: "/",
  },
  {
    name: "Lavastused",
    path: "/lavastused",
  },
];

const productions = [
  {
    title: "Hundid",
    author: "Taavet Jansen",
    thumbnail:
      "https://lh3.googleusercontent.com/cSKqVW2BtwWwHLSLTyACjPi8xbzaCroPndAPPzkwX1tY1A8KuUmImvqnFH7FxOoeVvKU5ZC8NzYqTE_C23xziWvSkclCqUPrzlmAWGfY_YsVKgqLpN-ireTOlk32XvcY7A",
    events: [
      {
        start_at: "2022-06-01T19:00:00.000Z",
        end_at: "2022-06-01T19:00:00.000Z",
      },
    ],
  },
];

const scheduleEvents = [
  {
    title: "Hundid",
    slug: "hundid",
    description:
      "<p>Lavastus “Hundid” on jätk Liis Varese ja Taavet Janseni koostööle “Kõik loeb/ The Reader”, mille soe vastuvõtt on julgustanud neid digitaalse formaadiga edasi töötama.</p>",
    events: [
      {
        start_at: "2022-06-01T19:00:00.000Z",
        end_at: "2022-06-01T19:00:00.000Z",
        ticketUrl: "https://www.eventbrite.com/e/hundid-tickets-53907988984",
      },
      {
        start_at: "2022-07-01T19:00:00.000Z",
        end_at: "2022-07-01T19:00:00.000Z",
        ticketUrl: "https://www.eventbrite.com/e/hundid-tickets-53907988984",
      },
      {
        start_at: "2022-09-01T19:00:00.000Z",
        end_at: "2022-09-01T19:00:00.000Z",
        ticketUrl: "https://www.eventbrite.com/e/hundid-tickets-53907988984",
      },
    ],
  },
];

const productionDetails = [
  {
    detail: "Etenduse pikkus",
    value: "~50min",
  },
  {
    detail: "Lavastaja",
    value: "Taavet Jansen",
  },
  {
    detail: "Koreograaf",
    value: "Liis Vares",
  },
  {
    detail: "Dramaturg",
    value: "Tõnis Parksepp",
  },
  {
    detail: "Videokunstnik",
    value: "Alis Mäesalu",
  },
  {
    detail: "Valguskunstnik",
    value: "Fredi Karu",
  },
  {
    detail: "Heli",
    value: "Liisa Hirch, Hendrik Kaljujärv",
  },
  {
    detail: "Näitlejad",
    value: "Marion Tammet ja Anne Türnpu",
  },
  {
    detail: "Stilist",
    value: "Alissa Šnaider",
  },
  {
    detail: "Tänud",
    value:
      "Ahti Lill, Kätlin Sumberg, EKA doktorikool, TÜ Viljandi Kultuuriakadeemia, Peeter Jalakas, Raivo Kelomees, Jürgen Volmer, Anni Parksepp",
  },

  {
    detail: "Produtsent",
    value: "eˉlektron",
  },
  {
    detail: "Toetajad",
    value: "Eesti Kultuurkapital",
  },
];

const pressItems = [
  {
    title: "Kuidas ma festivalil käisin",
    link: "https://neti.ee",
    description: "Urmas Lüüs – Sirp 17.04.2020",
  },
  {
    title: "Tähendusloome tagurpidikäik",
    link: "https://neti.ee",
    description: "Kiwa – Sirp 17.04.2020",
  },
];

const inputValue = ref("I'm an input");
const numberInputValue = ref(5);
const checkboxValue = ref(true);
const radioValue = ref("yes");
const rangeValue = ref(25);
const rangeValue2 = ref(25);
const emailValue = ref("mail@hot.ee");

const image = {
  large: {
    ext: ".jpg",
    url: "https://elektron.fra1.digitaloceanspaces.com/strapi/8c594b89a52fabe94d29ffd4f3647eb2.jpg",
    hash: "8c594b89a52fabe94d29ffd4f3647eb2",
    mime: "image/jpeg",
    name: "large_plaadikaas(1).jpg",
    path: null,
    size: 139.64,
    width: 1000,
    height: 911,
  },
  small: {
    ext: ".jpg",
    url: "https://elektron.fra1.digitaloceanspaces.com/strapi/2483f5b1399359a4da6b5350c3b33ee8.jpg",
    hash: "2483f5b1399359a4da6b5350c3b33ee8",
    mime: "image/jpeg",
    name: "small_plaadikaas(1).jpg",
    path: null,
    size: 46.37,
    width: 500,
    height: 456,
  },
  medium: {
    ext: ".jpg",
    url: "https://elektron.fra1.digitaloceanspaces.com/strapi/e471eca723cf4ebb8443bf333c2f6904.jpg",
    hash: "e471eca723cf4ebb8443bf333c2f6904",
    mime: "image/jpeg",
    name: "medium_plaadikaas(1).jpg",
    path: null,
    size: 90.95,
    width: 750,
    height: 684,
  },
  thumbnail: {
    ext: ".jpg",
    url: "https://elektron.fra1.digitaloceanspaces.com/strapi/4600b99470fe300799fc1cce94ab104c.jpg",
    hash: "4600b99470fe300799fc1cce94ab104c",
    mime: "image/jpeg",
    name: "thumbnail_plaadikaas(1).jpg",
    path: null,
    size: 7.91,
    width: 171,
    height: 156,
  },
};

const images = [
  { sizes: Object.values(image) },
  { sizes: Object.values(image) },
  { sizes: Object.values(image) },
  { sizes: Object.values(image) },
];
</script>

<template>
  <div class="Components">
    <ETitle size="lg">Components</ETitle>

    <IconArrowRight />
    <br />
    <pre>ETitle</pre>
    <ETitle size="lg">Title lg</ETitle>
    <ETitle size="md">Title md</ETitle>
    <ETitle size="sm">Title sm</ETitle>
    <ETitle size="sm" title="Title containing<br>markup" />
    <br />
    <pre>EContent</pre>
    <EContent>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <p>
        <a href="https://elektron.art" target="_blank">eˉlektron</a> on
        transdistsiplinaarne etendustkunsti platvorm, mis liidab kaasaegse
        kunsti, teaduse ja tehnoloogia otsingulisi tegevusi.<br />Ootamatud
        kunstivormid, lavastused, tekstid, taskuhääling, eksperimendid.
      </p>
      <p>
        <b>e‾lektron</b> on moodustatud MIMprojecti ja Kanuti Gildi SAALi
        koostöös. Rahaline toetaja on Eesti kultuuriministeerium.
      </p>
      <p>
        <i>eˉlektron</i> is a halfway virtual, halfway physical platform that
        connects exploratory activities of performing arts and science.<br />Unexpected
        art forms, performances, texts, podcast, experiments.
      </p>
      <p>
        e‾lektron is realised in cooperation with MIMproject and Kanuti Gildi
        SAAL. Financial supporter is Estonian Ministry of Culture.
      </p>
      <p><small>Kes on eˉlektron? / Who is eˉlektron?</small></p>
      <ul>
        <li>Unordered list item</li>
        <li>Unordered list item</li>
        <li>Unordered list item</li>
        <li>Unordered list item</li>
        <li>Unordered list item</li>
      </ul>
      <ol>
        <li>Ordered list item</li>
        <li>Ordered list item</li>
        <li>Ordered list item</li>
        <li>Ordered list item</li>
        <li>Ordered list item</li>
      </ol>
      <blockquote>
        Marshall Stay is a multi-disciplinary performance-maker from Australia.
        Shortly after graduating from the Western Australian Academy of
        Performing Arts in 2018, he co-created and directed a number of
        award-nominated theatre pieces, as well as continuing his practice as a
        freelance photographer and videographer within the artistic community.
      </blockquote>
    </EContent>
    <EContent size="sm">
      <p>
        Content size small.
        <a href="https://elektron.art" target="_blank">eˉlektron</a> on
        transdistsiplinaarne etendustkunsti platvorm, mis liidab kaasaegse
        kunsti, teaduse ja tehnoloogia otsingulisi tegevusi.<br />Ootamatud
        kunstivormid, lavastused, tekstid, taskuhääling, eksperimendid.
      </p>
    </EContent>
    <EContent size="lg">
      <p>
        Content size large.
        <a href="https://elektron.art" target="_blank">eˉlektron</a> on
        transdistsiplinaarne etendustkunsti platvorm, mis liidab kaasaegse
        kunsti, teaduse ja tehnoloogia otsingulisi tegevusi.<br />Ootamatud
        kunstivormid, lavastused, tekstid, taskuhääling, eksperimendid.
      </p>
    </EContent>

    <br />
    <pre>EButton</pre>
    <div style="display: flex; align-items: flex-start; gap: var(--gap-4)">
      <EButton size="lg">Button lg</EButton>
      <EButton size="md">Button md as a element</EButton>
      <EButton size="sm" color="accent">Button sm accent colored</EButton>
      <EButton size="xs" color="accent">Button xs accent colored</EButton>
      <EButton size="xs" color="gray">Button xs gray colored</EButton>
    </div>

    <br />
    <pre>ELogo small</pre>
    <ELogo size="sm" />
    <pre>ELogo medium</pre>
    <ELogo size="md" />
    <pre>ELogo large</pre>
    <ELogo size="lg" />

    <br />
    <!-- <pre>ENav</pre>
    <ENav :navItems="navItems" /> -->

    <br />
    <pre>ENavButton</pre>
    <div
      :style="{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 'var(--gap-4)',
      }"
    >
      <ENavButton variant="outline">About us</ENavButton>
      <ENavButton>
        <IconArrowLeft />
        Tagasi
      </ENavButton>
    </div>

    <br />
    <pre>ECard</pre>
    <ECard
      :thumbnail="{
        sizes: [
          {
            url: 'https://lh3.googleusercontent.com/cSKqVW2BtwWwHLSLTyACjPi8xbzaCroPndAPPzkwX1tY1A8KuUmImvqnFH7FxOoeVvKU5ZC8NzYqTE_C23xziWvSkclCqUPrzlmAWGfY_YsVKgqLpN-ireTOlk32XvcY7A',
            width: 400,
            height: 400,
          },
        ],
      }"
    >
      <template #header>
        <ETitle el="h3" size="lg">Header</ETitle>
      </template>
      <template #footer>
        <ETitle el="h5" size="sm">Footer</ETitle>
      </template>
    </ECard>

    <br />
    <pre>EProductionCard</pre>
    <EProductionCard
      :title="productions[0].title"
      :author="productions[0].author"
      :thumbnail="{
        sizes: [{ url: productions[0].thumbnail, width: 400, height: 400 }],
      }"
      :next-event="{
        startAt: productions[0].events[0].start_at,
      }"
    />

    <br />
    <pre>EAboutPageCard</pre>
    <EAboutPageCard
      layout="columns1"
      color="accent"
      title="About us block"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur."
    />

    <br />
    <pre>ETeamCard</pre>
    <ETeamCard
      name="Jaanus Metsis"
      :thumbnail="{
        sizes: [
          {
            url: 'https://lh3.googleusercontent.com/cSKqVW2BtwWwHLSLTyACjPi8xbzaCroPndAPPzkwX1tY1A8KuUmImvqnFH7FxOoeVvKU5ZC8NzYqTE_C23xziWvSkclCqUPrzlmAWGfY_YsVKgqLpN-ireTOlk32XvcY7A',
            width: 400,
            height: 400,
          },
        ],
      }"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur."
    />

    <br />
    <pre>EScheduleEvent</pre>
    <EScheduleEvent
      v-for="event in scheduleEvents"
      :title="event.title"
      :description="event.description"
      :events="event.events"
      :path="`/lavastused/${event.slug}`"
    >
      <EEventInstance
        v-if="event.events"
        v-for="item in event.events"
        title="Etenduse pealkiri"
        :start-at="item.start_at"
        :end-at="item.end_at"
        :ticket-url="item.ticketUrl"
      />
    </EScheduleEvent>

    <br />
    <pre>EEventInstance</pre>
    <EEventInstance
      v-for="eventInstance in scheduleEvents[0].events"
      title="Etenduse pealkiri"
      :start-at="eventInstance.start_at"
      :end-at="eventInstance.end_at"
      :ticketUrl="eventInstance.ticketUrl"
      layout="vertical"
    />

    <br />
    <pre>EBox</pre>
    <EBox>
      <ETitle el="h3" size="md">Etendused</ETitle>
      <EEventInstance
        v-for="eventInstance in scheduleEvents[0].events"
        :start-at="eventInstance.start_at"
        :end-at="eventInstance.end_at"
        :ticketUrl="eventInstance.ticketUrl"
        layout="vertical"
      />
    </EBox>
    <EBox color="accent">
      <ETitle el="h3" size="md">Box wrapper accent colored</ETitle>
    </EBox>
    <EBox color="gray" ratio="1 / 1">
      <ETitle el="h3" size="md">Box wrapper gray colored</ETitle>
    </EBox>

    <br />
    <pre>ELivePreview</pre>
    <ELivePreview
      title="Hundid"
      thumbnail="https://lh3.googleusercontent.com/cSKqVW2BtwWwHLSLTyACjPi8xbzaCroPndAPPzkwX1tY1A8KuUmImvqnFH7FxOoeVvKU5ZC8NzYqTE_C23xziWvSkclCqUPrzlmAWGfY_YsVKgqLpN-ireTOlk32XvcY7A"
      ticketUrl="https://www.eventbrite.com/e/hundid-tickets-53907988984"
      start_at="00:12:44"
    />

    <br />
    <pre>EDetailsList</pre>
    <EDetailsList :details="productionDetails" />

    <br />
    <pre>EPressItems</pre>
    <EPressItems :items="pressItems" />

    <br />
    <pre>EInput</pre>
    <EInput placeholder="Placeholder value" v-model="inputValue" />
    <EInput placeholder="Placeholder value 2" v-model="inputValue" />
    <EInput placeholder="Disabled input" :disabled="true" />
    <EInput label="Label for input" placeholder="Placeholder value" />
    <EInput
      label="Disabled label for input"
      placeholder="Disabled input"
      :disabled="true"
    />

    <br />
    <pre>EFormText</pre>
    <EFormText placeholder="EFormText" v-model="inputValue" />
    <EFormText
      label="With label"
      placeholder="EFormText"
      v-model="inputValue"
    />

    <br />
    <pre>EFormTextArea</pre>
    <EFormTextArea placeholder="EFormTextArea" v-model="inputValue" />

    <br />
    <pre>EFormNumber</pre>
    <EFormNumber placeholder="EFormNumber" v-model="numberInputValue" />
    <EFormNumber
      label="With label"
      placeholder="EFormNumber"
      v-model="numberInputValue"
    />

    <pre>EFormEmail</pre>
    <EFormEmail placeholder="EFormEmail" v-model="emailValue" />

    <br />
    <pre>EFormCheckbox</pre>
    <EFormCheckbox label="Checkbox" v-model="checkboxValue" />
    <EFormCheckbox label="Checkbox disabled" :disabled="true" />

    <br />
    <pre>EFormRadio</pre>
    <EFormRadio
      :options="['yes', 'no', 'maybe']"
      name="radioButtons"
      v-model="radioValue"
    />
    <EFormRadio
      :options="['yes', 'no', 'maybe']"
      name="moreRadioButtons"
      :disabled="true"
    />
    <p>Radio value: {{ radioValue }}</p>

    <br />
    <pre>EFormRange</pre>
    <ELabel forInput="range" label="Range slider (0 to 100)" />
    <EFormRange
      :min="0"
      :max="100"
      v-model="rangeValue"
      label="Range slider"
      showOutput
    />
    <EFormRange :min="0" :max="100" v-model="rangeValue" showOutput />
    <EFormRange
      :min="0"
      :max="200"
      :step="20"
      v-model="rangeValue2"
      showMinMax
    />

    <EImageSlider :images="images" />
  </div>
</template>

<style scoped>
.Components {
  max-width: 600px;
  margin: 0 auto;
}
</style>
