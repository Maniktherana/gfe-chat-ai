import { sql } from "drizzle-orm";
import { AnySQLiteColumn } from "drizzle-orm/sqlite-core";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";
import z from "zod";

export const usersTable = sqliteTable("users", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  email: text().notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  avatar: text().notNull(),
});

export const conversationsTable = sqliteTable("conversations", {
  id: int().primaryKey({ autoIncrement: true }),
  title: text(),
  userId: int("user_id").references(() => usersTable.id),
  startTime: text("start_time").default(sql`CURRENT_TIMESTAMP`),
  lastUpdateTime: text("last_update_time").default(sql`CURRENT_TIMESTAMP`),
  status: text().default("active"),
  totalMessages: int("total_messages").default(0),
  totalTokens: int("total_tokens").default(0),
});

export const messagesTable = sqliteTable("messages", {
  id: int("id").primaryKey({ autoIncrement: true }),
  conversationId: int("conversation_id")
    .notNull()
    .references(() => conversationsTable.id),
  parentMessageId: int("parent_message_id").references(
    (): AnySQLiteColumn => messagesTable.id
  ),
  role: text().notNull(), // 'user', 'assistant', 'system'
  content: text().notNull(),
  isRegenerated: int("is_regenerated", { mode: "boolean" }).default(false),
});

export const regenerationsTable = sqliteTable("regenerations", {
  id: int().primaryKey({ autoIncrement: true }),
  originalMessageId: int("original_message_id")
    .notNull()
    .references(() => messagesTable.id),
  regeneratedMessageId: int("regenerated_message_id")
    .notNull()
    .references(() => messagesTable.id),
  regeneratedAt: text("regenerated_at").default(sql`CURRENT_TIMESTAMP`),
});

export const userSelectSchema = createSelectSchema(usersTable);
export const userInsertSchema = createInsertSchema(usersTable);
export const userUpdateSchema = createUpdateSchema(usersTable);

export const conversationSelectSchema = createSelectSchema(conversationsTable);
export const conversationInsertSchema = createInsertSchema(conversationsTable);
export const conversationUpdateSchema = createUpdateSchema(conversationsTable);

export const messageSelectSchema = createSelectSchema(messagesTable, {
  role: z.enum(["user", "system", "assistant"]),
});
export const messageInsertSchema = createInsertSchema(messagesTable, {
  role: z.enum(["user", "system", "assistant"]),
});
export const messageUpdateSchema = createUpdateSchema(messagesTable, {
  role: z.enum(["user", "system", "assistant"]),
});

export const regenerationSelectSchema = createSelectSchema(regenerationsTable);
export const regenerationInsertSchema = createInsertSchema(regenerationsTable);
export const regenerationUpdateSchema = createUpdateSchema(regenerationsTable);
