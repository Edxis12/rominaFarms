import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import heroImage from "../assets/cerrosHero.avif";
import logo from "../assets/logo-rominafarm.avif";

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

    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    // La imagen se mueve mas lento que el scroll (efecto parallax)
    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
    // El contenido se desvaneve un poco al hacer scroll
    const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    return (
        <section ref={sectionRef} id="inicio" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
            <motion.div className="absolute inset-0 will-change-transform" style={{ y: imageY }}>
                <img
                    src={heroImage}
                    alt="Cerros de Culiacán, Sinaloa"
                    fetchPriority="high"
                    className="w-full h-[130%] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-oliva-950/80 via-oliva-950/60 to-oliva-950/90" />
                {/* Textura de grano sutil */}
                <div
                    className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
                    style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    }}
                />
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                style={{ opacity: contentOpacity }}
                className="relative z-10 max-w-6xl mx-auto px-5 py-24 sm:py-28 w-full flex flex-col items-center text-center"
            >
                <motion.div
                    variants={item}
                    className="mb-6 sm:mb-8 rounded-full ring-4 ring-crema-100/20 shadow-2xl overflow-hidden"
                >
                    <img
                        src={logo}
                        alt="Romina Farm"
                        className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover"
                    />
                </motion.div>

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
                    <a href="#nosotros" className="text-center rounded-full bg-dorado-500 text-oliva-950 font-semibold px-7 py-3 hover:bg-dorado-400 hover:scale-105 transition-all">
                        Sobre nosotros
                    </a>
                    <a href="#redes" className="text-center rounded-full border border-crema-100/40 text-crema-100 font-semibold px-7 py-3 hover:border-crema-100 hover:scale-105 transition-all">
                        Síguenos en redes
                    </a>
                </motion.div>
            </motion.div>

            {/* Indicador de scroll */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2"
            >
                <span className="text-crema-200/70 text-xs tracking-widest uppercase">Descubre más</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown size={20} className="text-dorado-400" />
                </motion.div>
            </motion.div>
        </section>
    );
}
