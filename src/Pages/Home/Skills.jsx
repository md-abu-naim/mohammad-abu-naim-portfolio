import { BiLogoVisualStudio } from "react-icons/bi";
import { FaCss3Alt, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiFirebase, SiJavascript, SiMongodb, SiNetlify, SiTailwindcss, SiVercel } from "react-icons/si";
import 'aos/dist/aos.css';

const Skills = () => {
    const frontendSkills = [
        { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    ];

    const backendSkills = [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    ];

    const tools = [
        { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
        { name: "VS Code", icon: <BiLogoVisualStudio className="text-indigo-400" /> },
        { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
        { name: "Vercel", icon: <SiVercel className="text-white" /> },
        { name: "Netlify", icon: <SiNetlify className="text-green-400" /> },
    ];
    return (
        <section data-aos="fade-up" data-aos-easing="ease-in-out" id="skills" className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-16 px-5 md:px-20">
            <div className="max-w-7xl mx-auto">
                <div className=" flex items-center justify-center">
                    <h1 className="text-3xl md:text-4xl text-center border-b-2 border-gray-400 p-2 font-bold mb-7">My Skills</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Frontend Skills */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 border-b border-gray-400 text-center">Frontend Skills</h3>
                        <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6">
                            {
                                frontendSkills.map(skill => (
                                    <div key={skill.name} className="bg-gray-950 hover:bg-gray-900 border border-gray-400 rounded-lg p-3 flex items-center justify-center gap-2 text-[#C39C5D] transition duration-300">
                                        <div className="text-2xl">{skill.icon}</div>
                                        <p className="font-semibold">{skill.name}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    {/* Backend Skills */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 border-b border-gray-400 text-center">Backend Skills</h3>
                        <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6">
                            {
                                backendSkills.map(skill => (
                                    <div key={skill.name} className="bg-gray-950 hover:bg-gray-900 border border-gray-400 rounded-lg p-3 flex items-center justify-center gap-2 text-[#C39C5D] transition duration-300">
                                        <div className="text-2xl">{skill.icon}</div>
                                        <p className="font-semibold">{skill.name}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    {/* Tools & Technologies */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 border-b border-gray-400 text-center">Tools & technologies</h3>
                        <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6">
                            {
                                tools.map(skill => (
                                    <div key={skill.name} className="bg-gray-950 hover:bg-gray-900 border border-gray-400 rounded-lg p-3 flex items-center justify-center gap-2 text-[#C39C5D] transition duration-300">
                                        <div className="text-2xl">{skill.icon}</div>
                                        <p className="font-semibold">{skill.name}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
