import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Linkedin, Mail } from "lucide-react";

const Index = () =>
<div className="pt-16">
    {/* Hero */}
    <section className="section-padding min-h-[80vh] flex flex-col justify-center max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">Portfolio</p>
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground leading-tight">
          Lucas <span className="gradient-text">MANANTSOA</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl whitespace-pre-line">
          BTS SIO SISR{"\n"}
          Solutions d'Infrastructure, Systèmes et Réseaux
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/situations"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity">
            Voir les situations professionnelles <ArrowRight size={16} />
          </Link>
          <Link
            to="/a-propos"
            className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium text-sm hover:bg-secondary transition-colors">
            En savoir plus
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/cv-lucas.pdf"
            download
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity">
            <Download size={16} /> Télécharger mon CV
          </a>
          <a
            href="https://linkedin.com/in/lucas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-secondary transition-colors">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="mailto:lucas@example.com"
            className="inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-secondary transition-colors">
            <Mail size={16} /> Email
          </a>
        </div>
      </motion.div>
    </section>
  </div>;

export default Index;