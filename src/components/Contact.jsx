import React, { useState} from "react";
import { textVariant } from "../utils/motion"
import { text } from "../style"
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.message) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Maaf, semua data wajib diisi!",
                background: "#fff",
                color: "#475569",
                confirmButtonColor: "#60A5FA",
                timer: 2000
            });
            return;
        }

        try {
        setLoading(true);

        await emailjs.send(
            'service_07is9rg',
            'template_mkxyfwb',
            {
            from_name: form.name,
            to_name: 'Ilham',
            from_email: form.email,
            to_email: 'ilhamkurwn@gmail.com',
            message: form.message,
            },
            'D1QFqnlJtxh1GheJF'
        );

        // ✅ sukses
        Swal.fire({
            icon: "success",
            title: "Berhasil 🎉",
            text: "Pesan berhasil terkirim, Terimakasih!",
            background: "#fff",
            color: "#475569",
            confirmButtonColor: "#60A5FA",
            timer: 2000
        });

        setForm({
            name: "",
            email: "",
            message: "",
        });

        } catch (error) {
        console.error(error); 

            Swal.fire({
                icon: "error",
                title: "Gagal ❌",
                text: "Terjadi kesalahan saat mengirim pesan.",
                background: "#fff",
                color: "#475569",
                confirmButtonColor: "#60A5FA",
                timer: 2000
            });
        } finally {
        setLoading(false);
        }
    };

    return(
        <section id="contact" className="mt-27 container mx-auto">
            <div className="container mx-auto">
                <motion.div variants={textVariant()} className="text-center relative flex flex-col items-center justify-center">
                        {/* Teks Bayangan (Background) */}
                        <h2 className={`${text.sectionHeadText} absolute opacity-20 tracking-widest scale-80 select-none mb-11 md:mb-2`}>
                            Contact
                        </h2>

                        {/* Teks Utama (Foreground) */}
                        <h2 className={`${text.sectionHeadText} relative z-10`}>
                            Contact
                        </h2>

                        <p className={`${text.sectionSubText} mt-4`}>
                            Anda dapat menghubungi saya dengan 
                            mengisi form dibawah ini
                        </p>
                </motion.div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="w-full mt-10 lg:w-2/3 lg:mx-auto">
                    {/* Input Nama */}
                    <div className="w-full px-6 md:px-0 mb-8">
                    <label htmlFor="name" className="text-base font-bold text-blue-400">
                        Nama
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full bg-transparent text-dark p-3 rounded-md border-2 border-slate-300 outline-none focus:border-blue-400 transition duration-300"
                        placeholder="Masukkan nama..."
                    />
                    </div>

                    {/* Input Email */}
                    <div className="w-full px-6 md:px-0 mb-8">
                    <label htmlFor="email" className="text-base font-bold text-blue-400">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full bg-transparent text-dark p-3 rounded-md border-2 border-slate-300 outline-none focus:border-blue-400 transition duration-300"
                        placeholder="Masukkan email..."
                    />
                    </div>

                    {/* Input Pesan */}
                    <div className="w-full px-6 md:px-0 mb-8">
                    <label htmlFor="message" className="text-base font-bold text-blue-400">
                        Pesan
                    </label>
                    <textarea
                        id="message"
                        value={form.message}
                        onChange={handleChange}
                        className="w-full bg-transparent text-dark p-3 rounded-md border-2 border-slate-300 outline-none focus:border-blue-400 h-32 transition duration-300"
                        placeholder="Tuliskan pesan Anda di sini..."
                    ></textarea>
                    </div>

                    {/* Tombol Kirim */}
                    <div className="w-full px-6 md:px-0">
                        <button
                            type="submit"
                            disabled={loading}
                            className="text-base mt-[-15px] font-semibold text-white bg-blue-400 py-3 px-8 rounded-lg w-full hover:opacity-80 hover:shadow-lg transition duration-500"
                        >
                        {loading ? "Mengirim..." : "Kirim"}
                        </button>
                    </div>
                </div>
            </form>
        </section>

        
    )
}

export default Contact