import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Úvodná konzultácia', desc: 'Zistíme vaše ciele, zdravotný stav a aktuálnu kondíciu.' },
  { num: '02', title: 'Diagnostika', desc: 'Podrobná analýza pohybu, držania tela a funkčných limitov.' },
  { num: '03', title: 'Individuálny plán', desc: 'Vytvoríme tréningový a terapeutický plán na mieru.' },
  { num: '04', title: 'Tréning & Monitoring', desc: 'Pravidelný tréning, terapia a sledovanie pokroku.' },
];

export default function HowItWorks() {
  return (
    <section className="py-28 lg:py-40 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-20">
          <p className="text-xs font-medium tracking-[0.25em] text-primary uppercase mb-4">Ako to funguje</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">Cesta k lepšiemu pohybu</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <motion.div key={step.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay: i * 0.1 }} className="relative">
              {i < steps.length - 1 && <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-px bg-gradient-to-r from-primary/30 to-primary/5" />}
              <div className="relative bg-white rounded-2xl p-8 lg:p-10 shadow-[0_2px_20px_-4px_rgba(93,169,233,0.08)] border border-border/50">
                <span className="text-5xl lg:text-6xl font-bold text-secondary select-none">{step.num}</span>
                <h3 className="text-lg font-semibold text-foreground mt-4 mb-3">{step.title}</h3>
                <p className="text-sm font-light text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}