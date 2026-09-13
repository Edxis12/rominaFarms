import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Stat = { value: number; suffix: string; label: string };

const STATS: Stat[] = [
    { value: 18, suffix: " años", label: "de trayectoria en la crianza" },
    { value: 100, suffix: "+", label: "derbys organizados" },
    { value: 4, suffix: "", label: "líneas genéticas propias" },
    { value: 40, suffix: "+", label: "criadores aliados en Sinaloa" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!inView) return;
        const duration = 1200;
        const start = performance.now();
        let frame: number;
        const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))));
            if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [inView, value]);

    return (
        <span ref={ref}>
            {display}
            {suffix}
        </span>
    );
}

export default function Stats() {
    return (
        <section className="relative bg-oliva-900">
            {/* Curva de transición superior */}
            <div className="absolute top-0 left-0 right-0 -translate-y-[1px]">
                <svg viewBox="0 0 1440 60" className="w-full h-10 sm:h-14" preserveAspectRatio="none">
                    <path d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z" className="fill-oliva-900" />
                </svg>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-5 py-14 sm:py-16 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 sm:gap-8">
                {STATS.map((s, i) => (
                    <motion.div
                        key={s.label}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                        className="relative text-center"
                    >
                        {/* Línea divisoria vertical, solo en desktop y no en el primer elemento */}
                        {i !== 0 && (
                            <span className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 h-12 w-px bg-crema-100/15" />
                        )}
                        <div className="font-display text-dorado-400 text-3xl sm:text-4xl md:text-5xl leading-tight">
                            <Counter value={s.value} suffix={s.suffix} />
                        </div>
                        <p className="text-crema-200 text-xs sm:text-sm mt-2 leading-snug">{s.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}