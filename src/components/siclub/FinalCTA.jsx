import { motion } from 'framer-motion';
import { Phone, Mail, ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="kontakt" className="py-28 lg:py-40 bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7 }}>
            <a href="#" className="inline-block mb-10">
              <img src="https://media.base44.com/images/public/6a0dcd4ce5fb33a26b41c4d3/e116a4dd3_Untitleddesign.png" alt="SiCLUB by Strength Institute" className="h-12 w-auto brightness-0 invert" />
            </a>
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight">Dohodnite si úvodnú<br />konzultáciu ešte dnes.</h2>
            <p className="mt-6 text-lg font-light text-white/60 max-w-md leading-relaxed">Prvý krok k lepšiemu pohybu a zdraviu je len jedno kliknutie ďaleko.</p>
            <a href="/rezervacia" className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-full bg-primary text-white font-medium text-sm hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5">
              Rezervovať konzultáciu <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7, delay: 0.15 }} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center"><Phone className="w-5 h-5 text-primary" /></div>
                <div><p className="text-xs font-medium text-white/40 uppercase tracking-wider mb-1">Telefón</p><a href="tel:+421948123456" className="text-lg font-medium text-white hover:text-primary transition-colors">+421 948 123 456</a></div>
              </div>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center"><Mail className="w-5 h-5 text-primary" /></div>
                <div><p className="text-xs font-medium text-white/40 uppercase tracking-wider mb-1">Email</p><a href="mailto:info@siclub.sk" className="text-lg font-medium text-white hover:text-primary transition-colors">info@siclub.sk</a></div>
              </div>
            </div>
            <a href="https://wa.me/421948123456" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <div><p className="text-xs font-medium text-white/40 uppercase tracking-wider mb-1">WhatsApp</p><p className="text-lg font-medium text-white group-hover:text-green-400 transition-colors">Napíšte nám správu</p></div>
            </a>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-xs font-medium text-white/40 uppercase tracking-wider mb-3">Otváracie hodiny</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-white/70">Pondelok – Piatok</span><span className="font-medium text-white">7:00 – 21:00</span></div>
                <div className="flex justify-between"><span className="text-white/70">Sobota</span><span className="font-medium text-white">9:00 – 14:00</span></div>
                <div className="flex justify-between"><span className="text-white/70">Nedeľa</span><span className="font-medium text-white">9:00 – 14:00</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}