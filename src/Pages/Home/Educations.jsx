import { FaEye, FaGraduationCap, FaAward } from "react-icons/fa";
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";

const Educations = () => {
    const [educations, setEducations] = useState([])

    useEffect(() => {
        fetch('/Education.json')
            .then(res => res.json())
            .then(data => {
                setEducations(data);
            })
    }, [])

    return (
        <section data-aos="fade-up" id="educations" className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-gray-900 to-black text-white border-t border-gray-800">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider">
                        My <span className="text-gray-500">Education</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-gray-600 mt-4 rounded-full mx-auto md:mx-0"></div>
                </div>

                {/* Education Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {educations.map((edu, index) => (
                        <div
                            key={index}
                            className="group relative bg-gray-800/40 border border-gray-700 p-8 rounded-2xl hover:bg-gray-800/60 transition-all duration-300 shadow-xl"
                        >
                            <div className="flex items-start gap-4">
                                {/* Icon Container */}
                                <div className="bg-gray-700 p-3 rounded-lg text-gray-300 group-hover:text-white group-hover:bg-gray-600 transition-colors">
                                    {edu.type === "academic" ? <FaGraduationCap size={28} /> : <FaAward size={28} />}
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                                        {edu.title}
                                    </h3>
                                    <p className="text-gray-400 font-medium mb-1">{edu.institution}</p>
                                    <p className="text-sm text-gray-500 font-sans mb-3">{edu.duration}</p>

                                    {/* Result or Link */}
                                    {edu.result ? (
                                        <p className="text-emerald-400 font-semibold">{edu.result}</p>
                                    ) : (
                                        <a
                                            href={edu.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="relative mt-4 inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-bold text-white transition-all bg-gray-700 rounded-lg hover:bg-white group/btn w-fit"
                                        >
                                            <span className="w-48 h-48 rounded rotate-[-40deg] bg-gray-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover/btn:ml-0 group-hover/btn:mb-32 group-hover/btn:translate-x-0"></span>
                                            <span className="relative flex items-center gap-2 transition-colors duration-300 ease-in-out group-hover/btn:text-black italic text-sm">
                                                VIEW CERTIFICATE <FaEye />
                                            </span>
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Decorative Corner Element */}
                            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-30 transition-opacity">
                                <FaGraduationCap size={60} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Educations;