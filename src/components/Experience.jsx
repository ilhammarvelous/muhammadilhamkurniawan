import { VerticalTimelineElement, VerticalTimeline } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { textVariant } from "../utils/motion"
import { text } from "../style"
import { motion } from "framer-motion";
import { experiences } from "../constants";

const ExperienceCard = ({ experience }) => (
    <VerticalTimelineElement
        contentStyle={{ background: '#f1f5f9', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid #f1f5f9' }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg, }}
        icon={
        <div className="flex justify-center items-center w-full h-full">
            <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[80%] h-[80%] object-contain"
            />
        </div>
        }
    >
        <div>
            <h3 className="text-slate-600 text-[24px] font-bold">{experience.company_name}</h3>
            <p className="text-slate-600 text-[16px] font-semibold" style={{ margin: 0 }}>  
                {experience.title}</p>
        </div>

        <ul className="mt-1">
            {experience.points.map((point, index) => (
                <li
                    key={`experience-point-${index}`}
                    className="text-slate-500 text-[14px] tracking-wider"
                    >
                    {point}
                </li>
            ))}
        </ul>
    </VerticalTimelineElement>
)

const Experience = () => {
    return(
        <section id="experience" className="mt-27 container mx-auto pr-4">
                {/* Title */}
                <motion.div variants={textVariant()} className="text-center relative flex flex-col items-center justify-center">
                        {/* Teks Bayangan (Background) */}
                        <h2 className={`${text.sectionHeadText} absolute opacity-20 tracking-widest scale-80 select-none mb-10 md:mb-2`}>
                            Experience
                        </h2>

                        {/* Teks Utama (Foreground) */}
                        <h2 className={`${text.sectionHeadText} relative z-10`}>
                            Experience
                        </h2>

                        <p className={`${text.sectionSubText} mt-4`}>
                            Dimana saya telah berkontribusi dan berkembang
                        </p>
                    </motion.div>

                <div className="mt-20 flex flex-col">
                    <VerticalTimeline lineColor="#60A5FA">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                    </VerticalTimeline>
                </div>
        </section>
    )
}

export default Experience