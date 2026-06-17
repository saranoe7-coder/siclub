import { motion } from 'framer-motion';

const div1 = { name: 'Matej Hospodár', role: 'Strength and conditioning coach', image: 'https://media.base44.com/images/public/6a0dcd4ce5fb33a26b41c4d3/4c4b621c6_SIClub-203.webp', tags: ['Strength', 'Coach'], objectPosition: 'center 15%' };
const div2 = { name: 'Ľuboš Kolesár', role: 'Strength and conditioning coach', image: 'https://media.base44.com/images/public/6a0dcd4ce5fb33a26b41c4d3/2c668dc57_SIClub-124.webp', tags: ['Performance', 'Coach'], objectPosition: 'center 15%' };
const div3 = { name: 'Ondrej Tadeáš Matej', role: 'Strength and conditioning coach', image: 'https://media.base44.com/images/public/6a0dcd4ce5fb33a26b41c4d3/4434a156f_SIClub-65.jpg', tags: ['Rehabilitácia', 'Coach'], objectPosition: 'center 12%' };
const div4 = { name: 'Daniela Kollárová', role: 'Strength and conditioning coach', image: 'https://media.base44.com/images/public/6a0dcd4ce5fb33a26b41c4d3/c6fd450f0_SIClub-196.webp', tags: ['Strength', 'Mobility'], objectPosition: 'center 15%' };
const div5 = { name: 'Boris Žbirka', role: 'CEO, strength and conditioning coach, ART therapist ', image: 'https://media.base44.com/images/public/6a0dcd4ce5fb33a26b41c4d3/b62cdbc66_SIClub-71.webp', tags: ['Výkon', 'Kondícia'], objectPosition: 'center 10%' };
const div6 = { name: 'Juraj Túri', role: 'Strength and conditioning coach', image: 'https://media.base44.com/images/public/6a0dcd4ce5fb33a26b41c4d3/75c08fcef_SIClub-115.webp', tags: ['Strength', 'Coach'], objectPosition: 'center 15%' };
const div7 = { name: 'Adam Halas', role: 'Strength and conditioning coach', image: 'https://media.base44.com/images/public/6a0dcd4ce5fb33a26b41c4d3/a41d410a6_SIClub-66.webp', tags: ['Performance', 'Coach'], objectPosition: 'center 12%' };
const div8 = { name: 'Martin Jurík', role: 'Office Manager', image: 'https://media.base44.com/images/public/6a0dcd4ce5fb33a26b41c4d3/d8cb3d23f_SIClub-105.jpg', tags: ['Rehabilitácia', 'Pohyb'], objectPosition: 'center 10%' };
const div9 = { name: 'Dávid Kormúth', role: 'Strength and conditioning coach, ART therapist', image: 'https://media.base44.com/images/public/6a0dcd4ce5fb33a26b41c4d3/711dd701d_SIClub-111.webp', tags: ['Strength', 'Coach'], objectPosition: 'center 10%' };
const div10 = { name: 'Marco Kormúth', role: 'Strength and conditioning coach', image: 'https://media.base44.com/images/public/6a0dcd4ce5fb33a26b41c4d3/ed64886c3_SIClub-109.webp', tags: ['Performance', 'Coach'], objectPosition: 'center 15%' };
const div11 = { name: 'Michal Perašín', role: 'Strength and conditioning coach', image: 'https://media.base44.com/images/public/6a0dcd4ce5fb33a26b41c4d3/71b364ccb_SIClub-128.webp', tags: ['Strength', 'Coach'], objectPosition: 'center 15%' };
const div12 = { name: 'Lukáš Mészáros', role: 'Strength and conditioning coach', image: 'https://media.base44.com/images/public/6a0dcd4ce5fb33a26b41c4d3/0b3eae473_SIClub-121_1_.webp', tags: ['Strength', 'Coach'], objectPosition: 'center 15%' };
const div13 = { name: 'Gabriel Buzgo', role: 'Strength and conditioning coach', image: 'https://media.base44.com/images/public/6a0dcd4ce5fb33a26b41c4d3/25ea90d6e_generated_image.png', tags: ['Strength', 'Coach'], objectPosition: 'center 15%' };
const div14 = { name: 'Patrik Krajčík', role: 'Strength and conditioning coach', image: 'https://media.base44.com/images/public/6a0dcd4ce5fb33a26b41c4d3/25ea90d6e_generated_image.png', tags: ['Strength', 'Coach'], objectPosition: 'center 15%' };

function MemberCard({ member, index }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: index * 0.08 }} className="group text-center">
      <div className="relative mb-5 rounded-2xl overflow-hidden aspect-square bg-secondary">
        <img src={member.image} alt={`${member.name} - ${member.role}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" style={{ objectPosition: member.objectPosition }} loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <h3 className="text-sm font-semibold text-foreground">{member.name}</h3>
      <p className="text-xs font-light text-muted-foreground mt-1 mb-3">{member.role}</p>
      <div className="flex flex-wrap justify-center gap-1.5">
        {member.tags.map((tag) => (<span key={tag} className="px-2.5 py-1 rounded-full bg-secondary text-[10px] font-medium text-primary tracking-wide">{tag}</span>))}
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section id="tim" className="py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">NÁŠ TÍM</h2>
        </motion.div>
        <div className="grid grid-cols-2 gap-6 lg:gap-8 max-w-sm mx-auto sm:max-w-md lg:max-w-lg mb-12">
          {[div5, div8].map((member, i) => (<MemberCard key={i} member={member} index={i} />))}
        </div>
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {[div1, div2, div3, div4, div6, div7, div9, div10, div11, div12, div13, div14].map((member, i) => (
            <div key={i} className="w-[calc(50%-12px)] sm:w-[calc(33.333%-16px)] lg:w-[calc(20%-20px)]"><MemberCard member={member} index={i + 2} /></div>
          ))}
        </div>
      </div>
    </section>
  );
}