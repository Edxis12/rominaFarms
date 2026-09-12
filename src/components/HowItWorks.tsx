import { motion } from "framer-motion";

const STEPS = [
    {
        number: "01",
        title: "Inscripción",
        desc: "Los criadores confirman su lugar y registran a sus gallos antes de la fecha del evento.",
    },
    {
        number: "02",
        title: "Pesaje y cotejo",
        desc: "Se pesan los gallos y se emparejan las partidas según peso y categoría, de forma justa.",
    },
    {
        number: "03",
        title: "Partidas",
        desc: "Se llevan a cabo los careos en el palenque, con jueces y reglas claras para todos.",
    },
    {
        number: "04",
        title: "Premiación",
        desc: "Al final de la jornada se reconoce a los mejores partidos y se convive entre criadores.",
    },
];

export default function HowItWorks() {
    return (
        <section id="derby" className="relative bg-oliva-950 py-16 sm:py-20 md:py-24">
            <div className="absolute top-0 left-0 right-0 -translate-y-[1px]">
                <svg viewBox="0 0 1440 60" className="w-full h-10 sm:h-14" preserveAspectRatio="none">
                    <path d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z" className="fill-oliva-950" />
                </svg>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-5">
                <p className="font-script italic text-dorado-300 text-lg sm:text-xl mb-3">Nuestros derbys</p>
                <h2 className="font-display text-crema-100 text-3xl sm:text-4xl md:text-5xl mb-10 sm:mb-14">Cómo funciona un derby aquí</h2>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 sm:gap-8">
                    {STEPS.map((s, i) => (
                        <motion.div key={s.number} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                            <span className="font-display text-dorado-400 text-2xl sm:text-3xl">{s.number}</span>
                            <h3 className="font-display text-crema-100 text-lg sm:text-xl mt-2 sm:mt-3 mb-2">{s.title}</h3>
                            <p className="text-crema-200/80 text-xs sm:text-sm leading-relaxed">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-12 sm:mt-16 text-center">
                    <p className="text-crema-200/90 text-sm sm:text-base mb-5">¿Quieres enterarte de la próxima fecha?</p>
                    <a href="https://wa.me/14806527878" target="_blank" rel="noreferrer" className="inline-block w-full sm:w-auto text-center rounded-full bg-dorado-500 text-oliva-950 font-semibold px-7 py-3 hover:bg-dorado-400 transition-colors">Escríbenos por WhatsApp</a>
                </motion.div>
            </div>
        </section>
    );
}