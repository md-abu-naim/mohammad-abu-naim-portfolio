
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const skillCategories = [
        {
            title: "Frontend Development",
            skills: [
                { name: "React.js", level: 90 },
                { name: "TypeScript", level: 85 },
                { name: "JavaScript (ES6+)", level: 70 },
                { name: "Tailwind CSS", level: 95 },
                { name: "HTML5", level: 95 },
                { name: "CSS3", level: 95 }
            ]
        },
        {
            title: "Backend Development",
            skills: [
                { name: "Node.js", level: 75 },
                { name: "Postgres", level: 80 },
                { name: "Express.js", level: 80 },
                { name: "MongoDB", level: 80 },
                { name: "NeonDB", level: 85 },
                { name: "REST APIs", level: 85 }
            ]
        },
        {
            title: "Tools & Others",
            skills: [
                { name: "Git & GitHub", level: 85 },
                { name: "Firebase", level: 75 },
                { name: "Vercel / Netlify", level: 80 },
                { name: "VS Code", level: 90 },
                { name: "Postman", level: 90 },
                { name: "DrawSQL", level: 90 }
            ]
        }
    ];

    return (
        <section 
            id="skills" 
            data-aos="fade-up" 
            className="text-white bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16 md:py-24 border-t border-gray-800"
        >
            <div className="container px-6 mx-auto max-w-6xl">
                
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider text-white">
                        My <span className="text-gray-400">Skills</span>
                    </h2>
                    <div className="h-1 w-20 bg-gray-500 mx-auto mt-4 rounded"></div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div 
                            key={index} 
                            className="bg-gray-800/40 p-6 md:p-8 rounded-xl border border-gray-700/50 shadow-xl flex flex-col justify-between hover:border-gray-600/50 transition-all duration-300"
                        >
                            <div>
                                <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-6 border-b border-gray-700 pb-2">
                                    {category.title}
                                </h3>
                                
                                <div className="space-y-5">
                                    {category.skills.map((skill, idx) => (
                                        <div key={idx} className="space-y-2">
                                            <div className="flex justify-between items-center text-sm md:text-base">
                                                <span className="font-medium text-gray-300">{skill.name}</span>
                                                <span className="font-semibold text-gray-400">{skill.level}%</span>
                                            </div>
                                            
                                            {/* Graphical Progress Bar */}
                                            <div className="w-full bg-gray-950 h-3 rounded-full overflow-hidden p-[2px] border border-gray-800">
                                                <div 
                                                    className="bg-gradient-to-r from-gray-600 via-gray-400 to-white h-full rounded-full transition-all duration-1000 ease-out"
                                                    style={{ width: `${skill.level}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;