import { useRef } from 'react';
import { motion } from 'framer-motion';

const partners = ['Finsoft s.r.o.','SAMSUNG','DCaHERM','STAEG','MEDIAORBIS','ENVIROVIA','M-ex Production','B-five s.r.o.','xNet','Grimaldi Production','EUROPAPIER','Motýľ','HOLANOVA s.r.o.','PULI medical','berolina','metatron','IRD','F&M správa','DR. MAGNET','MARAM group','CGU','DMi Trading','Sundis','act legal','tkp reality','dotcom advertising','Anna Park','Dočista','jaar','DENTLY','COMISULT','Trive','Marco Mirelli','F&M registratúr','SEPTEMBER','Studio E','Mayer/McCann','CEVARO.SK','Dedoles','LZ STAV','MCIS s.r.o.','Kulito s.r.o.','Corporate Solutions','Andrea Straková','JP projects','Proced Consulting'];

export default function Partners() {
  const trackRef = useRef(null);
  return (
    <section className="py-16 lg:py-24 bg-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-14">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center">
          <p className="text-xs font-medium tracking-[0.25em] text-white/40 uppercase mb-3">Partneri</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-white/20">Dôverujú nám</h2>
        </motion.div>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-foreground to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-foreground to-transparent pointer-events-none" />
        <div className="flex overflow-hidden">
          <motion.div ref={trackRef} className="flex gap-8 items-center whitespace-nowrap" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 160, ease: 'linear', repeat: Infinity }}>
            {[...partners, ...partners].map((name, i) => (
              <div key={i} className="flex-shrink-0 px-6 py-3 rounded-xl border border-white/10 bg-white/5">
                <span className="text-white/50 font-semibold text-sm lg:text-base tracking-wide hover:text-white/80 transition-colors duration-300 cursor-default">{name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}