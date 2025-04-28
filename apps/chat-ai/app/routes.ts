import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/chat-layout.tsx", [
    index("./routes/chat.tsx"),
    route("chat/:chatId", "./routes/chat-id.tsx"),
  ]),
] satisfies RouteConfig;
