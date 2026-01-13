export const storage = {
  createContactRequest: async (req: any) => ({ ...req, id: 1, createdAt: new Date() }),
  createTemplateRequest: async (req: any) => ({ ...req, id: 1, createdAt: new Date() }),
};
