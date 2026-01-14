import { motion } from "framer-motion";
import { Zap, Layers, BarChart, Leaf, Globe, Share2, Target, Settings, Layout, Database } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { LogoCarousel } from "@/components/LogoCarousel";
import { useLanguage } from "../hooks/use-language";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const testimonials = [
  {
    quote: "e-Brochure, sezonluk kataloglarımızı paylaşma şeklimizi tamamen değiştirdi. Satışlarımız %30 arttı.",
    author: "Ahmet Y.",
    role: "Pazarlama Müdürü",
    bg: "bg-blue-50"
  },
  {
    quote: "Analizler tam bir devrim. Broşürlerimizi kimlerin okuduğunu artık biliyorum.",
    author: "Mehmet T.",
    role: "Satış Lideri",
    bg: "bg-purple-50"
  },
  {
    quote: "Kullanımı inanılmaz kolay. Dakikalar içinde statik PDF'lerden etkileşimli sayfalara geçtik.",
    author: "Can L.",
    role: "Ajans Sahibi",
    bg: "bg-green-50"
  }
];

export default function Home() {
  const { t } = useLanguage();

  const steps = [
    { icon: <Zap className="w-6 h-6" />, title: t("step1Title"), desc: t("step1Desc") },
    { icon: <Database className="w-6 h-6" />, title: t("step2Title"), desc: t("step2Desc") },
    { icon: <Layout className="w-6 h-6" />, title: t("step3Title"), desc: t("step3Desc") },
    { icon: <Settings className="w-6 h-6" />, title: t("step4Title"), desc: t("step4Desc") },
    { icon: <Layers className="w-6 h-6" />, title: t("step5Title"), desc: t("step5Desc") },
    { icon: <Share2 className="w-6 h-6" />, title: t("step6Title"), desc: t("step6Desc") },
    { icon: <Target className="w-6 h-6" />, title: t("step7Title"), desc: t("step7Desc") },
    { icon: <BarChart className="w-6 h-6" />, title: t("step8Title"), desc: t("step8Desc") },
    { icon: <Globe className="w-6 h-6" />, title: t("step9Title"), desc: t("step9Desc") }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-b from-blue-50/50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                {t("aiPowered")}
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-display font-bold leading-tight mb-6">
                {t("heroTitle")}
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {t("heroSubtitle")}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact">
                  <Button size="lg" className="btn-gradient rounded-full text-lg px-8 h-12">
                    {t("getStarted")}
                  </Button>
                </Link>
                <Link href="/brochures">
                  <Button variant="outline" size="lg" className="rounded-full text-lg px-8 h-12 border-primary/20 hover:bg-primary/5 hover:text-primary">
                    {t("seeExamples")}
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hidden lg:block relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl transform scale-75" />
              <div className="relative mx-auto border-gray-800 bg-gray-900 border-[8px] rounded-[1.5rem] h-[400px] w-full max-w-[600px] shadow-2xl overflow-hidden">
                <div className="w-full h-full bg-slate-100">
                  <Carousel
                    plugins={[
                      Autoplay({
                        delay: 3000,
                      }),
                    ]}
                    className="w-full h-full"
                  >
                    <CarouselContent className="h-full">
                      {[1, 2, 3].map((_, index) => (
                        <CarouselItem key={index} className="h-full">
                          <img 
                            src="/src/assets/dashboard-preview.png" 
                            alt={`Platform Screenshot ${index + 1}`} 
                            className="w-full h-full object-cover"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{t("benefits")}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              {t("benefitsSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 p-8 bg-primary rounded-3xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">{t("overallGoal")}</h3>
            <p className="text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {t("overallGoalDesc")}
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">{t("whyDigital")}</h2>
            <p className="text-slate-600">{t("whyDigitalSubtitle")}</p>
          </div>

          <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200 p-4 text-sm font-bold text-slate-700">
              <div className="pl-4">{t("feature")}</div>
              <div className="text-center text-slate-400">{t("traditionalPdf")}</div>
              <div className="text-center text-primary">e-Brochure</div>
            </div>
            
            {[
              { label: t("productionCost"), pdf: t("highCost"), app: t("lowCost"), icon: <BarChart className="w-4 h-4" /> },
              { label: t("distributionSpeed"), pdf: t("daysWeeks"), app: t("instant"), icon: <Zap className="w-4 h-4" /> },
              { label: t("analytics"), pdf: t("none"), app: t("realTime"), icon: <BarChart className="w-4 h-4" /> },
              { label: t("ecoFriendly"), pdf: t("paperWaste"), app: t("digital100"), icon: <Leaf className="w-4 h-4" /> },
              { label: t("mobileFriendly"), pdf: t("pinchZoom"), app: t("nativeFeel"), icon: <Layers className="w-4 h-4" /> },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 p-6 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors items-center">
                <div className="flex items-center gap-2 font-medium text-slate-700 pl-4">
                  {row.icon} {row.label}
                </div>
                <div className="text-center text-slate-500">{row.pdf}</div>
                <div className="text-center font-bold text-primary">{row.app}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">{t("testimonialsTitle")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((test, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-800 p-8 rounded-2xl border border-slate-700"
              >
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(star => (
                    <span key={star} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic">"{test.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${test.bg} flex items-center justify-center text-slate-700 font-bold`}>
                    {test.author[0]}
                  </div>
                  <div>
                    <div className="font-bold">{test.author}</div>
                    <div className="text-xs text-slate-400">{test.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-display font-bold mb-6">{t("ctaTitle")}</h2>
          <p className="text-blue-100 text-lg mb-10">{t("ctaSubtitle")}</p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-blue-50 hover:text-primary rounded-full px-10 py-6 text-lg font-bold shadow-2xl">
              {t("freeTrial")}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
