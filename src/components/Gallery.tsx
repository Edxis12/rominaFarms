import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";

// Fotos generales de la finca
import galeria1 from "../assets/Galleria1.avif";
import galeria2 from "../assets/Galleria2.avif";
import galeria3 from "../assets/Galleria3.avif";
import galeria4 from "../assets/Galleria4.avif";
import galeria5 from "../assets/Galleria5.avif";
import galeria6 from "../assets/galeria6.avif";

// Fotos de crianza
import crianza9 from "../assets/crianza9.avif";
import crianza10 from "../assets/crianza10.avif";
import crianza11 from "../assets/crianza11.avif";
import crianza12 from "../assets/crianza12.avif";

// Videos de crianza
import crianza from "../assets/crianza.mp4";
import crianza2 from "../assets/crianza2.mp4";
import crianza3 from "../assets/crianza3.mp4";
import crianza4 from "../assets/crianza4.mp4";
import crianza5 from "../assets/crianza5.mp4";
import crianza6 from "../assets/crianza6.mp4";
import crianza7 from "../assets/crianza7.mp4";
import crianza8 from "../assets/crianza8.mp4";

// Videos de competencias
import competencia1 from "../assets/competencia1.mp4";
import competencia2 from "../assets/competencia2.mp4";

type MediaItem = { src: string; alt: string; span: string; type: "image" | "video" };

const CRIANZA_ITEMS: MediaItem[] = [
    { src: galeria5, alt: "Área de gradas del derby", span: "col-span-2 md:col-span-2", type: "image" },
    { src: galeria3, alt: "Rancho al atardecer", span: "", type: "image" },
    { src: crianza9, alt: "Trabajo en el criadero", span: "", type: "image" },
    { src: galeria4, alt: "Campo de entrenamiento", span: "", type: "image" },
    { src: crianza10, alt: "Vida en la finca", span: "", type: "image" },
    { src: crianza11, alt: "Trabajo diario en la finca", span: "", type: "image" },
    { src: crianza12, alt: "Nuestras líneas", span: "", type: "image" },
    { src: galeria6, alt: "Momentos de la gallera", span: "col-span-2 md:col-span-2", type: "image" },
    { src: crianza, alt: "Cuidado diario de los gallos", span: "", type: "video" },
    { src: crianza2, alt: "Alimentación y cuidado", span: "", type: "video" },
    { src: crianza3, alt: "Rutina de entrenamiento", span: "", type: "video" },
    { src: crianza4, alt: "Instalaciones del criadero", span: "", type: "video" },
    { src: crianza5, alt: "Líneas genéticas propias", span: "", type: "video" },
    { src: crianza6, alt: "Cuidado de los gallos", span: "", type: "video" },
    { src: crianza7, alt: "Rutina en el criadero", span: "", type: "video" },
    { src: crianza8, alt: "Vida en Romina Farm", span: "", type: "video" },
];

const COMPETENCIAS_ITEMS: MediaItem[] = [
    { src: competencia1, alt: "Partida en el palenque", span: "col-span-2 row-span-2 md:col-span-2 md:row-span-2", type: "video" },
    { src: competencia2, alt: "Momento de competencia", span: "col-span-2 md:col-span-2", type: "video" },
];

const NOSOTROS_ITEMS: MediaItem[] = [
    { src: galeria1, alt: "Ambiente de la gallera", span: "col-span-2 row-span-2 md:col-span-2 md:row-span-2", type: "image" },
    { src: galeria2, alt: "Gallo fino en el criadero", span: "", type: "image" },
]

const TABS = [
    { id: "nosotros", label: "Nosotros", items: NOSOTROS_ITEMS },
    { id: "crianza", label: "Nuestra crianza", items: CRIANZA_ITEMS },
    { id: "competencias", label: "Competencias", items: COMPETENCIAS_ITEMS },
] as const;

export default function Gallery() {
    const [activeTab, setActiveTab] = useState<(typeof TABS)[number]["id"]>("crianza");
    const [active, setActive] = useState<MediaItem | null>(null);

    const currentItems = TABS.find((t) => t.id === activeTab)?.items ?? [];

    return (
        <section id="galeria" className="bg-crema-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-5 py-16 sm:py-20 md:py-24">
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-script italic text-dorado-500 text-lg sm:text-xl mb-3"
                >
                    Momentos de la gallera
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 }}
                    className="font-display text-oliva-900 text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8"
                >
                    Galería
                </motion.h2>

                <div className="flex gap-2 mb-8 sm:mb-10 border-b border-oliva-900/10">
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold transition-colors ${activeTab === tab.id ? "text-oliva-900" : "text-oliva-800/50 hover:text-oliva-800"
                                }`}
                        >
                            {tab.label}
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="tab-underline"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-dorado-500"
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="grid grid-cols-2 md:grid-cols-4 auto-rows-[130px] sm:auto-rows-[160px] md:auto-rows-[180px] gap-3 sm:gap-4"
                    >
                        {currentItems.map((it, idx) => (
                            <button
                                key={`${activeTab}-${idx}`}
                                onClick={() => setActive(it)}
                                className={`group relative overflow-hidden rounded-xl ${it.span}`}
                            >
                                {it.type === "video" ? (
                                    <video
                                        src={it.src}
                                        preload="metadata"
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <img
                                        src={it.src}
                                        alt={it.alt}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                )}
                                {it.type === "video" && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-oliva-950/20">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-crema-100/90 flex items-center justify-center">
                                            <Play size={22} className="text-oliva-900 ml-0.5" fill="currentColor" />
                                        </div>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-oliva-950/0 group-hover:bg-oliva-950/20 transition-colors" />
                            </button>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-oliva-950/90 flex items-center justify-center p-4 sm:p-6"
                        onClick={() => setActive(null)}
                    >
                        {active.type === "video" ? (
                            <motion.video
                                initial={{ scale: 0.94, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.96, opacity: 0 }}
                                src={active.src}
                                controls
                                autoPlay
                                className="max-h-[80vh] max-w-full rounded-xl"
                                onClick={(e) => e.stopPropagation()}
                            />
                        ) : (
                            <motion.img
                                initial={{ scale: 0.94, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.96, opacity: 0 }}
                                src={active.src}
                                alt={active.alt}
                                className="max-h-[80vh] max-w-full rounded-xl object-contain"
                                onClick={(e) => e.stopPropagation()}
                            />
                        )}
                        <button
                            aria-label="Cerrar"
                            onClick={() => setActive(null)}
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-crema-100 p-2"
                        >
                            <X size={28} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}