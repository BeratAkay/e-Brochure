import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactRequests = pgTable("contact_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  company: text("company").notNull(),
  phone: text("phone").notNull(),
  industry: text("industry").notNull(),
  message: text("message"),
});

export const templateRequests = pgTable("template_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  requestDetails: text("request_details").notNull(),
});

export const insertContactRequestSchema = createInsertSchema(contactRequests).omit({ id: true });
export const insertTemplateRequestSchema = createInsertSchema(templateRequests).omit({ id: true });

export type ContactRequest = typeof contactRequests.$inferSelect;
export type InsertContactRequest = z.infer<typeof insertContactRequestSchema>;
export type TemplateRequest = typeof templateRequests.$inferSelect;
export type InsertTemplateRequest = z.infer<typeof insertTemplateRequestSchema>;
