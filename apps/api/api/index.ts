import { handle } from "hono/vercel";

import { OpenAPIHono } from "@hono/zod-openapi";

import { db } from "@repo/database/index";
import { chatRouter } from "./routes/user/chat.index";

export const config = {
  runtime: "nodejs",
};

const app = new OpenAPIHono().route("/", chatRouter);

app.get("/", (c) => {
  const datab = db;
  return c.text("Hello Hono!");
});

export default handle(app);
