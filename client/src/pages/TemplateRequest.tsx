import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertTemplateRequestSchema, type InsertTemplateRequest } from "@shared/routes";
import { useTemplateRequest } from "@/hooks/use-forms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Palette, PenTool, Layout } from "lucide-react";

import { useLanguage } from "../hooks/use-language";

export default function TemplateRequest() {
  const { t } = useLanguage();
  const form = useForm<InsertTemplateRequest>({
    resolver: zodResolver(insertTemplateRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      requestDetails: ""
    }
  });

  const mutation = useTemplateRequest();

  const onSubmit = (data: InsertTemplateRequest) => {
    mutation.mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
            <Palette className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-display font-bold mb-4">{t("requestCustomTemplate")}</h1>
          <p className="text-lg text-slate-600">
            {t("customTemplateDesc")}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("yourName")}</FormLabel>
                      <FormControl>
                        <Input placeholder="Jane Smith" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("emailAddress")}</FormLabel>
                      <FormControl>
                        <Input placeholder="jane@company.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="requestDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("describeIdealTemplate")}</FormLabel>
                    <div className="bg-blue-50 p-4 rounded-lg mb-2 text-sm text-blue-800 flex gap-2">
                       <Layout className="w-4 h-4 mt-0.5 shrink-0" />
                       <p>{t("templatePrompt")}</p>
                    </div>
                    <FormControl>
                      <Textarea 
                        placeholder="..." 
                        className="min-h-[200px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full btn-gradient py-6 text-lg" 
                disabled={mutation.isPending}
              >
                {mutation.isPending ? <PenTool className="w-5 h-5 mr-2 animate-spin" /> : <PenTool className="w-5 h-5 mr-2" />}
                {mutation.isPending ? t("submitting") : t("submitDesignRequest")}
              </Button>
            </form>
          </Form>
        </div>

      </div>
    </div>
  );
}
