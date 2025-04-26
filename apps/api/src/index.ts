import { db } from "@repo/database/index";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  const datab = db;
  return c.text("Hello Hono!");
});

export default app;
