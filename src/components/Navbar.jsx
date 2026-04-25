import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react"
import { navLinks } from "../constants"

const Navbar = () => {
        const [isOpen, setIsOpen] = useState(false);
        const [isScrolled, setIsScrolled] = useState(false);
        const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            // Logika Navbar Blur
            setIsScrolled(window.scrollY > 10);

            // Logika Active Link saat Scroll
            const sections = document.querySelectorAll("section"); // Pastikan setiap konten dibungkus tag <section id="...">

            let current = "";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 150) { // -150 adalah offset agar deteksi lebih awal
                    current = section.getAttribute("id");
                }
            });
            
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`w-full flex items-center transition-all duration-300
            ${
                isScrolled
                ? "fixed z-[9999] bg-white/50 backdrop-blur-md top-0 left-0 shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.2)]"
                : "absolute bg-transparent top-0 left-0"
            }`}
        >
            <div className="container mx-auto md:px-10">
                <div className="flex items-center justify-between relative">

                    {/* Logo */}
                    <div>
                        <a href="#" className="font-bold text-xl text-blue-400 block py-6 mx-6">
                            Ilham 
                        </a>
                    </div>

                    {/* Bagian kanan */}
                    <div className="flex items-center">
                        {/* dark:bg-white */}

                        {/* Hamburger menu */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="block absolute right-6 lg:hidden"
                        >
                            <span
                                className={`w-[30px] h-[2px] my-2 block bg-slate-600 transition duration-300 origin-top-left 
                                ${isOpen ? "rotate-45 translate-y-[8px]" : ""}`}
                            ></span>

                            <span
                                className={`w-[30px] h-[2px] my-2 block bg-slate-600 transition duration-300 
                                ${isOpen ? "scale-0" : ""}`}
                            ></span>

                            <span
                                className={`w-[30px] h-[2px] my-2 block bg-slate-600 transition duration-300 origin-bottom-left 
                                ${isOpen ? "-rotate-45 translate-y-[8px]" : ""}`}
                            ></span>
                        </button>

                        {/* Menu */}
                        <div
                            className={`${isOpen ? "block" : "hidden"} absolute py-5 md:px-2 px-2 bg-slate-100 shadow-2xl rounded-lg max-w-[250px] w-full right-6 top-full 
                            lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}
                            >

                            <ul className="block lg:flex lg:items-center">
                                {navLinks.map((nav) => (
                                        <li key={nav.id}>
                                            <a
                                                href={`#${nav.id}`}
                                                className={`text-base font-medium py-2 px-3 mx-2 md:mx-1 flex rounded-full transition-all duration-300
                                                    /* Efek Hover: Background biru muda transparan */
                                                    hover:bg-blue-100 hover:text-blue-400
                                                    /* Efek Active: Jika ID section sama dengan state activeSection */
                                                    ${activeSection === nav.id 
                                                        ? "bg-blue-100 text-blue-400" 
                                                        : "text-slate-700"
                                                    }`}
                                            >
                                                {nav.title}
                                            </a>
                                        </li>
                                    ))}

                                {/* Dark Mode Toggle (UI saja dulu) */}
                                {/* <li className="mt-3 md:ml-2 ml-4 lg:mt-0 flex items-center">
                                    <div className="flex items-center gap-1">
                                        <span className="text-sm text-slate-500">
                                            <FontAwesomeIcon icon={faSun} className="text-yellow-400 text-xl" />
                                        </span>
                                        <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                                        <div className="h-4 w-4 rounded-full bg-white transition duration-300"></div>
                                        </div>

                                        <span className="text-sm text-slate-500">
                                            <FontAwesomeIcon icon={faMoon} className="text-black text-xl" />
                                        </span>
                                    </div>
                                </li> */}
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar