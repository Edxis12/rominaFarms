import { motion } from "framer-motion";
import { Feather, GraduationCap, Trophy, Users } from "lucide-react";

const SERVICES = [
    {
        icon: Feather,
        title: "Venta de gallos finos",
        desc: "Ejemplares de nuestras líneas genéticas, seleccionados por temple y condición física.",
    },
    {
        icon: GraduationCap,
        title: "Asesoría en cría",
        desc: "Acompañamiento a otros criadores en selección genética, alimentación y entrenamiento.",
    },
    {
        icon: Trophy,
        title: "Organización de derbys",
        desc: "Eventos con partidas justas, buen ambiente y todo lo necesario para una gran jornada.",
    },
    {
        icon: Users,
        title: "Comunidad de criadores",
        desc: "Espacio de intercambio y aprendizaje entre criadores de Culiacán y otros municipios.",
    },
];

export default function Services() {
    return (
        <section id="servicios" className="relative bg-crema-100 py-16 sm:py-20 md:py-24">
            <div className="absolute top-0 left-0 right-0 -translate-y-[1px] rotate-180">
                <svg viewBox="0 0 1440 60" className="w-full h-10 sm:h-14" preserveAspectRatio="none">
                    <path d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z" className="fill-crema-100" />
                </svg>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-5">
                <p className="font-script italic text-dorado-500 text-lg sm:text-xl mb-3">Lo que ofrecemos</p>
                <h2 className="font-display text-oliva-900 text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-12">Servicios</h2>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    {SERVICES.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <motion.div key={s.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.08 }} className="rounded-2xl border border-oliva-900/10 p-5 sm:p-7 bg-white/40">
                                <Icon size={24} className="text-dorado-500 mb-3 sm:mb-4 sm:size-7" />
                                <h3 className="font-display text-oliva-900 text-lg sm:text-xl mb-2">{s.title}</h3>
                                <p className="text-oliva-800 text-sm leading-relaxed">{s.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}