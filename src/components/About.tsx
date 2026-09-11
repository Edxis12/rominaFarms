import { motion } from "framer-motion";
import aboutImage from "../assets/rancho-about.avif";

export default function About() {
    return (
        <section id="nosotros" className="bg-crema-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-5 py-16 sm:py-20 md:py-24 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="font-script italic text-dorado-500 text-lg sm:text-xl mb-3">Nuestra historia</p>
                    <h2 className="font-display text-oliva-900 text-3xl sm:text-4xl md:text-5xl leading-tight mb-5 sm:mb-6">
                        Tres generaciones cuidando cada línea
                    </h2>
                    <p className="text-oliva-800 text-sm sm:text-base leading-relaxed mb-4">
                        Romina Farm nació del trabajo de Juan Carlos Murillo, quien empezó
                        criando gallos de patio en un rancho a las afueras de Culiacán. Con
                        los años, ese cariño por el campo se convirtió en un criadero
                        reconocido por la calidad y el temple de sus líneas.
                    </p>
                    <p className="text-oliva-800 text-sm sm:text-base leading-relaxed mb-4">
                        Hoy la gallera organiza derbys que reúnen a criadores de distintos
                        municipios de Sinaloa, siempre con el mismo cuidado en la
                        selección genética, la alimentación y el entrenamiento que
                        distinguió a la finca desde el primer día.
                    </p>
                    <p className="text-oliva-800 text-sm sm:text-base leading-relaxed">
                        Más que un negocio, es una tradición familiar que se transmite de
                        padres a hijos junto con el respeto por el campo y por el gallo
                        fino.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative order-1 md:order-2"
                >
                    <img
                        src={aboutImage}
                        alt="Rancho y campo de Sinaloa"
                        className="w-full aspect-[4/5] object-cover rounded-2xl"
                    />
                    <div className="absolute -bottom-4 left-4 right-4 sm:right-auto sm:-bottom-6 sm:-left-6 bg-oliva-900 text-crema-100 rounded-2xl px-5 sm:px-6 py-4 sm:py-5">
                        <p className="font-display text-dorado-400 text-lg sm:text-2xl">Juan Carlos Murillo</p>
                        <p className="text-crema-200 text-xs sm:text-sm">Fundador · Criador principal</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}