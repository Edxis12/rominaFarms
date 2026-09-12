import { MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "./SocialIcons";

export default function Footer() {
    return (
        <footer id="contacto" className="bg-oliva-900 pt-12 sm:pt-16 pb-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-5 grid md:grid-cols-2 gap-10 mb-10 sm:mb-12">
                <div>
                    <p className="font-display text-crema-100 text-xl sm:text-2xl mb-4">ROMINA FARM</p>
                    <div className="flex items-center gap-3 text-crema-200 text-sm sm:text-base mb-3">
                        <MapPin size={18} className="text-dorado-400 flex-shrink-0" />
                        <span>Santa Loreto, Culiacán, Sinaloa</span>
                    </div>
                    <div className="flex items-center gap-3 text-crema-200 text-sm sm:text-base mb-6">
                        <Phone size={18} className="text-dorado-400 flex-shrink-0" />
                        <span>+1 (480) 652-7878</span>
                    </div>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/profile.php?id=61577261909173&locale=es_LA" target="_blank" rel="noreferrer" className="text-crema-200 hover:text-dorado-400 p-1"><FacebookIcon size={22} /></a>
                        <a href="https://www.instagram.com/rominafarms/?hl=es-la" target="_blank" rel="noreferrer" className="text-crema-200 hover:text-dorado-400 p-1"><InstagramIcon size={22} /></a>
                        <a href="https://www.tiktok.com/@romina.farms" target="_blank" rel="noreferrer" className="text-crema-200 hover:text-dorado-400 p-1"><TikTokIcon size={22} /></a>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-5 border-t border-crema-100/10 pt-6 text-center">
                <p className="text-crema-200/60 text-xs">
                    © {new Date().getFullYear()} Romina Farm · Juan Carlos Murillo. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}