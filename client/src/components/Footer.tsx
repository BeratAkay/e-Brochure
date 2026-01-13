import { Twitter, Linkedin, Instagram, Github, BookOpen } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "../hooks/use-language";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                e-Brochure
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {t("footerDesc")}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">{t("product")}</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="#" className="hover:text-primary transition-colors">{t("features")}</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">{t("pricing")}</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">{t("templates")}</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">{t("caseStudies")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-4">{t("company")}</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="#" className="hover:text-primary transition-colors">{t("aboutUs")}</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">{t("careers")}</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">{t("blog")}</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">{t("contact")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-4">{t("legal")}</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="#" className="hover:text-primary transition-colors">{t("privacyPolicy")}</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">{t("termsOfService")}</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">{t("cookiePolicy")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} e-Brochure. {t("allRightsReserved")}</p>
          <p>{t("madeWith")}</p>
        </div>
      </div>
    </footer>
  );
}
