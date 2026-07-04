import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
import 'aos/dist/aos.css';

const Banner = () => {
    const downloadURL = 'https://drive.google.com/uc?id=1bSDuALqjQCau48a3AhbX-juB7eW_NVCO&export=download';

    const handleDownload = () => {
        const a = document.createElement('a');
        a.href = downloadURL;
        a.target = '_blank';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <section data-aos="fade-up" className="text-white bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 min-h-[calc(100vh-80px)] flex items-center">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around items-center gap-12">

                {/* Left Content Section */}
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:text-left">
                    <p className="text-gray-300 uppercase tracking-widest mb-2 text-sm md:text-base">Hello,</p>
                    <h1 className="md:text-5xl text-4xl font-bold mt-0 uppercase text-white">Mohammad Abu Naim</h1>
                    <p className="text-gray-400 text-xl mt-2 md:text-2xl font-semibold">
                        {"I'm a "}
                        <Typewriter
                            words={['Web Developer', 'Frontend Developer', 'Full-Stack Developer', 'MERN Stack Developer']}
                            loop={true}
                            cursor
                            cursorStyle={'|'}
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </p>

                    <div className="flex gap-4 mt-6 flex-col lg:justify-start">
                        {/* Resume Buttons */}
                        <div className="flex flex-col sm:flex-row md:justify-center lg:justify-start items-center gap-4">
                            <button onClick={handleDownload} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-gray-800 rounded hover:bg-white group w-full sm:w-auto justify-center">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-gray-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative text-left text-white transition-colors duration-300 ease-in-out flex gap-2 font-bold group-hover:text-black items-center italic">GET RESUME <FaDownload /></span>
                            </button>
                            <a href='https://drive.google.com/file/d/1bSDuALqjQCau48a3AhbX-juB7eW_NVCO/view?usp=sharing' target="_blank" rel="noreferrer" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-gray-800 rounded hover:bg-white group w-full sm:w-auto justify-center">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-gray-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative text-left text-white transition-colors duration-300 ease-in-out flex gap-2 font-bold group-hover:text-black items-center italic">View Resume<FaEye /></span>
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 items-center justify-center lg:justify-start mt-2">
                            <a href="https://www.linkedin.com/in/md-abu-naim/" target="_blank" rel="noreferrer" className="relative w-12 h-12 inline-flex items-center justify-center overflow-hidden font-bold text-white rounded-md shadow-2xl group bg-gray-800">
                                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-gray-500 via-black to-gray-500 group-hover:opacity-100"></span>
                                <span className="relative text-xl"><FaLinkedin /></span>
                            </a>
                            <a href="https://github.com/md-abu-naim" target="_blank" rel="noreferrer" className="relative w-12 h-12 inline-flex items-center justify-center overflow-hidden font-bold text-white rounded-md shadow-2xl group bg-gray-800">
                                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-gray-500 via-black to-gray-500 group-hover:opacity-100"></span>
                                <span className="relative text-xl"><FaGithub /></span>
                            </a>
                            <a href="https://www.facebook.com/farhanadnan.farabi.5" target="_blank" rel="noreferrer" className="relative w-12 h-12 inline-flex items-center justify-center overflow-hidden font-bold text-white rounded-md shadow-2xl group bg-gray-800">
                                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-gray-500 via-black to-gray-500 group-hover:opacity-100"></span>
                                <span className="relative text-xl"><FaFacebook /></span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="w-full flex justify-center lg:w-auto">
                    <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-xl overflow-hidden shadow-2xl border-4 border-gray-500">
                        <div className="absolute top-0 -left-1/2 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent blur-md animate-shine rounded-xl pointer-events-none"></div>
                        <img src='/assets/Naim.png' alt="Mohammad Abu Naim" className="w-full h-full object-cover" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Banner;