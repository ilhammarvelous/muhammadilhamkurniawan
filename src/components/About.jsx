import { motion } from "framer-motion";
import { ilham4, ilham3 } from "../assets";
import { text } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
            <section id="about" className="mt-27 container mx-auto px-6">
                {/* Title */}
                <div className="text-center relative flex flex-col items-center justify-center">
                    {/* Teks Bayangan (Background) */}
                    <h2 className={`${text.sectionHeadText} absolute opacity-20 tracking-widest scale-80 select-none mb-3 md:mb-2`}>
                        About
                    </h2>

                    {/* Teks Utama (Foreground) */}
                    <h2 className={`${text.sectionHeadText} relative z-10`}>
                        About
                    </h2>

                    <p className={`${text.sectionSubText} mt-4 max-w-sm`}>
                        Perkenalan singkat tentang diri saya
                    </p>
                </div>

                {/* Content */}
                <div className="mt-16 flex flex-col lg:flex-row items-center gap-10">
                    
                    <motion.div
                    variants={fadeIn("right", "spring", 0.2, 0.75)}
                    className="w-full lg:w-[45%] flex justify-center items-center min-h-[500px] relative"
                    >
                        {/* Bagian kiri */}
                        <div className="relative w-[300px] h-[400px] lg:w-[350px] lg:h-[450px]">
                            {/* --- GAMBAR KEDUA (DI BELAKANG - MIRING KANAN) --- */}
                            <motion.div
                            whileHover={{ 
                                rotate: 0, 
                                scale: 1.05,
                                zIndex: 20, // Naik ke depan saat di-hover
                                x: 20 // Sedikit geser agar dramatis
                            }}
                            whileTap={{ rotate: 0, scale: 1.1, zIndex: 20 }}
                            initial={{ rotate: 8 }} // Miring ke kanan awalnya
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            className="absolute inset-0 p-[2px] rounded-3xl shadow-card cursor-pointer z-0"
                            >
                            <div className="bg-tertiary rounded-3xl p-3 h-full">
                                <img
                                src={ilham4}
                                alt="profile-back"
                                className="w-full h-full object-cover rounded-2xl opacity-80 hover:opacity-100 transition-opacity"
                                />
                            </div>
                            </motion.div>

                            {/* --- GAMBAR PERTAMA (DI DEPAN - MIRING KIRI) --- */}
                            <motion.div
                                whileHover={{ 
                                    rotate: 0, 
                                    scale: 1.05,
                                    zIndex: 20 
                                }}
                                whileTap={{ rotate: 0, scale: 1.1, zIndex: 20 }}
                                initial={{ rotate: -8 }} // Miring ke kiri awalnya
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                className="absolute inset-0 p-[2px] rounded-3xl shadow-card cursor-pointer z-10"
                                >
                                <div className="bg-tertiary rounded-3xl p-3 h-ful">
                                    <img
                                    src={ilham3}
                                    alt="profile-front"
                                    className="w-full h-full object-cover rounded-2xl"
                                    />
                                </div>
                            </motion.div>

                        </div>
                    </motion.div>

                    {/* Bagian kanan */}
                    <div
                        variants={fadeIn("left", "spring", 0.3, 0.75)}
                        className="w-full lg:w-[60%]"
                        >
                        <h3 className="text-slate-600 text-[28px] mt-[-5px] font-bold">
                            Muhammad Ilham Kurniawan
                        </h3>

                        <p className="mt-4 text-slate-600 text-[16px] leading-[28px]">
                            Saya seorang Fullstack Developer yang berbasis di Surabaya, saat ini saya sedang menempuh pendidikan S1 di Universitas 17 Agustus 1945 Surabaya, jurusan Teknik Informatika. Saya senang membangun aplikasi yang skalabel dan logika sisi server yang tangguh.
                        </p>

                        {/* Info Box */}
                        <div className="mt-6 flex flex-col sm:flex-row gap-4">
                            
                            <div className="flex-1 bg-black-200 p-4 rounded-xl border border-black/20">
                            <p className="text-slate-500 font-medium text-sm">Email</p>
                            <p className="text-slate-700 text-sm mt-1">
                                ilhamkurwn@gmail.com
                            </p>
                            </div>

                            <div className="flex-1 bg-black-200 p-4 rounded-xl border border-black/20">
                            <p className="text-slate-500 text-sm">Lokasi</p>
                            <p className="text-slate-700 text-sm mt-1">
                                Surabaya, Indonesia
                            </p>
                            </div>

                        </div>

                        {/* Buttons */}
                        <div className="mt-6 flex gap-2">
                            <a href="#project">
                                <button className="group text-base border-2 border-blue-400 bg-blue-400 font-semibold text-white py-3 px-4 rounded-xl 
                                hover:shadow-lg hover:-translate-y-2 transition duration-300 ease-in-out flex items-center gap-3">
                                    Project 
                                    {/* Ikon Panah FontAwesome */}
                                    <FontAwesomeIcon 
                                        icon={faArrowRight}
                                    />
                                </button>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </section>
    )
}

export default About