import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import imgQuoteApp from './assets/quote-app.png.png';
import imgMiniApi from './assets/mini-api.png.png';
// Import gambar proyek ketiga (Pastikan file toko-online.png ada di folder src/assets)
import imgTokoOnline from './assets/toko-online.png';

// Komponen Pembantu untuk Scroll ke Atas otomatis saat pindah halaman
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// ==========================================
// 1. KOMPONEN HALAMAN UTAMA (HOME & PORTFOLIO)
// ==========================================
function HomePage() {
  return (
    <div className="pt-24 pb-12 selection:bg-gray-900 selection:text-white">
      {/* HERO SECTION */}
      <main className="px-8 md:px-16 lg:px-24 min-h-[75vh] flex flex-col justify-center">
        <div className="max-w-4xl relative z-10">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-sm font-medium text-gray-600">
            👋 Halo, selamat datang!
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-[5rem] font-extrabold leading-[1.05] tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-500 pb-2">
            Membangun Pengalaman Digital yang Presisi & Estetik.
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 mb-10 max-w-2xl font-light leading-relaxed">
            Mahasiswa Teknik Telekomunikasi & <span className="font-medium text-gray-800">Front-End Web Developer</span> yang berfokus pada ekosistem web dan desain UI/UX modern.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 bg-gray-900 border border-transparent rounded-full hover:bg-gray-800 hover:shadow-xl hover:-translate-y-1"
            >
              Lihat Karya Saya
            </a>
            <Link 
              to="/cv" 
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-gray-900 transition-all duration-300 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm"
            >
              Baca CV Lengkap
            </Link>
          </div>
        </div>
        
        {/* Dekorasi Background Halus */}
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
      </main>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 px-8 md:px-16 lg:px-24">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-gray-900 font-bold text-3xl tracking-tight">
            Proyek Pilihan
          </h3>
          <span className="hidden md:block h-px bg-gray-200 flex-grow ml-8"></span>
        </div>
        
        {/* Diubah menjadi lg:grid-cols-3 agar 3 proyek berjajar rata ke samping */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
          
          {/* Card Project 1 */}
          <a href="https://EastVirgina.github.io/react-quote-app/" target="_blank" rel="noreferrer" className="group block outline-none">
            <div className="w-full h-[280px] md:h-[400px] bg-gray-100 rounded-[2rem] flex items-center justify-center overflow-hidden border border-gray-200/60 mb-6 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-gray-200/50 group-hover:-translate-y-2 group-focus-visible:ring-4 ring-gray-900">
              <img src={imgQuoteApp} alt="Tampilan React Quote App" className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <div className="px-2">
              <h4 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">React Quote App</h4>
              <p className="text-gray-500 font-light leading-relaxed">Aplikasi penghasil kutipan dinamis yang dibangun dengan React, integrasi API real-time, dan styling menggunakan Tailwind CSS.</p>
            </div>
          </a>

          {/* Card Project 2 */}
          <a href="https://mini-project-react-27hm5ufzn-eastvirginas-projects.vercel.app" target="_blank" rel="noreferrer" className="group block outline-none">
            <div className="w-full h-[280px] md:h-[400px] bg-[#0d1117] rounded-[2rem] flex items-center justify-center overflow-hidden border border-gray-800 mb-6 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-gray-300/50 group-hover:-translate-y-2 group-focus-visible:ring-4 ring-gray-900">
              <img src={imgMiniApi} alt="Tampilan Mini Project API" className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 scale-100 group-hover:scale-105 transition-all duration-700 ease-out" />
            </div>
            <div className="px-2">
              <h4 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">Mini Project API</h4>
              <p className="text-gray-500 font-light leading-relaxed">Simulasi endpoint API yang disederhanakan untuk mendemonstrasikan pengambilan dan pengelolaan data asinkron pada front-end.</p>
            </div>
          </a>

          {/* Card Project 3: Web Toko Online */}
          <a href="https://toko-online-b8w2tz3fw-eastvirginas-projects.vercel.app/" target="_blank" rel="noreferrer" className="group block outline-none">
            <div className="w-full h-[280px] md:h-[400px] bg-gray-50 rounded-[2rem] flex items-center justify-center overflow-hidden border border-gray-200/60 mb-6 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-gray-200/50 group-hover:-translate-y-2 group-focus-visible:ring-4 ring-gray-900">
              <img src={imgTokoOnline} alt="Tampilan Web Toko Online" className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <div className="px-2">
              <h4 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">Web Toko Online</h4>
              <p className="text-gray-500 font-light leading-relaxed">Aplikasi web e-commerce modern dan responsif yang dibangun sebagai proyek portofolio. Fitur-fiturnya meliputi penelusuran produk, pencarian & penyaringan, keranjang belanja yang berfungsi penuh dengan penyimpanan permanen, dan desain UI/UX yang bersih.</p>
            </div>
          </a>

        </div>
      </section>
    </div>
  );
}

// ==========================================
// 2. KOMPONEN HALAMAN KHUSUS CV
// ==========================================
function CVPage() {
  return (
    <section className="pt-32 pb-24 px-8 md:px-16 lg:px-24 bg-[#fafafa] flex-grow selection:bg-gray-900 selection:text-white">
      <div className="max-w-6xl mx-auto bg-white p-8 md:p-12 lg:p-16 rounded-[2.5rem] shadow-sm border border-gray-100">
        
        <div className="mb-16 border-b border-gray-100 pb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Curriculum Vitae</h2>
          <p className="text-xl text-gray-500 font-light">Telecommunication Engineer & Front-End Developer.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12">
          {/* Kolom Kiri: Pendidikan, Sertifikasi & Skill */}
          <div className="md:col-span-4 space-y-12">
            
            {/* Pendidikan */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"><span className="text-xl">🎓</span></div>
                <h4 className="text-xl font-bold text-gray-900">Pendidikan</h4>
              </div>
              
              <div className="relative pl-6 border-l border-gray-200 mb-8">
                <div className="absolute w-3 h-3 bg-white border-2 border-gray-900 rounded-full -left-[6.5px] top-1.5"></div>
                <p className="font-bold text-lg text-gray-900">Telkom University</p>
                <p className="text-gray-600 font-medium mt-1">S1 Teknik Telekomunikasi</p>
                <p className="text-sm text-gray-500 mt-2">Aktif di legislatif himpunan & fokus pengembangan sistem jaringan.</p>
                <p className="text-xs text-gray-400 mt-3 bg-gray-50 inline-block px-3 py-1 rounded-full border border-gray-100 font-semibold tracking-wide">2024 - Sekarang</p>
              </div>

              <div className="relative pl-6 border-l border-transparent">
                <div className="absolute w-3 h-3 bg-white border-2 border-gray-300 rounded-full -left-[6.5px] top-1.5"></div>
                <p className="font-bold text-lg text-gray-900">MAN 2 Jakarta</p>
                <p className="text-gray-600 font-medium mt-1">Jurusan MIPA</p>
                <p className="text-xs text-gray-400 mt-3 bg-gray-50 inline-block px-3 py-1 rounded-full border border-gray-100 font-semibold tracking-wide">2021 - 2024</p>
              </div>
            </div>

            {/* Sertifikasi */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"><span className="text-xl">📜</span></div>
                <h4 className="text-xl font-bold text-gray-900">Sertifikasi</h4>
              </div>
              <div className="space-y-5">
                <div>
                  <p className="font-bold text-gray-900 text-sm">Intermediate HCIA Security - Huawei</p>
                  <p className="text-xs text-gray-500 mt-1">Digital Talent Academy (KOMDIGI) • Maret 2026</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Google Analytics Certification</p>
                  <p className="text-xs text-gray-500 mt-1">Google • Maret 2026</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Associate Data Scientist + Python</p>
                  <p className="text-xs text-gray-500 mt-1">Digital Talent Academy (KOMDIGI) • Februari 2026</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Intensive Bootcamp Microsoft Excel</p>
                  <p className="text-xs text-gray-500 mt-1">KarirNex • Februari 2026</p>
                </div>
              </div>
            </div>

            {/* Keahlian Teknis */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"><span className="text-xl">⚡</span></div>
                <h4 className="text-xl font-bold text-gray-900">Keahlian Teknis</h4>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {['React', 'Tailwind CSS', 'Vite', 'JavaScript', 'Python', 'Pandas', 'Figma', 'Networking'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-gray-50 border border-gray-200/60 rounded-xl text-xs font-medium text-gray-700 hover:border-gray-400 hover:bg-white transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Pengalaman & Aktivitas */}
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"><span className="text-xl">💼</span></div>
              <h4 className="text-xl font-bold text-gray-900">Pengalaman Organisasi & Profesional</h4>
            </div>

            <div className="space-y-12">
              
              {/* Pengalaman 1: DPA HMTT */}
              <div className="relative pl-8 border-l border-gray-200 group">
                <div className="absolute w-4 h-4 bg-gray-900 rounded-full -left-[8.5px] top-1 ring-4 ring-white group-hover:scale-125 transition-transform duration-300"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <p className="font-bold text-xl text-gray-900">Staff Dewan Perwakilan Anggota (DPA)</p>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mt-1 sm:mt-0 bg-gray-100 px-3 py-1 rounded-full">2026 - 2027</span>
                </div>
                <p className="text-blue-600 font-medium text-sm mb-4">Himpunan Mahasiswa Teknik Telekomunikasi (HMTT) - Telkom University</p>
                <ul className="text-gray-600 leading-relaxed font-light text-sm list-disc ml-4 space-y-2">
                  <li>Menyerap, menampung, dan menganalisis aspirasi dari mahasiswa S1 Teknik Telekomunikasi untuk disalurkan kepada pihak prodi maupun eksekutif himpunan.</li>
                  <li>Melakukan pengawasan, pengawalan, dan evaluasi komprehensif terhadap program kerja BPH HMTT agar selaras dengan Garis Besar Haluan Organisasi (GBHO).</li>
                  <li>Terlibat aktif dalam fungsi legislasi meliputi perumusan, amandemen, dan pengesahan Standar Operasional Prosedur (SOP) organisasi.</li>
                  <li>Menginisiasi forum diskusi, audiensi, dan RDP untuk menjembatani komunikasi antara mahasiswa, pengurus himpunan, dan pihak kampus.</li>
                  <li>Bertanggung jawab menyusun instrumen penilaian kinerja pengurus serta merangkum LPJ akhir periode.</li>
                </ul>
              </div>

              {/* Pengalaman 2: Web Developer */}
              <div className="relative pl-8 border-l border-gray-200 group">
                <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[6.5px] top-1.5 ring-4 ring-white group-hover:bg-gray-900 transition-colors duration-300"></div>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2">
                  <p className="font-bold text-xl text-gray-900">Front-end Web Developer</p>
                </div>
                <p className="text-blue-600 font-medium text-sm mb-3">Proyek Independen & Portofolio</p>
                <p className="text-gray-600 leading-relaxed font-light text-sm">Mengembangkan antarmuka aplikasi web modern menggunakan ekosistem React, Vite, dan Tailwind CSS. Mengelola version control dan deployment proyek secara live melalui GitHub Pages dan Vercel.</p>
              </div>

              {/* Pengalaman 3: Workshop CPS */}
              <div className="relative pl-8 border-l border-gray-200 group">
                <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[6.5px] top-1.5 ring-4 ring-white group-hover:bg-gray-900 transition-colors duration-300"></div>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2">
                  <p className="font-bold text-xl text-gray-900">Web Development Workshop</p>
                </div>
                <p className="text-blue-600 font-medium text-sm mb-3">Cyber-Physical Systems (CPS) Lab, Telkom University</p>
                <p className="text-gray-600 leading-relaxed font-light text-sm">Menyelesaikan pelatihan intensif untuk memperkuat fondasi pemrograman front-end dan praktik terbaik dalam membangun antarmuka digital.</p>
              </div>

              {/* Pengalaman 4: Data Analyst Python */}
              <div className="relative pl-8 border-l border-transparent group">
                <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[6.5px] top-1.5 ring-4 ring-white group-hover:bg-gray-900 transition-colors duration-300"></div>
                <p className="font-bold text-xl text-gray-900 mb-1">Analisis Data Kebakaran Hutan</p>
                <p className="text-blue-600 font-medium text-sm mb-3">Studi Kasus Python & Pandas</p>
                <p className="text-gray-600 leading-relaxed font-light text-sm">Merancang skrip untuk membersihkan dan menganalisis dataset "forest fires" guna menarik wawasan statistik dan mempraktikkan manipulasi data.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 3. KOMPONEN ROOT (NAVBAR + PENGATUR URL + FOOTER)
// ==========================================
function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Memastikan layar scroll ke atas saat pindah menu */}
      <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-gray-200">
        
        {/* NAVBAR: Efek Sticky & Glassmorphism */}
        <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-gray-100/50 transition-all duration-300">
          <div className="flex justify-between items-center py-5 px-8 md:px-16 lg:px-24">
            <Link to="/" className="text-xl font-extrabold tracking-tight hover:opacity-70 transition-opacity">
              Hafizh Tsaqif Alamsyah<span className="text-blue-600">.</span>
            </Link>
            <ul className="hidden md:flex space-x-10 text-sm font-semibold tracking-wide text-gray-600">
              <li><Link to="/" className="hover:text-gray-900 transition-colors py-2">Home</Link></li>
              <li><Link to="/cv" className="hover:text-gray-900 transition-colors py-2">CV / Resume</Link></li>
              <li><a href="mailto:asampez117@gmail.com" className="hover:text-gray-900 transition-colors py-2">Kontak</a></li>
            </ul>
          </div>
        </nav>

        {/* AREA KONTEN UTAMA */}
        <div className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cv" element={<CVPage />} />
          </Routes>
        </div>

        {/* FOOTER: Minimalis & Premium */}
        <footer className="bg-[#0a0a0a] text-white py-20 mt-auto">
          <div className="max-w-6xl mx-auto px-8 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Mari wujudkan ide hebat.</h2>
            <p className="text-gray-400 mb-12 text-center max-w-lg font-light">
              Terbuka untuk kolaborasi, diskusi teknologi, atau sekadar berbincang tentang web development dan UI/UX.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-16">
              <a href="mailto:asampez117@gmail.com" className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/5 transition-all text-sm font-medium">
                Email Saya
              </a>
              <a href="https://github.com/EastVirgina" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/5 transition-all text-sm font-medium">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/hafizh-tsaqif-alamsyah-65803133a/" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/5 transition-all text-sm font-medium">
                LinkedIn
              </a>
            </div>
            
            <div className="w-full h-px bg-white/10 mb-8"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-center w-full text-xs text-gray-500 font-medium tracking-wide">
              <p>© {new Date().getFullYear()} Hafizh Tsaqif Alamsyah.</p>
              <p className="mt-4 md:mt-0">Dibuat dengan React & Tailwind</p>
            </div>
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;