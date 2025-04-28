import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi";

const signupSchema = z.object({
  email: z.string().email(),
  name: z.string().min(3),
  password: z.string().min(6),
});

export const chatRouter = new OpenAPIHono().openapi(
  createRoute({
    path: "/hello",
    method: "get",
    responses: {
      200: {
        content: {
          "application/json": {
            schema: signupSchema,
          },
        },
        description: "Create user",
      },
    },
  }),
  (c) => {
    return c.json({ x: "hello" });
  }
);
