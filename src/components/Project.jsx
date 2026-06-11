import { textVariant, fadeIn } from "../utils/motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { text } from "../style"
import { motion } from "framer-motion";
import { projects } from "../constants";
import { github } from "../assets";
import Tilt from "react-parallax-tilt";
import { useState } from "react";

const Modal = ({ isOpen, onClose, project }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
            {/* BOX */}
            <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-xl relative">
                
                {/* CLOSE BUTTON */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-4 text-xl font-bold text-slate-600"
                    >
                    ✕
                </button>

                {/* CONTENT */}
                <h2 className="text-2xl font-bold text-slate-700">
                    {project?.name}
                </h2>

                <img
                    src={project?.image}
                    alt={project?.name}
                    className="mt-4 rounded-lg"
                />

                <p className="mt-4 text-slate-600">
                    {project?.description}
                </p>

            </div>
        </div>
    );
};

const ProjectCard = ({ index, name, description,image, source_code_link, onClick }) => {
    return(
        <motion.div 
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        >
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="p-[1px] rounded-2xl sm:w-[360px] w-full"
            >
                <div 
                    onClick={onClick}
                    className="bg-slate-200 cursor-pointer rounded-2xl p-tilt border border-slate-300 shadow-lg hover:shadow-xl transition duration-300">
                    <div className="relative w-full h-[230px]"
                >
                        <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-2xl"
                        />

                        <div className="absolute inset-0 flex justify-end m-2 card-img_hover">
                            <div
                                onClick={(e) =>{
                                    e.stopPropagation();
                                    window.open(source_code_link, "_blank")}
                                } 
                                className="black-gradient w-9 h-9 rounded-full flex justify-between items-center cursor-pointer"
                            >

                            {/* <FontAwesomeIcon
                                icon={faGithub}
                                className="w-1/2 h-1/2 object-contain"                         
                            /> */}
                            <img 
                                src={github}
                                alt="github"
                                className="w-7 h-7 ml-1 object-contain"
                            />
                            </div>
                        </div>
                    </div>

                    {/* Nama dan deskripsi */}
                    <div className="mt-4">
                        <h3 className="text-slate-600 font-bold text-[23px]">{name}</h3>
                        {/* <p className="mt-1 text-slate-500 text-[14px]">{description}</p> */}
                    </div>
                </div>
            </Tilt>
        </motion.div>
    )
}

const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    return(
        <section id="project" className="mt-25 container mx-auto px-6">
              {/* Title */}
                <motion.div variants={textVariant()} className="text-center relative flex flex-col items-center justify-center">
                        {/* Teks Bayangan (Background) */}
                        <h2 className={`${text.sectionHeadText} absolute opacity-20 tracking-widest scale-80 select-none mb-4 md:mb-2`}>
                            Project
                        </h2>

                        {/* Teks Utama (Foreground) */}
                        <h2 className={`${text.sectionHeadText} relative z-10`}>
                            Project
                        </h2>

                        <p className={`${text.sectionSubText} mt-4`}>
                            Beberapa tampilan karya terbaru saya
                        </p>
                </motion.div>

                <div className="w-full flex">
                    <motion.p
                        variants={fadeIn("", "", 0.1, 1)}
                        className="text-slate-200 text-[17px] max-w-3xl leading-[30px]"
                    >
                    </motion.p>
                </div>

                <div className=" mt-14 flex flex-wrap justify-center gap-7">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={`project-${index}`}
                            index={index}
                            {...project}
                            onClick={() => {
                                setSelectedProject(project);
                                setIsModalOpen(true);
                            }}
                        />
                    ))}
                </div>

                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    project={selectedProject}
                />
        </section>
    )
}

export default Projects