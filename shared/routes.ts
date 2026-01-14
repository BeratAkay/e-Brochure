import { z } from 'zod';
import { insertContactRequestSchema, insertTemplateRequestSchema, contactRequests, templateRequests } from './schema';

export { insertContactRequestSchema, insertTemplateRequestSchema };
export type { InsertContactRequest, InsertTemplateRequest, ContactRequest, TemplateRequest } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  contact: {
    submit: {
      method: 'POST' as const, 
      path: '/api/contact',
      input: insertContactRequestSchema,
      responses: {
        201: z.custom<typeof contactRequests.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },
  templates: {
    request: {
      method: 'POST' as const,
      path: '/api/templates',
      input: insertTemplateRequestSchema,
      responses: {
        201: z.custom<typeof templateRequests.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },
};
