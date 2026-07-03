import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
import 'aos/dist/aos.css';

const Banner = () => {
    const fileID = '18RFkRvRDoaLLeoGlZt5KMkMtxThjTSqC'
    const downloadURL = `https://drive.google.com/uc?export=download&id=${fileID}`;

    const handleDownload = () => {
        const a = document.createElement('a');
        a.href = downloadURL;
        a.download = 'yourfile.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    return (
        <section  data-aos="fade-up" className=" text-white bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900  ">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:text-left">
                    <p className="text-gray-300 uppercase tracking-widest mb-2 text-sm md:text-base">Hello,</p>
                    <h1 className="md:text-5xl text-4xl font-bold mt-0 uppercase text-white">Mohammad Abu Naim</h1>
                    <p className="text-gray-400 text-xl mt-2 md:text-2xl font-semibold">
                        {"I'm a"} <Typewriter words={['Web Developer', 'Frontend Developer', 'Full-Stack Developer', 'MERN Stack Developer']} loop={true} cursor cursorStyle={'|'} typeSpeed={70} deleteSpeed={50} delaySpeed={1500} />
                    </p>
                    <div className="flex gap-4 mt-4 flex-col lg:justify-start">
                        <div className="flex flex-col md:flex-row md:justify-center lg:justify-start items-center gap-4">
                            <button onClick={handleDownload} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-gray-800 rounded hover:bg-white group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-gray-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out flex gap-2  font-bold group-hover:text-black items-center italic">GET RESUME <FaDownload /></span>
                            </button>
                            <a href='https://drive.google.com/file/d/1bSDuALqjQCau48a3AhbX-juB7eW_NVCO/view?usp=sharing' target="_blank" className="relative mt-1.5 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-gray-800 rounded hover:bg-white group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-gray-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out flex gap-2  font-bold group-hover:text-black items-center italic">View Resume<FaEye /></span>
                            </a>
                        </div>
                        <div className="flex gap-4 items-start justify-center lg:mr-24">
                            <a href="https://www.linkedin.com/in/md-abu-naim/" target="_blank" className="relative w-9 inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-gray-500 via-black to-gray-500 group-hover:opacity-100"></span>
                                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                                <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                                <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                                <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                                <span className="relative text-2xl"><FaLinkedin /></span>
                            </a >
                            <a href="https://github.com/md-abu-naim" target="_blank" className="relative w-9 inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-gray-500 via-black to-gray-500 group-hover:opacity-100"></span>
                                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                                <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                                <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                                <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                                <span className="relative text-2xl"><FaGithub /></span>
                            </a >
                            <a href="https://www.facebook.com/farhanadnan.farabi.5" target="_blank" className="relative w-9 inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-gray-500 via-black to-gray-500 group-hover:opacity-100"></span>
                                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                                <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                                <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                                <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                                <span className="relative text-2xl"><FaFacebook /></span>
                            </a >
                        </div>
                    </div>

                </div>

                <div className="lg:flex justify-center">
                    <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] rounded-lg border bg-gradient-to-r to-[#0a0d37]">
                        <div className="flex flex-row">
                            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
                        </div>
                        <div className="px-4 lg:px-8 py-5">
                            <div className="flex flex-row space-x-2">
                                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                                <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                                <div className="h-3 w-3 rounded-full bg-green-200"></div>
                            </div>
                        </div>
                        <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
                            <code className="font-mono text-xs md:text-sm lg:text-base">
                                <div className="blink">
                                    <span className="mr-2 text-pink-500">const</span>
                                    <span className="mr-2 text-white">coder</span>
                                    <span className="mr-2 text-pink-500">=</span>
                                    <span className="text-gray-400">{"{"}</span>
                                </div>
                                <div>
                                    <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                                    <span className="text-gray-400">{`'`}</span>
                                    <span className="text-amber-300">Mohammad Abu Naim</span>
                                    <span className="text-gray-400">{`',`}</span>
                                </div>
                                <div className="ml-4 lg:ml-8 mr-2">
                                    <span className=" text-white">skills:</span>
                                    <span className="text-gray-400">{`['`}</span>
                                    <span className="text-amber-300">React</span>
                                    <span className="text-gray-400">{"', '"}</span>
                                    <span className="text-amber-300">Express</span>
                                    <span className="text-gray-400">{"', '"}</span>
                                    <span className="text-amber-300">MongoDB</span>
                                    <span className="text-gray-400">{"', '"}</span>
                                    <span className="text-amber-300">Node JS</span>
                                    <span className="text-gray-400">{"', '"}</span>
                                    <span className="text-amber-300">JavaScript</span>
                                    <span className="text-gray-400">{"', '"}</span>
                                    <span className="text-amber-300">Tailwind CSS</span>
                                    <span className="text-gray-400">{"', '"}</span>
                                    <span className="text-amber-300">CSS3</span>
                                    <span className="text-gray-400">{"', '"}</span>
                                    <span className="text-amber-300">HTML5</span>
                                    <span className="text-gray-400">{"'"}</span>
                                    <span className="text-gray-400">{`]`}</span>

                                </div>
                                <div>
                                    <span className="ml-4 lg:ml-8 mr-2 text-white">
                                        hardWorker:
                                    </span>
                                    <span className="text-orange-400">true</span>
                                    <span className="text-gray-400">,</span>
                                </div>
                                <div>
                                    <span className="ml-4 lg:ml-8 mr-2 text-white">
                                        quickLearner:
                                    </span>
                                    <span className="text-orange-400">true</span>
                                    <span className="text-gray-400">,</span>
                                </div>
                                <div>
                                    <span className="ml-4 lg:ml-8 mr-2 text-green-400">
                                        hireable:
                                    </span>
                                    <span className="text-orange-400">function</span>
                                    <span className="text-gray-400">{"() {"}</span>
                                </div>
                                <div>
                                    <span className="ml-8 lg:ml-16 mr-2 text-orange-400">
                                        return
                                    </span>
                                    <span className="text-gray-400">{`(`}</span>
                                </div>
                                <div>
                                    <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                                    <span className="mr-2 text-white">hardWorker</span>
                                    <span className="text-amber-300">&amp;&amp;</span>
                                </div>
                                <div>
                                    <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                                    <span className="mr-2 text-white">quickLearner</span>
                                    <span className="text-amber-300">&amp;&amp;</span>
                                </div>
                                <div>
                                    <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                                    <span className="mr-2 text-white">skills.length</span>
                                    <span className="mr-2 text-amber-300">&gt;=</span>
                                    <span className="text-orange-400">5</span>
                                </div>
                                <div>
                                    <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
                                </div>
                                <div>
                                    <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
                                </div>
                                <div>
                                    <span className="text-gray-400">{`};`}</span>
                                </div>
                            </code>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;