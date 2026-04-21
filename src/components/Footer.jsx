import React from 'react';

const Footer = () => {
    const kategoriTulisan = ['Frontend Development', 'Backend Development', 'Database Managament', 'Deployment'];
    
    const tautan = [
        { name: 'Home', hash: '#home' },
        { name: 'About', hash: '#about' },
        { name: 'Skill', hash: '#skill' },
        { name: 'Experience', hash: '#experience' },
        { name: 'Education', hash: '#education' },
        { name: 'Project', hash: '#project' },
        { name: 'Contact', hash: '#contact' },
    ];

    return (
        <footer className="bg-blue-400 mt-10 pt-18 pb-5">
            <div className="container mx-auto px-3 md:px-10">
                <div className="flex flex-wrap justify-between">
                    {/* Bagian Profil & Kontak */}
                    <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
                        <h2 className="font-bold text-4xl text-white mb-3">Muhammad Ilham Kurniawan</h2>
                        {/* <h3 className="font-bold text-2xl mb-2 text-white">Hubungi Saya</h3> */}
                        <p className="text-slate-100">ilhamkurwn@gmail.com</p>
                        <p className="text-slate-100">Surabaya, Jawa Timur, Indonesia</p>
                    </div>

                    {/* Bagian Kategori */}
                    <div className="w-full px-4 mb-12 md:w-1/3">
                        <h3 className="font-medium text-xl mb-5 text-white">Services</h3>
                        <ul className="text-slate-200">
                            {kategoriTulisan.map((item) => (
                                <li key={item}>
                                <a href="#" className="inline-block text-base mb-3 transition duration-300">
                                    {item}
                                </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Bagian Tautan */}
                    <div className="w-full px-4 mb-5 md:w-1/5">
                        <h3 className="font-medium text-xl mb-5 text-white">Tautan</h3>
                        <ul className="text-slate-200">
                            {tautan.map((link) => (
                                <li key={link.name}>
                                <a href={link.hash} className="inline-block mb-3 transition duration-300">
                                    {link.name}
                                </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Garis Pembatas & Informasi Hak Cipta */}
                <div className="w-full pt-5 border-t border-white">
                    <div className="flex flex-wrap items-center justify-between">
                    
                    {/* Sisi Kiri: Copyright Otomatis */}
                    <div className="w-full md:w-1/2 mb-4 md:mb-0 text-center md:text-left">
                        <p className="font-medium text-sm text-white">
                            © {new Date().getFullYear()}❤️Muhammad Ilham Kurniawan. All Rights Reserved.
                        </p>
                    </div>

                    {/* Sisi Kanan: Privacy & Terms */}
                    <div className="w-full md:w-1/2 text-center md:text-right">
                        <ul className="flex justify-center md:justify-end gap-6 text-sm font-medium text-white">
                            <li>
                            <a href="#" className="hover:text-blue-500 transition duration-300">
                                Privacy Policy
                            </a>
                            </li>
                            <li>
                            <a href="#" className="hover:text-blue-500 transition duration-300">
                                Terms of Service
                            </a>
                            </li>
                        </ul>
                    </div>

                </div>

                    {/* Kredit Pembuatan (Opsional, ditaruh di paling bawah) */}
                    {/* <p className="font-medium text-[10px] text-slate-600 text-center mt-5">
                        Dibuat dengan <span className="text-pink-500">❤️</span> oleh{' '}
                        <a href="https://instagram.com/ilhamkurwn" target="_blank" rel="noreferrer" className="font-bold text-blue-500 hover:opacity-80">
                        Ilham
                        </a>
                        , menggunakan <a href="https://tailwindcss.com" target="_blank" rel="noreferrer" className="font-bold text-sky-400">Tailwind CSS.</a>
                    </p> */}
                </div>
            </div>

            {/* CSS internal sederhana agar Tailwind tidak terlalu panjang untuk icon */}
            <style jsx>{`
                .social-icon-wrapper {
                @apply w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 transition duration-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white;
                }
            `}</style>
        </footer>
    );
};

export default Footer;