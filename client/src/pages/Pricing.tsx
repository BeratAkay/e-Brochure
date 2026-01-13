import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useLanguage } from "../hooks/use-language";

export default function Pricing() {
  const [annual, setAnnual] = useState(true);
  const { t } = useLanguage();

  const plans = [
    {
      name: t("starter"),
      price: 0,
      desc: t("starterDesc"),
      features: [
        "1 Active Brochure",
        "Basic Analytics",
        "Standard Templates",
        "e-Brochure Branding"
      ],
      missing: ["Custom Domain", "Team Collaboration", "API Access"]
    },
    {
      name: t("professional"),
      price: 29,
      popular: true,
      desc: t("professionalDesc"),
      features: [
        "10 Active Brochures",
        "Advanced Analytics",
        "Premium Templates",
        "No Branding",
        "Custom Domain",
        "Priority Support"
      ],
      missing: ["API Access"]
    },
    {
      name: t("enterprise"),
      price: 99,
      desc: t("enterpriseDesc"),
      features: [
        "Unlimited Brochures",
        "Real-time Heatmaps",
        "Custom Design System",
        "API Access",
        "SSO & Advanced Security",
        "Dedicated Success Manager"
      ],
      missing: []
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold mb-4">{t("pricing")}</h1>
          <p className="text-lg text-slate-600 mb-8">{t("pricingSubtitle")}</p>
          
          <div className="flex items-center justify-center gap-4">
            <Label htmlFor="billing" className={`text-sm font-medium ${!annual ? 'text-primary' : 'text-slate-500'}`}>{t("monthly")}</Label>
            <Switch id="billing" checked={annual} onCheckedChange={setAnnual} />
            <Label htmlFor="billing" className={`text-sm font-medium ${annual ? 'text-primary' : 'text-slate-500'}`}>
              {t("yearly")} <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full ml-1">-20%</span>
            </Label>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`relative bg-white rounded-2xl p-8 shadow-lg border ${
                plan.popular ? 'border-primary ring-2 ring-primary/20' : 'border-slate-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {t("mostPopular")}
                </div>
              )}

              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-slate-500 text-sm mb-6 h-10">{plan.desc}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold">${annual ? (plan.price > 0 ? plan.price * 0.8 : 0).toFixed(0) : plan.price}</span>
                <span className="text-slate-400">/{annual ? "year" : "month"}</span>
              </div>

              <Link href="/contact">
                <Button className={`w-full mb-8 ${plan.popular ? 'btn-gradient' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}>
                  {plan.price === 0 ? t("freeTrial") : t("getStarted")}
                </Button>
              </Link>

              <div className="space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
                {plan.missing.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm text-slate-400">
                    <X className="w-5 h-5 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
