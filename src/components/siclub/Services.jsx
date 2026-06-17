import { motion } from 'framer-motion';

const cardClass = "group relative rounded-2xl overflow-hidden border border-border/50 bg-white shadow-[0_2px_20px_-4px_rgba(93,169,233,0.06)]";
const imgClass = "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out";
const motionProps = (i) => ({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-60px' }, transition: { duration: 0.6, delay: i * 0.08 } });

export default function Services() {
  return (
    <section id="sluzby" className="py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-20">
          <p className="text-xs font-medium tracking-[0.25em] text-primary uppercase mb-4">Naše služby</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">Komplexná starostlivosť</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div {...motionProps(0)} className={cardClass}>
            <div className="aspect-[4/3] overflow-hidden"><img src="https://media.base44.com/images/public/6a0dcd4ce5fb33a26b41c4d3/215b98a22_SIClub-50.jpg" alt="Osobné tréningy" className={imgClass} loading="lazy" decoding="async" /></div>
            <div className="p-6 lg:p-8"><h3 className="text-lg font-semibold text-foreground mb-2">Osobné tréningy</h3><p className="text-sm font-light text-muted-foreground leading-relaxed">Ponúkame odbornú pomoc a tréning bežnej populácie až po amatérsky alebo profesionálny šport. Správnou kombináciou tréningov, zmien v životnom štýle a manažmentom stresu vás vieme vrátiť do hry.</p></div>
          </motion.div>
          <motion.div {...motionProps(1)} className={cardClass}>
            <div className="aspect-[4/3] overflow-hidden"><img src="https://media.base44.com/images/public/6a0dcd4ce5fb33a26b41c4d3/e91f3eddb_SIClub-204.jpg" alt="ART Terapia" className={imgClass} loading="lazy" decoding="async" /></div>
            <div className="p-6 lg:p-8"><h3 className="text-lg font-semibold text-foreground mb-2">ART terapia</h3><p className="text-sm font-light text-muted-foreground leading-relaxed">Špeciálne terapie a diagnostiky ktoré nájdete iba u nás. Na odstránenie akútneho problému v ktorom sa snúbia rôzne terapeutické techniky a postupy využívame techniku uvoľňovania mäkkých tkanív – ART.</p></div>
          </motion.div>
          <motion.div {...motionProps(2)} className={cardClass}>
            <div className="aspect-[4/3] overflow-hidden"><img src="https://media.base44.com/images/public/6a0dcd4ce5fb33a26b41c4d3/1993d6b9e_SIClub-54.jpg" alt="Malý skupinový tréning" className={imgClass} loading="lazy" decoding="async" /></div>
            <div className="p-6 lg:p-8"><h3 className="text-lg font-semibold text-foreground mb-2">Malý skupinový tréning</h3><p className="text-sm font-light text-muted-foreground leading-relaxed">Vytvorili sme skupinový program pre všetkých, čo majú radi skupinové aktivity. Malý skupinový tréning, pre uzavretú skupinu max. 6 ľudí, je zameraný na opätovné navrátenie mobility, správneho dýchania, ktoré nielen zmobilizuje telo, ale uvoľní aj myseľ.</p></div>
          </motion.div>
          <motion.div {...motionProps(3)} className={cardClass}>
            <div className="aspect-[4/3] overflow-hidden"><img src="https://media.base44.com/images/public/6a0dcd4ce5fb33a26b41c4d3/f0d2fb404_SIClub-237.webp" alt="Diagnostika" className={imgClass} loading="lazy" decoding="async" /></div>
            <div className="p-6 lg:p-8"><h3 className="text-lg font-semibold text-foreground mb-2">Diagnostika</h3><p className="text-sm font-light text-muted-foreground leading-relaxed">Diagnostika je nesmierne dôležitá pre ďalší postup v terapii či tréningu a preto diagnostikou začíname každý proces s klientom. Najzákladnejším testovaním u nás je tzv. Vstupné testovanie, podľa ktorého nastavujeme výber produktov a služieb pre daného človeka.</p></div>
          </motion.div>
          <motion.div {...motionProps(4)} className={cardClass}>
            <div className="aspect-[4/3] overflow-hidden"><img src="https://media.base44.com/images/public/6a0dcd4ce5fb33a26b41c4d3/ad8dbfd3a_SIClub-82.jpg" alt="Výživový mentoring" className={imgClass} loading="lazy" decoding="async" /></div>
            <div className="p-6 lg:p-8"><h3 className="text-lg font-semibold text-foreground mb-2">Výživový mentoring</h3><p className="text-sm font-light text-muted-foreground leading-relaxed">Chudnutie a energia nie sú len výsledkom diéty, ale komplexnou zmenou životného štýlu. Náprava spánku, trávenia, pitného režimu, pravidelnosti stravovania a mnohých ďalších súčastí spolu prinášajú omnoho viac benefitov ako je len chudnutie.</p></div>
          </motion.div>
          <motion.div {...motionProps(5)} className={cardClass}>
            <div className="aspect-[4/3] overflow-hidden"><img src="https://media.base44.com/images/public/6a0dcd4ce5fb33a26b41c4d3/a8896f678_SIClub-211.jpg" alt="Rehabilitácia" className={imgClass} loading="lazy" decoding="async" /></div>
            <div className="p-6 lg:p-8"><h3 className="text-lg font-semibold text-foreground mb-2">Rehabilitácia a prehabilitácia</h3><p className="text-sm font-light text-muted-foreground leading-relaxed">Komplexná starostlivosť pod vedením špičkových odborníkov pre rýchly a bezpečný návrat do plného zaťaženia. Či už ide o rekonvalescenciu po akútnych úrazoch, odstraňovanie chronických bolestí chrbta, alebo preventívnu prípravu kĺbov.</p></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}