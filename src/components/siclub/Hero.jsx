import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const heroImage = 'https://media.base44.com/images/public/6a0dcd4ce5fb33a26b41c4d3/93ca1ebec_SIClub-10.webp';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-100 from-white/100" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pb-24 pt-40 lg:pb-32 lg:pt-48">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground">
            OBNOVUJEME<br />POHYB, SILU<br /><span className="text-primary">A VÝKON.</span>
          </h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="mt-8 text-lg lg:text-xl font-light text-muted-foreground max-w-md leading-relaxed">
            Individuálny prístup pre zdravie, rehabilitáciu a výkonnosť. Pomáhame vám dosiahnuť najlepšiu verziu seba.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }} className="mt-10 flex flex-wrap gap-4">
            <a href="/rezervacia" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5">
              Rezervovať konzultáciu <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#sluzby" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-medium text-sm hover:border-primary/40 hover:text-primary transition-all duration-300">Naše služby</a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
        <span className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }} className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent" />
      </motion.div>
    </section>
  );
}