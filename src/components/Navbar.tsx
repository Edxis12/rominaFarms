import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo-rominafarm.avif";

const LINKS = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#galeria", label: "Galería" },
  { href: "#derby", label: "Nuestros derbys" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Evita que la página haga scroll de fondo mientras el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled || open ? "bg-oliva-950/95 backdrop-blur-sm shadow-md" : "bg-transparent"
        }`}
    >
      <nav className="mx-auto max-w-6xl px-4 sm:px-5 flex items-center justify-between h-14 sm:h-16">
        <a href="#inicio" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Romina Farm" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full" />
          <span className="font-display text-crema-100 text-base sm:text-lg tracking-wide">ROMINA FARM</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-crema-200 text-sm font-medium hover:text-dorado-400 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#redes" className="hidden md:inline-block rounded-full bg-dorado-500 text-oliva-950 text-sm font-semibold px-5 py-2 hover:bg-dorado-400 transition-colors">
          Síguenos
        </a>

        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="md:hidden text-crema-100 p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden bg-oliva-950 px-4 overflow-hidden"
          >
            {LINKS.map((l) => (
              <li key={l.href} className="border-b border-crema-100/10 last:border-none">

                <a href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-crema-200 text-base font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-4">

              <a href="#redes"
                onClick={() => setOpen(false)}
                className="block text-center rounded-full bg-dorado-500 text-oliva-950 text-sm font-semibold px-5 py-3"
              >
                Síguenos
              </a>
            </li>
          </motion.ul>
        )
        }
      </AnimatePresence >
    </header >
  );
}