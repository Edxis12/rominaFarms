import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import galeria1 from "../assets/Galleria1.avif";
import galeria2 from "../assets/Galleria2.avif";
import galeria3 from "../assets/Galleria3.avif";
import galeria4 from "../assets/Galleria4.avif";
import galeria5 from "../assets/Galleria5.avif";

type MediaItem = { src: string; alt: string; span: string };

const ITEMS: MediaItem[] = [
    {
        src: galeria1,
        alt: "Ambiente de palenque",
        span: "md:col-span-2 md:row-span-2",
    },
    {
        src: galeria2,
        alt: "Gallo fino en el criadero",
        span: "",
    },
    {
        src: galeria3,
        alt: "Rancho al atardecer",
        span: "",
    },
    {
        src: galeria4,
        alt: "Campo de entrenamiento",
        span: "",
    },
    {
        src: galeria5,
        alt: "Área de gradas del derby",
        span: "md:col-span-2",
    },
];

export default function Gallery() {
    const [active, setActive] = useState<MediaItem | null>(null);

    return (
        <section id="galeria" className="bg-crema-100">
            <div className="max-w-6xl mx-auto px-5 py-24">
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-script italic text-dorado-500 text-xl mb-3"
                >
                    Momentos de la finca
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 }}
                    className="font-display text-oliva-900 text-4xl md:text-5xl mb-10"
                >
                    Galería
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[180px] gap-4">
                    {ITEMS.map((it) => (
                        <button
                            key={it.src}
                            onClick={() => setActive(it)}
                            className={`group relative overflow-hidden rounded-xl ${it.span}`}
                        >
                            <img
                                src={it.src}
                                alt={it.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-oliva-950/0 group-hover:bg-oliva-950/20 transition-colors" />
                        </button>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-oliva-950/90 flex items-center justify-center p-6"
                        onClick={() => setActive(null)}
                    >
                        <motion.img
                            initial={{ scale: 0.94, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.96, opacity: 0 }}
                            src={active.src}
                            alt={active.alt}
                            className="max-h-[85vh] max-w-full rounded-xl object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button
                            aria-label="Cerrar"
                            onClick={() => setActive(null)}
                            className="absolute top-6 right-6 text-crema-100"
                        >
                            <X size={30} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}