// import { FaCode, FaGamepad, FaHeart } from "react-icons/fa";
// import 'aos/dist/aos.css';

// const AboutMe = () => {
//     return (
//         <section id="about" data-aos="fade-up" className="text-white bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16 md:py-24 border-t border-gray-800">
//             <div className="container px-6 mx-auto max-w-6xl">
                
//                 {/* Section Title */}
//                 <div className="text-center mb-16">
//                     <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider text-white">
//                         About <span className="text-gray-400">Me</span>
//                     </h2>
//                     <div className="h-1 w-20 bg-gray-500 mx-auto mt-4 rounded"></div>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
//                     {/* Left Column: My Story / Journey */}
//                     <div className="lg:col-span-7 space-y-6">
//                         <div className="flex items-center gap-3">
//                             <FaCode className="text-2xl text-gray-400" />
//                             <h3 className="text-2xl font-bold text-white uppercase tracking-wide">My Programming Journey</h3>
//                         </div>
                        
//                         <p className="text-gray-300 leading-relaxed text-base md:text-lg">
//                             My journey into the world of programming started with a deep curiosity about how stunning web interfaces are built. What began as an experiment quickly turned into a passion for JavaScript and modern web technologies. I thrive on solving complex problems and turning creative ideas into functional, real-world applications.
//                         </p>
                        
//                         <p className="text-gray-300 leading-relaxed text-base md:text-lg">
//                             I specialize in the <span className="text-white font-semibold border-b border-gray-500">MERN Stack (MongoDB, Express.js, React, Node.js)</span>. Whether it is building pixel-perfect, responsive user interfaces or developing robust, scalable backend logic, I enjoy tackling every aspect of web development. Writing clean, maintainable code is always my top priority.
//                         </p>
//                     </div>

//                     {/* Right Column: Personality & Hobbies */}
//                     <div className="lg:col-span-5 space-y-6 bg-gray-800/50 p-6 md:p-8 rounded-xl border border-gray-700/50 shadow-xl">
                        
//                         {/* Personality / Quote */}
//                         <div className="space-y-3">
//                             <div className="flex items-center gap-3">
//                                 <FaHeart className="text-xl text-gray-400 animate-pulse" />
//                                 <h4 className="text-xl font-bold uppercase tracking-wide">Personality</h4>
//                             </div>
//                             <blockquote className="border-l-4 border-gray-500 pl-4 italic text-gray-400 text-sm md:text-base">
//                                 {"I believe that behind every complex problem lies a simple, efficient solution waiting to be coded. I just enjoy finding that piece of logic."}
//                             </blockquote>
//                         </div>

//                         <hr className="border-gray-700" />

//                         {/* Hobbies & Interests */}
//                         <div className="space-y-3">
//                             <div className="flex items-center gap-3">
//                                 <FaGamepad className="text-xl text-gray-400" />
//                                 <h4 className="text-xl font-bold uppercase tracking-wide">Beyond Coding</h4>
//                             </div>
//                             <p className="text-gray-300 text-sm md:text-base">
//                                 When I am away from my monitor, I love to step outside and explore new places. I am a huge tech enthusiast who loves experimenting with gadgets, and I also enjoy playing competitive video games with friends to recharge my creative energy.
//                             </p>
//                         </div>

//                     </div>

//                 </div>

//             </div>
//         </section>
//     );
// };

// export default AboutMe;


import { useEffect } from "react";
import { FaCode, FaGamepad, FaHeart } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {
    // Initialize AOS Animation
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <section id="about" data-aos="fade-up" className="text-white bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16 md:py-24 border-t border-gray-800">
            <div className="container px-6 mx-auto max-w-6xl">
                
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider text-white">
                        About <span className="text-gray-400">Me</span>
                    </h2>
                    <div className="h-1 w-20 bg-gray-500 mx-auto mt-4 rounded"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Left Column: My Story / Journey */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="flex items-center gap-3">
                            <FaCode className="text-2xl text-gray-400" />
                            <h3 className="text-2xl font-bold text-white uppercase tracking-wide">My Programming Journey</h3>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                            My journey into programming began with a deep curiosity about building impactful, interactive user experiences. Over time, that curiosity evolved into a strong expertise in craft-optimized web platforms. I specialize in building fast, scalable applications using modern ecosystems like <span className="text-white font-semibold border-b border-gray-500">React.js, Next.js, JavaScript and TypeScript</span> for the frontend.
                        </p>
                        
                        <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                            On the backend, I design reliable architectures with <span className="text-white font-semibold border-b border-gray-500">Node.js and Express.js</span>, working seamlessly across both NoSQL (<span className="text-white font-semibold">MongoDB</span>) and SQL (<span className="text-white font-semibold">PostgreSQL, NeonDB</span>) databases. From implementing secure <span className="text-white font-semibold">JWT authentication</span> and role-based access control to integrating seamless payment gateways like <span className="text-white font-semibold">Stripe</span>, I enjoy solving full-stack engineering puzzles while prioritizing pixel-perfect design and modular, production-ready code.
                        </p>
                    </div>

                    {/* Right Column: Personality & Hobbies */}
                    <div className="lg:col-span-5 space-y-6 bg-gray-800/40 p-6 md:p-8 rounded-xl border border-gray-700/50 shadow-xl">
                        
                        {/* Personality / Quote */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <FaHeart className="text-xl text-gray-400 animate-pulse" />
                                <h4 className="text-xl font-bold uppercase tracking-wide">Personality</h4>
                            </div>
                            <blockquote className="border-l-4 border-gray-500 pl-4 italic text-gray-400 text-sm md:text-base">
                                {"I believe that behind every complex backend route or sleek UI layout lies a clean, optimal architecture waiting to be written. I just love discovering that perfect piece of logic."}
                            </blockquote>
                        </div>

                        <hr className="border-gray-700/50" />

                        {/* Hobbies & Interests */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <FaGamepad className="text-xl text-gray-400" />
                                <h4 className="text-xl font-bold uppercase tracking-wide">Beyond Coding</h4>
                            </div>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                When I am away from my monitor, I love to step outside and explore new places. As a tech enthusiast, I enjoy keeping up with cutting-edge developer tools, experimenting with system designs via DrawSQL, or playing competitive video games with friends to hit the reset button and boost my creative drive.
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutMe;