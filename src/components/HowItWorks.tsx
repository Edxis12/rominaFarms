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
        <section id="derby" className="bg-oliva-950 py-24">
            <div className="max-w-6xl mx-auto px-5">
                <p className="font-script italic text-dorado-300 text-xl mb-3">Nuestros derbys</p>
                <h2 className="font-display text-crema-100 text-4xl md:text-5xl mb-14">Cómo funciona un derby aquí</h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {STEPS.map((s, i) => (
                        <motion.div key={s.number} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                            <span className="font-display text-dorado-400 text-3xl">{s.number}</span>
                            <h3 className="font-display text-crema-100 text-xl mt-3 mb-2">{s.title}</h3>
                            <p className="text-crema-200/80 text-sm leading-relaxed">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-16 text-center">
                    <p className="text-crema-200/90 mb-5">¿Quieres enterarte de la próxima fecha?</p>
                    <a href="https://wa.me/5216670000000" target="_blank" rel="noreferrer" className="inline-block rounded-full bg-dorado-500 text-oliva-950 font-semibold px-7 py-3 hover:bg-dorado-400 transition-colors">Escríbenos por WhatsApp</a>
                </motion.div>
            </div>
        </section>
    );
}