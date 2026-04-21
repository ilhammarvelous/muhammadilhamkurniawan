import { textVariant } from "../utils/motion"
import { text } from "../style"
import { motion } from "framer-motion";
import { education } from "../constants";

const Education = () => {
    return(
        <section id="education" className="mt-27 container mx-auto pr-4">
                {/* Title */}
                <motion.div variants={textVariant()} className="text-center relative flex flex-col items-center justify-center">
                     {/* Teks Bayangan (Background) */}
                        <h2 className={`${text.sectionHeadText} absolute opacity-20 tracking-widest scale-80 select-none mb-4 md:mb-2`}>
                            Education
                        </h2>

                        {/* Teks Utama (Foreground) */}
                        <h2 className={`${text.sectionHeadText} relative z-10`}>
                            Education
                        </h2>

                        <p className={`${text.sectionSubText} mt-4`}>
                            Latar belakang pendidikan
                        </p>
                </motion.div>

                <div className="flex flex-wrap gap-6 mt-6 md:mt-0 md:ml-0 ml-4 p-2 md:p-10 justify-center">
                    {education.map((item, index) => (
                        <div 
                        key={index} 
                        className="w-full md:w-[500px] bg-slate-200 border-2 border-slate-300 p-6 rounded-3xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400"
                        >
                        {/* Header: Logo & Badge */}
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-16 h-16 bg-slate-300 rounded-xl flex items-center justify-center p-2">
                            <img src={item.logo} alt="Logo" className="w-full object-contain" />
                            </div>
                            <div className="flex ml-3 md:ml-0 gap-2">
                                <span className="px-3 py-1 bg-slate-300 text-slate-700 text-xs font-bold rounded-full border border-slate-400">
                                    {item.tahun}
                                </span>
                                <span className="px-3 py-1 bg-slate-300 text-slate-700 text-xs font-bold rounded-full border border-slate-400">
                                    {item.nilai}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-1">
                            <h3 className="text-xl font-bold text-slate-600 leading-tight">
                                {item.institution}
                            </h3>
                            {/* <p className="text-slate-600 font-medium text-sm">
                                {item.gelar}
                            </p> */}
                        </div>

                        {/* Bullet Point */}
                        <div className="mt-2 flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <p className="text-slate-700 text-sm font-medium">
                            {item.jurusan}
                            </p>
                        </div>
                        </div>
                    ))}
                </div>
        </section>
    )
}

export default Education