import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useLanguage } from "../hooks/use-language";

const examples = [
  {
    title: "Summer Fashion 2024",
    category: "Retail",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["Catalog", "Shopify"]
  },
  {
    title: "Tech Solutions Brief",
    category: "B2B",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    tags: ["Whitepaper", "Lead Gen"]
  },
  {
    title: "Luxury Real Estate",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    tags: ["Property", "Interactive"]
  },
  {
    title: "Organic Food Menu",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=800&q=80",
    tags: ["Menu", "QR Code"]
  },
  {
    title: "Travel Guide: Japan",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80",
    tags: ["Guide", "Video"]
  },
  {
    title: "Annual Report 2023",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    tags: ["Financial", "Charts"]
  }
];

export default function Gallery() {
  const { t } = useLanguage();
  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{t("inspirationGallery")}</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t("gallerySubtitle")}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            {[t("all"), "Retail", "B2B", "Real Estate", "Hospitality"].map((filter, i) => (
              <Button 
                key={filter} 
                variant={i === 0 ? "default" : "outline"}
                className={i === 0 ? "bg-primary" : "bg-white"}
              >
                {filter}
              </Button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input placeholder={t("searchExamples")} className="pl-10 bg-white" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <Badge className="absolute top-4 left-4 z-20 bg-white/90 text-primary hover:bg-white backdrop-blur-sm">
                  {item.category}
                </Badge>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <div className="pt-4 mt-4 border-t border-slate-100 flex justify-between items-center">
                   <span className="text-sm text-slate-400">{t("viewDemo")}</span>
                   <Button size="sm" variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/5 p-0">
                     {t("preview")} →
                   </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
