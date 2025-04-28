import type { Route } from "./+types/chat";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Chat AI" },
    { name: "description", content: "Welcome to Chat AI!" },
  ];
}

const Chat = () => {
  return <div>Chat</div>;
};

export default Chat;
