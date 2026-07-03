import { FaEye } from "react-icons/fa";
import 'aos/dist/aos.css';

const Educations = () => {
    return (
        <section data-aos="fade-up" id="educations" className="px-4 md:px-24 py-16 bg-gray-900">
            <h2 className="text-3xl font-bold text-white">Educations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex gap-2 pt-3">
                    <div className="border-t-4 border-gray-400 w-20 mb-4"></div>
                    <div>
                        <h3 className="text-xl text-white font-medium">M.A. (Masters) Certificate</h3>
                        <p>AL-Jamiatul Ahliya Darul Uloom Muinul Islam</p>
                        <p className="font-sans">May 2025 - Running</p>
                        <p>GPA: Running</p>
                    </div>
                </div>
                <div className="flex gap-2 pt-3">
                    <div className="border-t-4 border-gray-400 w-20 mb-4"></div>
                    <div>
                        <h3 className="text-xl text-white font-medium">B.A. (Honours) Certificate</h3>
                        <p>Jamia Mohammadia Khajuria Madrasha</p>
                        <p className="font-sans">Aprill 2024 - February 2025</p>
                        <p>GPA: 4.00 (A+)</p>
                    </div>
                </div>
                <div className="flex gap-2 pt-3">
                    <div className="border-t-4 border-gray-400 w-20 mb-4"></div>
                    <div>
                        <h3 className="text-xl text-white font-medium">Complete Web Development Course</h3>
                        <p>Programming Hero                    </p>
                        <p className="font-sans">December 2023 - June 2024</p>
                        <a href='https://drive.google.com/file/d/1KNoKEhqFePHyphD9spusWV-MKbOAMf0R/view?usp=sharing' target="_blank" className="relative mt-1.5 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-gray-800 rounded hover:bg-white group">
                            <span className="w-48 h-48 rounded rotate-[-40deg] bg-gray-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out flex gap-2  font-bold group-hover:text-black items-center italic">Certificate <FaEye /></span>
                        </a>
                    </div>
                </div>
                <div className="flex gap-2 pt-3">
                    <div className="border-t-4 border-gray-400 w-20 mb-4"></div>
                    <div>
                        <h3 className="text-xl text-white font-medium">Complete Web Development Course Black Belt</h3>
                        <p>Programming Hero                    </p>
                        <p className="font-sans">July 2024 - August 2024</p>
                        <a href='https://drive.google.com/file/d/1FTVLLElWwfvPvxk7iI9AM-s_nee9fImv/view?usp=sharing' target="_blank" className="relative mt-1.5 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-gray-800 rounded hover:bg-white group">
                            <span className="w-48 h-48 rounded rotate-[-40deg] bg-gray-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out flex gap-2  font-bold group-hover:text-black items-center italic">Certificate <FaEye /></span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Educations;


