import { useState } from "react";
import { Check, X, Shield, Globe, Zap, Users, Code, BarChart3, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useLanguage } from "../hooks/use-language";

type BillingCycle = "monthly" | "6months" | "yearly";

export default function Pricing() {
  const [cycle, setCycle] = useState<BillingCycle>("yearly");
  const { t } = useLanguage();

  const plans = [
    {
      id: "starter",
      name: t("starter"),
      desc: t("starterDesc"),
      hasAds: false,
      prices: {
        monthly: 150,
        "6months": 125,
        yearly: 100
      },
      features: [
        { name: t("feature1"), included: true },
        { name: t("feature2"), included: true },
        { name: t("feature3"), included: true },
        { name: t("feature4"), included: true },
        { name: t("featureAds"), included: false },
        { name: t("feature9"), included: false },
        { name: t("feature14"), included: false },
      ],
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      id: "professional",
      name: t("professional"),
      desc: t("professionalDesc"),
      hasAds: false,
      popular: true,
      prices: {
        monthly: 200,
        "6months": 175,
        yearly: 150
      },
      features: [
        { name: t("feature1").replace("1", "10"), included: true },
        { name: t("feature6"), included: true },
        { name: t("feature7"), included: true },
        { name: t("feature8"), included: true },
        { name: t("feature9"), included: true },
        { name: t("feature10"), included: true },
        { name: t("featureAds"), included: false },
      ],
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />
    },
    {
      id: "enterprise",
      name: t("enterprise"),
      desc: t("enterpriseDesc"),
      hasAds: false,
      prices: {
        monthly: 250,
        "6months": 225,
        yearly: 200
      },
      features: [
        { name: t("feature11"), included: true },
        { name: t("feature12"), included: true },
        { name: t("feature13"), included: true },
        { name: t("feature14"), included: true },
        { name: t("feature15"), included: true },
        { name: t("feature16"), included: true },
        { name: t("featureAds"), included: false },
      ],
      icon: <Shield className="w-6 h-6 text-slate-700" />
    },
    {
      id: "starter-ads",
      name: t("starterAds"),
      desc: t("starterAdsDesc"),
      hasAds: true,
      prices: {
        monthly: 250,
        "6months": 225,
        yearly: 200
      },
      features: [
        { name: t("feature1"), included: true },
        { name: t("feature2"), included: true },
        { name: t("feature3"), included: true },
        { name: t("feature4"), included: true },
        { name: t("featureAds"), included: true },
        { name: t("feature9"), included: false },
        { name: t("feature14"), included: false },
      ],
      icon: <Megaphone className="w-6 h-6 text-orange-500" />
    },
    {
      id: "professional-ads",
      name: t("professionalAds"),
      desc: t("professionalAdsDesc"),
      hasAds: true,
      prices: {
        monthly: 300,
        "6months": 275,
        yearly: 250
      },
      features: [
        { name: t("feature1").replace("1", "10"), included: true },
        { name: t("feature6"), included: true },
        { name: t("feature7"), included: true },
        { name: t("feature8"), included: true },
        { name: t("feature9"), included: true },
        { name: t("feature10"), included: true },
        { name: t("featureAds"), included: true },
      ],
      icon: <Megaphone className="w-6 h-6 text-red-500" />
    },
    {
      id: "enterprise-ads",
      name: t("enterpriseAds"),
      desc: t("enterpriseAdsDesc"),
      hasAds: true,
      prices: {
        monthly: 350,
        "6months": 325,
        yearly: 300
      },
      features: [
        { name: t("feature11"), included: true },
        { name: t("feature12"), included: true },
        { name: t("feature13"), included: true },
        { name: t("feature14"), included: true },
        { name: t("feature15"), included: true },
        { name: t("feature16"), included: true },
        { name: t("featureAds"), included: true },
      ],
      icon: <Megaphone className="w-6 h-6 text-indigo-600" />
    }
  ];

  const standardPlans = plans.filter(p => !p.hasAds);
  const adsPlans = plans.filter(p => p.hasAds);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            {t("pricing")}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto"
          >
            {t("pricingSubtitle")}
          </motion.p>
          
          <div className="flex flex-col items-center gap-6">
            <Tabs value={cycle} onValueChange={(v) => setCycle(v as BillingCycle)} className="w-full max-w-md">
              <TabsList className="grid grid-cols-3 w-full h-12 p-1 bg-slate-100 dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 shadow-inner">
                <TabsTrigger value="monthly" className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm transition-all text-sm font-medium">
                  {t("monthly")}
                </TabsTrigger>
                <TabsTrigger value="6months" className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm transition-all text-sm font-medium">
                  {t("sixMonths")}
                </TabsTrigger>
                <TabsTrigger value="yearly" className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm transition-all text-sm font-medium">
                  {t("yearly")}
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={cycle}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Without Advertising Section */}
            <div className="mb-20">
              <div className="flex items-center gap-3 mb-8 justify-center">
                <div className="h-px w-12 bg-slate-200 dark:bg-slate-800"></div>
                <h2 className="text-xl font-bold text-slate-400 uppercase tracking-widest">{t("noAdsFeature")}</h2>
                <div className="h-px w-12 bg-slate-200 dark:bg-slate-800"></div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {standardPlans.map((plan, idx) => (
                  <PricingCard key={plan.id} plan={plan} cycle={cycle} t={t} idx={idx} />
                ))}
              </div>
            </div>

            {/* With Advertising Section */}
            <div>
              <div className="flex items-center gap-3 mb-8 justify-center">
                <div className="h-px w-12 bg-primary/30"></div>
                <h2 className="text-xl font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                  <Megaphone className="w-5 h-5" />
                  {t("advertisingFeature")}
                </h2>
                <div className="h-px w-12 bg-primary/30"></div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {adsPlans.map((plan, idx) => (
                  <PricingCard key={plan.id} plan={plan} cycle={cycle} t={t} idx={idx + 3} />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}

function PricingCard({ plan, cycle, t, idx }: { plan: any, cycle: BillingCycle, t: any, idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1 }}
      className={`relative flex flex-col h-full bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl border transition-all hover:shadow-2xl hover:-translate-y-1 ${
        plan.popular 
          ? 'border-primary ring-2 ring-primary/10' 
          : 'border-slate-100 dark:border-slate-800'
      } ${plan.hasAds ? 'bg-gradient-to-b from-white to-primary/5 dark:from-slate-900 dark:to-primary/10' : ''}`}
    >
      {plan.popular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
          {t("mostPopular")}
        </div>
      )}

      <div className="mb-6 flex items-center gap-4">
        <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl">
          {plan.icon}
        </div>
        <div>
          <h3 className="text-xl font-bold">{plan.name}</h3>
          <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">{plan.desc}</p>
        </div>
      </div>
      
      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-black tracking-tight">${plan.prices[cycle]}</span>
          <span className="text-slate-400 dark:text-slate-500 font-medium">/{t("monthly").toLowerCase()}</span>
        </div>
        <p className="text-slate-400 dark:text-slate-500 text-xs mt-2 italic">
          {cycle === 'yearly' ? t("yearly") : cycle === '6months' ? t("sixMonths") : t("monthly")}
        </p>
      </div>

      <Link href="/contact" className="mb-8">
        <Button 
          className={`w-full h-12 rounded-xl text-base font-bold transition-all ${
            plan.popular 
              ? 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20' 
              : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          {t("getStarted")}
        </Button>
      </Link>

      <div className="space-y-4 flex-grow">
        {plan.features.map((feature: any, fIdx: number) => (
          <div key={fIdx} className={`flex items-start gap-3 text-sm transition-all ${feature.included ? 'text-slate-700 dark:text-slate-200' : 'text-slate-400 dark:text-slate-600'}`}>
            <div className={`mt-0.5 shrink-0 p-0.5 rounded-full ${feature.included ? 'bg-green-100 dark:bg-green-900/30 text-green-600' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
              {feature.included ? <Check className="w-3.5 h-3.5" strokeWidth={3} /> : <X className="w-3.5 h-3.5" />}
            </div>
            <span className={feature.included ? 'font-medium' : ''}>{feature.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
