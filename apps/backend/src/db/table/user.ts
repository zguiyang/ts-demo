import { integer, pgTable, varchar, text, date } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export const usersTable = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  username: varchar({ length: 255 }).notNull().unique(),
  avatar: text({}).notNull(),
  created_at: date().defaultNow().notNull(),
  updated_at: date().defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(usersTable);

export const selectUserSchema = createSelectSchema(usersTable);
