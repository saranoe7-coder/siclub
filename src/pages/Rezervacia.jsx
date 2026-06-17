import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

const PRICE = 262;
const steps = ['goal', 'commitment', 'price', 'contact', 'success'];

export default function Rezervacia() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ goal: '', commitment: false });
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [submitting, setSubmitting] = useState(false);
  const current = steps[step];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setStep(4);
  };

  const variants = { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -30 } };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-20">
      <a href="/" className="mb-12">
        <img src="https://media.base44.com/images/public/6a0dcd4ce5fb33a26b41c4d3/e116a4dd3_Untitleddesign.png" alt="SiCLUB" className="h-10 w-auto mix-blend-multiply" />
      </a>
      {step < 4 && (
        <div className="w-full max-w-lg mb-8">
          <div className="flex gap-1.5">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-500 ${i <= step ? 'bg-primary' : 'bg-border'}`} />
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-right">Krok {step + 1} z 4</p>
        </div>
      )}
      <div className="w-full max-w-lg">
        <AnimatePresence mode="wait">
          {current === 'goal' && (
            <motion.div key="goal" variants={variants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">Čo vás k nám privádza?</h1>
              <p className="text-muted-foreground mb-8 font-light">Vyberte možnosť, ktorá vás najlepšie vystihuje.</p>
              <div className="space-y-4">
                {[
                  { value: 'rehab', label: 'Mám chronické bolesti alebo pohybové ťažkosti', sub: 'Rehabilitácia, terapia, návrat k pohybu' },
                  { value: 'performance', label: 'Chcem profesionálnu kondičnú prípravu', sub: 'Výkon, sila, kondícia na najvyššej úrovni' },
                ].map((opt) => (
                  <button key={opt.value} onClick={() => { setAnswers({ ...answers, goal: opt.value }); setStep(1); }} className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 hover:border-primary/60 hover:bg-secondary/50 group ${answers.goal === opt.value ? 'border-primary bg-secondary/50' : 'border-border bg-white'}`}>
                    <p className="font-semibold text-foreground">{opt.label}</p>
                    <p className="text-sm text-muted-foreground mt-1 font-light">{opt.sub}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
          {current === 'commitment' && (
            <motion.div key="commitment" variants={variants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">Záujem o spoluprácu</h1>
              <p className="text-muted-foreground mb-8 font-light">Chcete dlhodobú individuálnu spoluprácu s odborníkom?</p>
              <div className="space-y-4">
                {[
                  { value: true, label: 'Áno, mám záujem o dlhodobú individuálnu spoluprácu', sub: 'Hľadám odborníka, s ktorým budem systematicky pracovať' },
                  { value: false, label: 'Zatiaľ len chcem skúsiť úvodnú konzultáciu', sub: 'Uvidím, ako to prebehne, a rozhodnem sa neskôr' },
                ].map((opt) => (
                  <button key={String(opt.value)} onClick={() => { setAnswers({ ...answers, commitment: opt.value }); setStep(2); }} className="w-full text-left p-5 rounded-2xl border-2 border-border bg-white transition-all duration-300 hover:border-primary/60 hover:bg-secondary/50">
                    <p className="font-semibold text-foreground">{opt.label}</p>
                    <p className="text-sm text-muted-foreground mt-1 font-light">{opt.sub}</p>
                  </button>
                ))}
              </div>
              <button onClick={() => setStep(0)} className="mt-6 flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" /> Späť
              </button>
            </motion.div>
          )}
          {current === 'price' && (
            <motion.div key="price" variants={variants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">Dôležitá informácia</h1>
              <div className="mt-6 p-7 rounded-2xl bg-secondary border border-border">
                <p className="text-foreground font-light leading-relaxed text-base lg:text-lg">
                  Chcete sa objednať na <strong className="font-semibold">bezplatnú konzultáciu</strong>? Následná úvodná <strong className="font-semibold">hĺbková diagnostika pohybového aparátu</strong> trvá <strong className="font-semibold">120 minút</strong> a je spoplatnená sumou <span className="text-primary font-bold text-xl">{PRICE}&nbsp;€</span> <span className="text-muted-foreground text-sm font-light">(nepovinné)</span>.
                </p>
                <p className="mt-4 text-muted-foreground font-light text-sm leading-relaxed">Každý klient odchádza s presnou diagnózou a jasným plánom. Žiadne odhady, žiadne stratené hodiny.</p>
              </div>
              <p className="mt-6 text-center text-sm text-muted-foreground font-light">Máte záujem o rezerváciu tohto exkluzívneho termínu?</p>
              <button onClick={() => setStep(3)} className="mt-4 w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5">
                ÁNO, CHCEM SA OBJEDNAŤ <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => setStep(1)} className="mt-4 w-full flex items-center justify-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" /> Späť
              </button>
            </motion.div>
          )}
          {current === 'contact' && (
            <motion.div key="contact" variants={variants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">Vaše kontaktné údaje</h1>
              <p className="text-muted-foreground mb-8 font-light">Ozveme sa vám čo najskôr pre potvrdenie termínu.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Meno a priezvisko</label>
                  <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Ján Novák" className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Telefónne číslo</label>
                  <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+421 9XX XXX XXX" className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">E-mail</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="jan@email.sk" className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
                </div>
                <button type="submit" disabled={submitting} className="mt-2 w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60">
                  {submitting ? 'Odosielam...' : 'Odoslať žiadosť o termín'} {!submitting && <ArrowRight className="w-4 h-4" />}
                </button>
              </form>
              <button onClick={() => setStep(2)} className="mt-4 w-full flex items-center justify-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" /> Späť
              </button>
            </motion.div>
          )}
          {current === 'success' && (
            <motion.div key="success" variants={variants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }} className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
              </div>
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">Ďakujeme, {form.name.split(' ')[0]}!</h1>
              <p className="text-muted-foreground font-light leading-relaxed max-w-sm mx-auto">Vaša žiadosť o termín bola úspešne odoslaná. Ozveme sa vám čo najskôr pre potvrdenie termínu.</p>
              <a href="/" className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-full border border-border text-foreground font-medium text-sm hover:border-primary/40 hover:text-primary transition-all duration-300">Späť na hlavnú stránku</a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}