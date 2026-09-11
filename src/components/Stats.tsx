import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Stat = { value: number; suffix: string; label: string };

const STATS: Stat[] = [
    { value: 18, suffix: " años", label: "de trayectoria en la crianza" },
    { value: 120, suffix: "+", label: "derbys organizados" },
    { value: 6, suffix: "", label: "líneas genéticas propias" },
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
        <section className="bg-oliva-900">
            <div className="max-w-6xl mx-auto px-5 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
                {STATS.map((s, i) => (
                    <motion.div
                        key={s.label}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                        className="text-center"
                    >
                        <div className="font-display text-dorado-400 text-4xl md:text-5xl">
                            <Counter value={s.value} suffix={s.suffix} />
                        </div>
                        <p className="text-crema-200 text-sm mt-2">{s.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}