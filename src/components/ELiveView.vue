<script setup lang="ts">
import { Draggable, breakpoints } from "../utils";
import { useIdle } from "@vueuse/core";
import { computed } from "vue";
import EBreadBoard from "./EBreadBoard.vue";
import EDraggablesDock from "./EDraggablesDock.vue";
import EDraggableMobile from "./EDraggableMobile.vue";
import DraggableContent from "./DraggableContent.vue";
import EDraggable from "./EDraggable.vue";
import EButton from "./EButton.vue";
import IconArrowLeft from "~icons/radix-icons/arrow-left";

type Props = {
  draggablesState: Draggable[];
  updateDraggablesDesktop: (draggable: Draggable) => void;
  updateDraggablesMobile: (draggable: Draggable) => void;
};

const mobile = breakpoints.smaller("large");
const { draggablesState, updateDraggablesDesktop, updateDraggablesMobile } =
  defineProps<Props>();

const draggableMaximised = computed(
  () => !!draggablesState.find((draggable) => draggable.isMaximised),
);
const { idle } = useIdle(3000); // 3 seconds idle
</script>

<template>
  <EBreadBoard :class="{ idle: idle }">
    <EButton class="backToEvent" size="xs" color="transparent" el="a">
      <IconArrowLeft />
      Back to event
    </EButton>
    <template v-if="mobile">
      <template
        v-for="draggable in draggablesState"
        :key="draggable.draggableId"
      >
        <EDraggableMobile
          :draggable="draggable"
          @update-draggables="updateDraggablesMobile"
        >
          <DraggableContent
            v-if="draggable.contentType"
            :content-type="draggable.contentType"
            :data="draggable.data"
          />
        </EDraggableMobile>
      </template>
    </template>
    <template v-else>
      <template
        v-for="draggable in draggablesState"
        :key="draggable.draggableId"
      >
        <EDraggable
          :draggable="draggable"
          @update-draggables="updateDraggablesDesktop"
        >
          <DraggableContent
            v-if="draggable.contentType"
            :content-type="draggable.contentType"
            :data="draggable.data"
          />
        </EDraggable>
      </template>
    </template>

    <EDraggablesDock
      v-if="mobile"
      :draggable-maximised="draggableMaximised"
      :draggables="draggablesState"
      :mobile="mobile"
      @update-draggables="updateDraggablesMobile"
    />
    <EDraggablesDock
      v-else
      :draggable-maximised="draggableMaximised"
      :draggables="draggablesState"
      @update-draggables="updateDraggablesDesktop"
    />
  </EBreadBoard>
</template>

<style scoped>
.backToEvent {
  z-index: 1;
}
@media only screen and (max-width: 899px) {
  .backToEvent {
    width: 100%;
    height: var(--h-6);
    background-color: var(--bg);
    border-bottom: 1px solid var(--gray-500);
  }
}
@media only screen and (min-width: 900px) {
  .backToEvent {
    position: fixed;
    top: var(--p-2);
    left: var(--p-2);
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
  .idle .backToEvent {
    opacity: 0;
  }
}
</style>
