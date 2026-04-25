import { ilham } from "../assets"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion";
import { 
    faLinkedin, 
    faGithub, 
    faInstagram,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <section className="pt-36 container mx-auto px-6">
            <div className="container">
                <div className="flex flex-wrap">

                    {/* Bagian kiri */}
                    <div className="w-full self-center lg:w-1/2">
                        <h1 className="text-base font-semibold text-slate-400 md:text-xl">
                        Halo 👋, saya
                        <span className="block font-bold text-blue-400 text-3xl mt-2 lg:text-5xl leading-tight">
                            Muhammad Ilham Kurniawan
                        </span>
                        </h1>

                        <h2 className="font-medium text-slate-500 text-lg mb-9 lg:text-xl">
                            Saya seorang Fullstack Developer
                        </h2>

                        {/* BUTTON */}
                        <div className="flex flex-wrap md:gap-2 gap-4">
                            <a href="#contact">
                                <button className="text-base bg-blue-400 font-semibold text-white py-3 px-5 rounded-xl 
                                hover:shadow-lg hover:-translate-y-3 hover:scale-100 hover:opacity-90 
                                transition duration-300 ease-in-out">
                                Contact 🚀
                                </button>
                            </a>

                            <a href="https://drive.google.com/file/d/1Zhzwc13JDdQsq5Ol3S5tMsh_WuS0iLga/view?usp=sharing"target="_blank" rel="noopener noreferrer">
                                <button className="text-base border-2 border-blue-400 font-semibold text-blue-400 py-3 px-4 rounded-xl hover:shadow-xl hover:-translate-y-3 hover:scale-100 transition duration-300 ease-in-out">
                                Download CV
                                <FontAwesomeIcon icon={faArrowUp} className="ml-1" />
                                </button>
                            </a>
                        </div>

                        {/* SOCIAL MEDIA */}
                        <div className="flex items-center mt-5 gap-3">
                        {/* LinkedIn */}
                            <a 
                                href="https://www.linkedin.com/in/muhammad-ilham-kurniawan-70187b33a"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                                >
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl 
                                    bg-black-200 border border-black/10 
                                    shadow-md backdrop-blur-sm
                                    transition-all duration-300
                                    hover:scale-110 hover:border-blue-500 hover:shadow-[0_0_15px_blue-500]">
                                    
                                    <FontAwesomeIcon 
                                    icon={faLinkedin} 
                                    className="text-black text-xl group-hover:text-blue-500 transition"
                                    />
                                </div>
                            </a>

                            {/* Github */}
                            <a 
                                href="https://github.com/ilhammarvelous"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                                >
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl 
                                    bg-black-200 border border-black/10 
                                    shadow-md backdrop-blur-sm
                                    transition-all duration-300
                                    hover:scale-110 hover:border-blue-500 hover:shadow-[0_0_15px_blue-500]">
                                    
                                    <FontAwesomeIcon 
                                    icon={faGithub} 
                                    className="text-black text-xl group-hover:text-blue-500 transition"
                                    />
                                </div>
                            </a>

                            {/* Instagram */}
                            <a 
                                href="https://instagram.com/ilhamkurwn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                                >
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl 
                                    bg-black-200 border border-black/10 
                                    shadow-md backdrop-blur-sm
                                    transition-all duration-300
                                    hover:scale-110 hover:border-blue-500 hover:shadow-[0_0_15px_blue-500]">
                                    
                                    <FontAwesomeIcon 
                                    icon={faInstagram} 
                                    className="text-black text-xl group-hover:text-blue-500 transition"
                                    />
                                </div>
                            </a>

                            {/* Facebook*/}
                            <a 
                                href="https://web.facebook.com/Kurniawan ILham"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                                >
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl 
                                    bg-black-200 border border-black/10 
                                    shadow-md backdrop-blur-sm
                                    transition-all duration-300
                                    hover:scale-110 hover:border-blue-500 hover:shadow-[0_0_15px_blue-500]">
                                    
                                    <FontAwesomeIcon 
                                    icon={faFacebook} 
                                    className="text-black text-xl group-hover:text-blue-500 transition"
                                    />
                                </div>
                            </a>
                        
                        </div>

                    </div>

                    {/* Bagian kanan*/}
                    <div className="w-full self-end lg:w-1/2">
                        <div className="relative mt-10 lg:mt-0 flex justify-center lg:justify-end">
                            
                            {/* Animasi Naik Turun (Floating) menggunakan Motion.div */}
                            <motion.div 
                                animate={{
                                    y: [0, -30, 0], // Bergerak pada sumbu Y: dari 0 ke -30px lalu balik ke 0
                                }}
                                transition={{
                                    duration: 4,      // Durasi 4 detik
                                    repeat: Infinity, // Mengulang selamanya
                                    ease: "easeInOut" // Transisi halus
                                }}
                                /* Border tebal, Padding, dan Warna Border */
                                className="w-[360px] h-[360px] lg:w-[400px] lg:h-[400px] 
                                        bg-slate-200 rounded-2xl overflow-hidden shadow-2xl
                                        border-[3px] border-blue-400 p-2" 
                            >
                                <img
                                    src={ilham}
                                    alt="Ilham Kurniawan"
                                    /* h-full w-full supaya tetap mengisi container setelah di-padiing */
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </motion.div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
  )
}

export default Header