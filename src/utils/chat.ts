import { computed, ref } from "vue";
import { useMessage } from "./message";
import type { MessageType } from "./message";
import { useScrollToBottom, useTextarea } from "./dom";

export function useChat(
  channel: string,
  sentMessageType: MessageType = "CHAT",
  receiveMessageType: MessageType = "CHAT",
) {
  const { messages, sendMessage } = useMessage();
  const chatMessages = computed(() => {
    return messages.value.filter(
      (m) => m.type === receiveMessageType && m.channel === channel,
    );
  });

  const newChatMessage = ref("");

  const onNewChatMessage = () => {
    if (newChatMessage.value) {
      sendMessage({
        type: sentMessageType || "CHAT",
        channel: channel,
        value: newChatMessage.value,
        store: true,
      });
      newChatMessage.value = "";
    }
  };

  const textareaRef = useTextarea(onNewChatMessage);
  const scrollRef = useScrollToBottom();

  return {
    chatMessages,
    newChatMessage,
    onNewChatMessage,
    scrollRef,
    textareaRef,
  };
}
