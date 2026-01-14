import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactRequestSchema, type InsertContactRequest } from "@shared/routes";
import { useContactForm } from "@/hooks/use-forms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../hooks/use-language";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const form = useForm<InsertContactRequest>({
    resolver: zodResolver(insertContactRequestSchema),
    defaultValues: {
      name: "",
      company: "",
      phone: "",
      industry: "",
      message: ""
    }
  });

  const mutation = useContactForm();

  const onSubmit = (data: InsertContactRequest) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          
          {/* Left Side: Info */}
          <div className="bg-slate-900 text-white p-12 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-display font-bold mb-6">{t("contact")}</h1>
              <p className="text-slate-400 text-lg mb-12">
                {t("contactSubtitle")}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold">{t("emailUs")}</div>
                    <div className="text-slate-400 text-sm">sales@ebrochure.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold">{t("callUs")}</div>
                    <div className="text-slate-400 text-sm">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold">{t("visitUs")}</div>
                    <div className="text-slate-400 text-sm">123 Innovation Dr, San Francisco</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-12">
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <p className="italic text-slate-300 mb-4">"The customer service team is phenomenal. They helped us integrate with our CRM in under an hour."</p>
                <div className="font-bold text-sm">— Mark D., Director of Sales</div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="p-12">
            <h2 className="text-2xl font-bold mb-6">{t("sendMessage") || "Bize mesaj gönderin"}</h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("fullName")}</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("phoneNumber")}</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (555) 000-0000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("companyName")}</FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Inc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("industry")}</FormLabel>
                        <FormControl>
                          <Input placeholder="Retail, Tech, etc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("howCanWeHelp")}</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="..." 
                          className="min-h-[120px]"
                          {...field} 
                          value={field.value || ''}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full btn-gradient" 
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? t("sending") : t("send")}
                </Button>
              </form>
            </Form>
          </div>

        </div>
      </div>
    </div>
  );
}
