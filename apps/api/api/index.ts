import { OpenAPIHono } from "@hono/zod-openapi";
import { handle } from "hono/vercel";
import { chatRouter } from "./routes/user/chat.index";

export const config = {
  runtime: "edge",
};

const app = new OpenAPIHono().route("/api", chatRouter).basePath("/api");

app.get("/", (c) => {
  return c.json({ message: "Hello Hono!" });
});

export default handle(app);
