import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Award, Star, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const transformationImages = [
  'https://media.base44.com/images/public/6a0dcd4ce5fb33a26b41c4d3/3dfea7530_Untitleddesign3.png',
  'https://media.base44.com/images/public/6a0dcd4ce5fb33a26b41c4d3/08c4fd28a_Untitleddesign1.png',
];
const reviews = [
  { quote: 'Po operácii chrbtice som sa vďaka individuálnemu plánu vrátil k športu za 5 mesiacov.', name: 'Matej, 34 rokov', role: 'Rehabilitačný klient', initial: 'M' },
  { quote: 'Nikdy som si nemyslela, že sa cítim tak dobre vo svojom tele. Tím v SiClube mi zmenil život.', name: 'Zuzana, 29 rokov', role: 'Kondičná príprava', initial: 'Z' },
  { quote: 'Chronické bolesti chrbta, s ktorými som žil roky, zmizli po 3 mesiacoch tréningu a terapie.', name: 'Peter, 42 rokov', role: 'Terapeutický klient', initial: 'P' },
  { quote: 'Profesionálny prístup, individuálny plán a skutoční odborníci. Odporúčam každému.', name: 'Lucia, 37 rokov', role: 'Výživový mentoring', initial: 'L' },
  { quote: 'Ako profesionálny futbalista som hľadal kondičného trénera na najvyššej úrovni. Našiel som ho tu.', name: 'Tomáš, 26 rokov', role: 'Športová príprava', initial: 'T' },
];
const stats = [
  { icon: Users, value: '1000+', label: 'spokojných klientov' },
  { icon: Award, value: '13+', label: 'rokov skúseností' },
  { icon: Star, value: 'Špičkoví', label: 'odborníci v oblasti pohybu' },
  { icon: Heart, value: 'Individuálny', label: 'prístup a reálne výsledky' },
];

function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + transformationImages.length) % transformationImages.length);
  const next = () => setCurrent((c) => (c + 1) % transformationImages.length);
  return (
    <div className="relative">
      <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(93,169,233,0.2)] aspect-square">
        <AnimatePresence mode="wait">
          <motion.img key={current} src={transformationImages[current]} alt="Client transformation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="w-full h-full object-cover" loading="lazy" decoding="async" />
        </AnimatePresence>
      </div>
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm shadow flex items-center justify-center hover:bg-white transition-colors"><ChevronLeft className="w-5 h-5 text-foreground" /></button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm shadow flex items-center justify-center hover:bg-white transition-colors"><ChevronRight className="w-5 h-5 text-foreground" /></button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {transformationImages.map((_, i) => (<button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-primary w-4' : 'bg-white/70'}`} />))}
      </div>
    </div>
  );
}

function ReviewCarousel() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);
  const review = reviews[current];
  return (
    <div className="mb-12">
      <div className="text-5xl text-primary/20 font-serif leading-none mb-4">"</div>
      <AnimatePresence mode="wait">
        <motion.div key={current} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
          <blockquote className="text-xl lg:text-2xl font-light text-foreground leading-relaxed min-h-[100px]">{review.quote}</blockquote>
          <div className="mt-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center"><span className="text-sm font-semibold text-primary">{review.initial}</span></div>
            <div><p className="text-sm font-semibold text-foreground">{review.name}</p><p className="text-xs text-muted-foreground">{review.role}</p></div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex items-center gap-3 mt-6">
        <button onClick={prev} className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary/40 hover:text-primary transition-colors"><ChevronLeft className="w-4 h-4" /></button>
        <div className="flex gap-1.5">{reviews.map((_, i) => (<button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-primary w-4' : 'bg-border'}`} />))}</div>
        <button onClick={next} className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary/40 hover:text-primary transition-colors"><ChevronRight className="w-4 h-4" /></button>
      </div>
    </div>
  );
}

export default function ClientResults() {
  return (
    <section id="vysledky" className="py-28 lg:py-40 bg-gradient-to-b from-secondary/30 via-secondary/50 to-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-20">
          <p className="text-xs font-medium tracking-[0.25em] text-primary uppercase mb-4">Výsledky klientov</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">Reálne premeny</h2>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}><ImageCarousel /></motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
            <ReviewCarousel />
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center"><stat.icon className="w-5 h-5 text-primary" strokeWidth={1.5} /></div>
                  <div><p className="text-lg font-bold text-foreground">{stat.value}</p><p className="text-xs font-light text-muted-foreground">{stat.label}</p></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}