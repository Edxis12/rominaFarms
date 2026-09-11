import { motion, type Variants } from "framer-motion";
import heroImage from "../assets/hero-gallo.webp";

const container: Variants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.16, delayChildren: 0.2 },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
};

export default function Hero() {
    return (
        <section id="inicio" className="relative min-h-[100dvh] flex items-end overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src={heroImage}
                    alt="Gallo fino de Romina Farm en el campo"
                    className="w-full h-full object-cover object-[65%_10%] sm:object-[center_10%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-oliva-950 via-oliva-950/70 to-oliva-950/30" />
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="relative z-10 max-w-6xl mx-auto px-5 pb-16 sm:pb-20 md:pb-24 pt-28 sm:pt-32 md:pt-40 w-full"
            >
                <motion.p variants={item} className="font-script italic text-dorado-300 text-lg sm:text-xl md:text-2xl mb-3">
                    Culiacán, Sinaloa
                </motion.p>

                <motion.h1 variants={item} className="font-display text-crema-100 text-4xl sm:text-6xl md:text-8xl leading-[0.95] tracking-tight">
                    ROMINA
                    <br />
                    FARM
                </motion.h1>

                <motion.p variants={item} className="text-crema-200 text-sm sm:text-base md:text-lg mt-5 sm:mt-6 max-w-md">
                    Criadero y gallera de Juan Carlos Murillo. Décadas cuidando líneas de gallos finos y organizando derbys que reúnen a criadores de todo Sinaloa.
                </motion.p>

                <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-7 sm:mt-9">
                    <a href="#derby" className="text-center rounded-full bg-dorado-500 text-oliva-950 font-semibold px-7 py-3 hover:bg-dorado-400 transition-colors">
                        Ver próximo derby
                    </a>
                    <a href="#redes" className="text-center rounded-full border border-crema-100/40 text-crema-100 font-semibold px-7 py-3 hover:border-crema-100 transition-colors">
                        Síguenos en redes
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}