import { 
    html,
    css,
    reactjs,
    vue,
    tailwind,
    javascript,
    php,
    git,
    laravel,
    nodejs,
    python,
    bootstrap,
    mysql,
    postgresql,
    docker,
    postman,
    dart,
    abs,
    otw,
    ql,
    pos,
    imavi,
    rentcar,
    sislap,
    todoapp,
    poscafe,
    untag,
    smk,
    herbal,
    detrac
} from "../assets"

const navLinks = [
    {
        id: "about",
        title: "About",
        path: "#about"
    },
    {
        id: "skills",
        title: "Skills",
        path: "#skills"
    },
    {
        id: "experience",
        title: "Experience",
        path: "#experience"
    },
    {
        id: "education",
        title: "Education",
        path: "#education"
    },
    {
        id: "project",
        title: "Project",
        path: "#project"
    },
    {
        id: "contact",
        title: "Contact",
        path: "#contact"
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "PHP",
        icon: php,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "NodeJs",
        icon: nodejs,
    },
    {
        name: "Laravel",
        icon: laravel,
    },
    {
        name: "React",
        icon: reactjs,
    },
    {
        name: "Vue",
        icon: vue,
    },
    {
        name: "Dart",
        icon: dart,
    },
    {
        name: "Tailwind",
        icon: tailwind,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    },
    {
        name: "MySQL",
        icon: mysql,
    },
    {
        name: "PostgreSQL",
        icon: postgresql,
    },
    {
        name: "Postman",
        icon: postman,
    },
    {
        name: "Git",
        icon: git,
    },
    {
        name: "Docker",
        icon: docker,
    },
];


const experiences = [
    {
        title: "Fullstack Developer - Magang",
        company_name: "CV. OTW Computer Gusaha",
        icon: otw,
        iconBg: "#E6DEDD",
        date: "Jan 2025 - Apr 2025",
        points: [
            "Surabaya, Jawa Timur - Gabungan",
        ],
    },
    {
        title: "Backend Developer - Magang",
        company_name: "CV. Apparel Berkah Selalu",
        icon: abs,
        iconBg: "#E6DEDD",
        date: "Sept 2024 - Des 2024",
        points: [
            "Surabaya, Jawa Timur - Jarak Jauh",
        ],
    },
    {
        title: "Frontend Developer - Magang",
        company_name: "PT Qlcom Solusi Bisnis",
        icon: ql,
        iconBg: "#E6DEDD",
        date: "Jan 2020 - Apr 2020",
        points: [
            "Surabaya, Jawa Timur - Di lokasi",
        ],
    },
];

const projects = [
    {
        name: "Point of Sale (POS) Apparel",
        description:
        "Sistem yang digunakan dalam bisnis modern untuk membantu memproses data transaksi, mengelola stok barang, dan menganalisis data penjualan.",
        image: pos,
        source_code_link: "https://github.com/azizahnurwafiq/magang-abs",
    },
    {
        name: "Web IMAVI",
        description:
        "Aplikasi front end yang memungkinkan pengguna untuk melihat informasi Web IMAVI.",
        image: imavi,
        source_code_link: "https://github.com/ilhammarvelous/web-imavi",
    },
    {
        name: "Web App Client",
        description:
        "Aplikasi Full-Stack yang menghubungkan Front-end dengan Back-end menggunakan Resful API",
        image: sislap,
        source_code_link: "https://github.com/ilhammarvelous/sistem-penjualan-laptop",
    },
    {
        name: "Klasifikasi Jenis Tanaman Herbal",
        description:
        "Sebuah aplikasi web yang membantu pengguna dapat mengenali tanaman herbal melalui gambar dengan bantuan AI, serta menampilkan khasiat tanaman herbal melalui LLM",
        image: herbal,
        source_code_link: "#",
    },
    {
        name: "Deteksi Kendaraan (hitung & estimasi) Menggunakan YOLO",
        description:
        "Sebuah aplikasi deteksi kendaraan dengan menghitung jumlah kendaraan dan mengukur kecepatan kendaraan menggunakan teknologi YOLO",
        image: detrac,
        source_code_link: "#",
    },
    {
        name: "POS Cafe",
        description:
        "Sistem kasir untuk mencatat transaksi dan memperbarui stok otomatis, sehingga operasional coffee dan kedai lebih rapi.",
        image: poscafe,
        source_code_link: "#",
    },
    {
        name: "ToDo List Mobile App",
        description:
        "Proyek aplikasi mobile yang dibangun menggunakan flutter yang digunakan untuk mencatat daftar tugas atau pekerjaan harian",
        image: todoapp,
        source_code_link: "#",
    },
];

const education =[
    {
        institution: "Universitas 17 Agustus 1945 Surabaya",
        gelar: "S.Kom",
        jurusan: "Teknik Informatika",
        tahun: "2022 - 2026",
        nilai: "IPK 3.61/4.00",
        logo: untag
    },
    {
        institution: "SMK AL Islah Surabaya",
        gelar: "Multimedia",
        jurusan: "Multimedia",
        tahun: "2018 - 2021",
        nilai: "87/100",
        logo: smk
    }
];

export { navLinks, technologies, experiences, projects, education };