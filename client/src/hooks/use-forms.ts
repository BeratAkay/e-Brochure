import { useMutation } from "@tanstack/react-query";
import { api, type InsertContactRequest, type InsertTemplateRequest } from "@shared/routes";
import { useToast } from "./use-toast";

// POST /api/contact
export function useContactForm() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertContactRequest) => {
      const validated = api.contact.submit.input.parse(data);
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.contact.submit.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error('Failed to submit contact request');
      }
      
      return api.contact.submit.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you shortly.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}

// POST /api/templates
export function useTemplateRequest() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertTemplateRequest) => {
      const validated = api.templates.request.input.parse(data);
      const res = await fetch(api.templates.request.path, {
        method: api.templates.request.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.templates.request.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error('Failed to submit template request');
      }

      return api.templates.request.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Request Received!",
        description: "Our design team will review your template requirements.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Request Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
