import { motion } from "framer-motion";
import { Zap, Share2, Target, BarChart, PlayCircle, Settings, Layout, Globe, Search, Layers } from "lucide-react";
import { useLanguage } from "../hooks/use-language";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <Settings className="w-12 h-12 text-primary" />,
      title: t("howItWorksStep1Title"),
      desc: t("howItWorksStep1Desc"),
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
    },
    {
      icon: <Layout className="w-12 h-12 text-accent" />,
      title: t("howItWorksStep2Title"),
      desc: t("howItWorksStep2Desc"),
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
    },
    {
      icon: <Layers className="w-12 h-12 text-green-500" />,
      title: t("howItWorksStep3Title"),
      desc: t("howItWorksStep3Desc"),
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
    },
    {
      icon: <Target className="w-12 h-12 text-orange-500" />,
      title: t("howItWorksStep4Title"),
      desc: t("howItWorksStep4Desc"),
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{t("howItWorks")}</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t("howItWorksDetailedSubtitle")}
          </p>
        </motion.div>

        <div className="space-y-24">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1 space-y-6">
                <div className="inline-flex p-4 rounded-3xl bg-slate-50 border border-slate-100 mb-2">
                  {step.icon}
                </div>
                <h2 className="text-3xl font-display font-bold">{step.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
                <div className="flex items-center gap-2 text-primary font-bold cursor-pointer hover:underline">
                  <PlayCircle className="w-5 h-5" />
                  {t("watchTutorial")}
                </div>
              </div>
              <div className="flex-1 w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-100 bg-slate-200">
                <iframe 
                  src={step.video} 
                  title={step.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
