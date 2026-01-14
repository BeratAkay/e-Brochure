import { useMutation } from "@tanstack/react-query";
import { type InsertContactRequest, type InsertTemplateRequest } from "@shared/routes";
import { useToast } from "./use-toast";
import { useLanguage } from "./use-language";

// POST /api/contact
export function useContactForm() {
  const { toast } = useToast();
  const { t } = useLanguage();
  
  return useMutation({
    mutationFn: async (data: InsertContactRequest) => {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error('Failed to submit contact request');
      }
      
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: t("sendMessage") || "Message Sent!",
        description: "Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.",
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
  const { t } = useLanguage();

  return useMutation({
    mutationFn: async (data: InsertTemplateRequest) => {
      const res = await fetch('/api/templates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error('Failed to submit template request');
      }

      return res.json();
    },
    onSuccess: () => {
      toast({
        title: t("submitDesignRequest") || "Request Received!",
        description: "Tasarım talebiniz başarıyla gönderildi. Ekibimiz sizinle iletişime geçecektir.",
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
