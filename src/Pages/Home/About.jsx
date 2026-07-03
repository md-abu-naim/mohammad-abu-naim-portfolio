import 'aos/dist/aos.css';

const About = () => {
    return (
        <section data-aos="fade-up" data-aos-easing="ease-in-out" id="about" className="bg-gray-900 text-white px-4 py-16 md:px-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                    <h2 className="text-3xl font-bold mb-1">About Me!</h2>
                    <div className="border-t-4 border-gray-400 w-20 mb-4"></div>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        I’m <span className="text-white font-semibold">Mohammad Abu naim</span>, a dedicated and creative frontend web developer passionate about building user-friendly and elegant websites. With strong proficiency in <span className="text-white font-semibold">React, Tailwind CSS, HTML, CSS, and JavaScript</span>, I focus on clean UI and pixel-perfect designs.
                    </p>
                    <p className="text-gray-400 leading-snug text-lg mt-4">
                        I also have hands-on experience with backend technologies like <span className="text-white font-semibold">Node.js, Express.js, and MongoDB</span>. I love solving problems and learning new technologies to build impactful projects.
                    </p>
                </div>

                {/* Image */}
                <div className="w-full  flex justify-center">
                    <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-xl overflow-hidden shadow-2xl border-4 border-gray-400 ">
                        <div className="absolute top-0 -left-1/2 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent blur-md animate-shine rounded-xl pointer-events-none"></div>
                        <img src='/assets/Naim.png' alt="About Abu Naim" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;


