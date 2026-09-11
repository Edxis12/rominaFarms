import { motion } from "framer-motion";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "./SocialIcons";

const SOCIALS = [
    { icon: FacebookIcon, label: "Facebook", handle: "@RominaFarmOficial", href: "https://www.facebook.com/profile.php?id=61577261909173&locale=es_LA" },
    { icon: InstagramIcon, label: "Instagram", handle: "@romina.farm", href: "https://www.instagram.com/rominafarms/?hl=es-la" },
    { icon: TikTokIcon, label: "TikTok", handle: "Romina Farm", href: "https://www.tiktok.com/@romina.farms" },
];

export default function SocialMedia() {
    return (
        <section id="redes" className="bg-oliva-950 py-16 sm:py-20 md:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-5 text-center">
                <p className="font-script italic text-dorado-300 text-lg sm:text-xl mb-3">No te pierdas nada</p>
                <h2 className="font-display text-crema-100 text-3xl sm:text-4xl md:text-5xl mb-4">
                    Síguenos en redes
                </h2>
                <p className="text-crema-200/80 text-sm sm:text-base max-w-md mx-auto mb-10 sm:mb-14">
                    Fechas de derbys, resultados y detrás de cámaras del criadero, todos
                    los días en nuestras redes.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    {SOCIALS.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <motion.a key={s.label} href={s.href} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.08 }} className="flex flex-col items-center gap-3 rounded-2xl border border-crema-100/15 py-8 sm:py-10 px-6 hover:border-dorado-400/60 hover:bg-oliva-900/60 transition-colors">
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