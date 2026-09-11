import { motion } from "framer-motion";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "./SocialIcons";

const SOCIALS = [
    { icon: FacebookIcon, label: "Facebook", handle: "@RominaFarmOficial", href: "https://www.facebook.com/profile.php?id=61577261909173&locale=es_LA" },
    { icon: InstagramIcon, label: "Instagram", handle: "@romina.farm", href: "https://www.instagram.com/rominafarms/?hl=es-la" },
    { icon: TikTokIcon, label: "TikTok", handle: "Romina Farm", href: "https://www.tiktok.com/@romina.farms" },
];

export default function SocialMedia() {
    return (
        <section id="redes" className="bg-oliva-950 py-24">
            <div className="max-w-6xl mx-auto px-5 text-center">
                <p className="font-script italic text-dorado-300 text-xl mb-3">No te pierdas nada</p>
                <h2 className="font-display text-crema-100 text-4xl md:text-5xl mb-4">
                    Síguenos en redes
                </h2>
                <p className="text-crema-200/80 max-w-md mx-auto mb-14">
                    Fechas de derbys, resultados y detrás de cámaras del criadero, todos
                    los días en nuestras redes.
                </p>

                <div className="grid sm:grid-cols-3 gap-6">
                    {SOCIALS.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <motion.a key={s.label} href={s.href} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.08 }} className="flex flex-col items-center gap-3 rounded-2xl border border-crema-100/15 py-10 px-6 hover:border-dorado-400/60 hover:bg-oliva-900/60 transition-colors">
                                <Icon size={38} className="text-dorado-400" />
                                <span className="text-crema-100 font-semibold">{s.label}</span>
                                <span className="text-crema-200/70 text-sm">{s.handle}</span>
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}