import { motion } from "framer-motion";
import { Users, Trophy, Heart } from "lucide-react";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "./SocialIcons";

const SOCIALS = [
    { icon: FacebookIcon, label: "Facebook", handle: "@RominaFarmOficial", href: "https://www.facebook.com/profile.php?id=61577261909173&locale=es_LA" },
    { icon: InstagramIcon, label: "Instagram", handle: "@romina.farm", href: "https://www.instagram.com/rominafarms/?hl=es-la" },
    { icon: TikTokIcon, label: "TikTok", handle: "Romina Farm", href: "https://www.tiktok.com/@romina.farms" },
];

const HIGHLIGHTS = [
    {
        icon: Users,
        title: "Comunidad de galleros",
        desc: "Contenido pensado para quienes viven esta tradición: criadores, aficionados y curiosos por igual.",
    },
    {
        icon: Trophy,
        title: "Nuestras participaciones",
        desc: "Compartimos cómo nos va en cada derby, los resultados y el trabajo detrás de cada partida.",
    },
    {
        icon: Heart,
        title: "Colaboración y apoyo",
        desc: "Trabajamos junto a otras galleras: compartimos experiencia, aprendizajes y nos apoyamos mutuamente.",
    },
];

export default function SocialMedia() {
    return (
        <section id="redes" className="relative bg-oliva-950 py-16 sm:py-20 md:py-24">
            <div className="absolute top-0 left-0 right-0 -translate-y-[1px]">
                <svg viewBox="0 0 1440 60" className="w-full h-10 sm:h-14" preserveAspectRatio="none">
                    <path d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z" className="fill-oliva-950" />
                </svg>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-5 text-center">
                <p className="font-script italic text-dorado-300 text-lg sm:text-xl mb-3">No te pierdas nada</p>
                <h2 className="font-display text-crema-100 text-3xl sm:text-4xl md:text-5xl mb-4">
                    Síguenos en redes
                </h2>
                <p className="text-crema-200/80 text-sm sm:text-base max-w-2xl mx-auto mb-12 sm:mb-16 leading-relaxed">
                    En nuestras redes compartimos la vida diaria de la gallera y de la comunidad gallera en general:
                    nuestras experiencias, participaciones en derbys, el trabajo de cría, y las colaboraciones con
                    otras galleras de Sinaloa. Únete y sé parte de esta tradición.
                </p>

                {/* Highlights de qué van a encontrar */}
                <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-14 sm:mb-16">
                    {HIGHLIGHTS.map((h, i) => {
                        const Icon = h.icon;
                        return (
                            <motion.div
                                key={h.title}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="flex flex-col items-center text-center"
                            >
                                <Icon size={26} className="text-dorado-400 mb-3" />
                                <h3 className="text-crema-100 font-semibold text-sm sm:text-base mb-1.5">{h.title}</h3>
                                <p className="text-crema-200/70 text-xs sm:text-sm leading-relaxed max-w-[220px]">{h.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    {SOCIALS.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <motion.a key={s.label} href={s.href} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.08 }} className="flex flex-col items-center gap-3 rounded-2xl border border-crema-100/15 py-8 sm:py-10 px-6 hover:border-dorado-400/60 hover:bg-oliva-900/60 hover:scale-[1.02] transition-all">
                                <Icon size={32} className="text-dorado-400 sm:size-[38px]" />
                                <span className="text-crema-100 font-semibold text-sm sm:text-base">{s.label}</span>
                                <span className="text-crema-200/70 text-xs sm:text-sm">{s.handle}</span>
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}