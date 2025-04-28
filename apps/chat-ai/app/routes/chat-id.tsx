import type { Route } from "./+types/chat-id";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Chat AI" },
    { name: "description", content: "Welcome to Chat AI!" },
  ];
}

const ChatId = () => {
  return <div>ChatId</div>;
};

export default ChatId;
