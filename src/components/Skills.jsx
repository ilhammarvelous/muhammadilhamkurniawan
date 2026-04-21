import { textVariant } from "../utils/motion"
import { text } from "../style"
import { motion } from "framer-motion";
import { technologies } from "../constants";


const Skills = () => {
    return(
        <section id="skills" className="w-full px-4 mt-27 container mx-auto pr-4">
                {/* Title */}
                <motion.div variants={textVariant()} className="text-center relative flex flex-col items-center justify-center">
                    {/* Teks Bayangan (Background) */}
                    <h2 className={`${text.sectionHeadText} absolute opacity-20 tracking-widest md:scale-80 scale-75 select-none mb-10 md:mb-1`}>
                        Skills
                    </h2>

                    {/* Teks Utama (Foreground) */}
                    <h2 className={`${text.sectionHeadText} relative z-10`}>
                        Skills
                    </h2>

                    <p className={`${text.sectionSubText} mt-4`}>
                        Bekerja dengan teknologi dan keahlian yang saya miliki
                    </p>
                </motion.div>

            <div className="flex flex-wrap items-center justify-center mt-10">
                {technologies.map((tech, index) => (
                    <a
                        key={index}
                        href="#"
                        className="max-w-[85px] mx-4 py-4 hover:scale-120 transition duration-300   lg:mx-6 xl:mx-8"
                    >
                        <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-full object-contain"
                        />
                        <p className="text-center text-slate-500 mt-1">{tech.name}</p>
                    </a>
                ))}

            </div>
        </section>
    )
}

export default Skills