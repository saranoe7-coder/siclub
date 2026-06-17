import { motion } from 'framer-motion';
import { Activity, Zap, Flame, HeartPulse } from 'lucide-react';

const audiences = [
  { icon: Activity, title: 'Bolesti a mobilita', desc: 'Riešime bolesti chrbta, kĺbov a pohybové obmedzenia.' },
  { icon: Zap, title: 'Výkon a kondícia', desc: 'Zlepšujeme silu, kondíciu a športový výkon.' },
  { icon: Flame, title: 'Chudnutie a energia', desc: 'Pomáhame meniť životný štýl, redukovať stres a mať viac energie.' },
  { icon: HeartPulse, title: 'Rehabilitácia', desc: 'Odborná starostlivosť po úrazoch a operáciách.' },
];
const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };

export default function TargetAudience() {
  return (
    <section className="py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-20">
          <p className="text-xs font-medium tracking-[0.25em] text-primary uppercase mb-4">Pre koho je SiCLUB</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">Pomáhame vám byť lepší</h2>
        </motion.div>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((a) => (
            <motion.div key={a.title} variants={item} className="group text-center p-8 lg:p-10 rounded-2xl border border-transparent hover:border-border hover:shadow-[0_8px_40px_-12px_rgba(93,169,233,0.12)] transition-all duration-500">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <a.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{a.title}</h3>
              <p className="text-sm font-light text-muted-foreground leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}