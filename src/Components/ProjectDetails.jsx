import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const [projects, setProjects] = useState([]);
    const { name } = useParams();
    
    const project = projects?.find(project => project.name.toLowerCase() ===name.toLowerCase());
    const { image, url, client, server, description, features, technologies, challenges, future_plans } = project || {};

    useEffect(() => {
        fetch('/Projects.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
            });
    }, []);

    return (
        <section className='bg-gray-900 text-gray-100 min-h-screen px-4 md:px-10 py-16 flex items-center justify-center'>
            <div className='grid grid-cols-1 lg:grid-cols-2 border border-gray-800 rounded-2xl bg-gray-950 p-6 md:p-10 gap-10 items-start max-w-7xl mx-auto shadow-2xl'>
                
                {/* Project Image Box */}
                <div className='w-full overflow-hidden rounded-xl border border-gray-800 group bg-gray-900 sticky top-10'>
                    <img 
                        src={image} 
                        alt={name} 
                        className='w-full h-auto object-cover transform duration-500 group-hover:scale-105 rounded-xl' 
                    />
                </div>

                {/* Project Info Box */}
                <div className='space-y-6'>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold border-b-2 inline-block border-blue-500 pb-2 mb-4 tracking-wide">
                            {name}
                        </h1>
                        <p className='text-gray-400 leading-relaxed text-justify text-sm md:text-base'>
                            {description}
                        </p>
                    </div>

                    {/* Features Section */}
                    <div>
                        <h2 className="text-xl font-semibold mb-3 text-gray-200 flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-blue-500"></span> Key Features
                        </h2>
                        <ul className='space-y-2.5 text-gray-400 text-sm md:text-base'>
                            {
                                features?.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-2 bg-gray-900/50 p-3 rounded-lg border border-gray-900">
                                        <span className="text-blue-500 font-bold mt-0.5">•</span>
                                        <span>{feature}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* Challenges Section */}
                    {challenges && (
                        <div>
                            <h2 className="text-xl font-semibold mb-2 text-gray-200 flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-amber-500"></span> Challenges Faced
                            </h2>
                            <div className="bg-amber-950/20 border border-amber-900/40 p-4 rounded-xl text-gray-400 text-sm md:text-base text-justify leading-relaxed">
                                {challenges}
                            </div>
                        </div>
                    )}

                    {/* Future Plans Section */}
                    {future_plans && (
                        <div>
                            <h2 className="text-xl font-semibold mb-2 text-gray-200 flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-emerald-500"></span> Potential Improvements & Future Plans
                            </h2>
                            <div className="bg-emerald-950/20 border border-emerald-900/40 p-4 rounded-xl text-gray-400 text-sm md:text-base text-justify leading-relaxed">
                                {future_plans}
                            </div>
                        </div>
                    )}

                    {/* Technologies Section */}
                    <div>
                        <h2 className="text-xl font-semibold mb-3 text-gray-200">Technologies Used</h2>
                        <div className='flex flex-wrap gap-2'>
                            {
                                technologies?.map((technology, i) => (
                                    <span 
                                        key={i} 
                                        className='bg-blue-950/40 border border-blue-900 text-blue-400 text-xs font-medium rounded-full px-3.5 py-1.5 transition-colors hover:bg-blue-950/70'
                                    >
                                        {technology}
                                    </span>
                                ))
                            }
                        </div>
                    </div>

                    {/* Links/Buttons Section */}
                    <div className='flex flex-wrap gap-3 pt-4 border-t border-gray-900'>
                        <a 
                            href={url} 
                            target='_blank' 
                            rel="noreferrer"
                            className="px-5 py-2.5 text-sm font-semibold bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all text-center min-w-[110px]"
                        >
                            Live Site
                        </a>
                        <a 
                            href={client} 
                            target='_blank' 
                            rel="noreferrer"
                            className="px-5 py-2.5 text-sm font-semibold border border-gray-700 bg-gray-900 text-gray-300 rounded-xl hover:bg-gray-800 transition-all text-center min-w-[110px]"
                        >
                            Client Code
                        </a>
                        {/* Empty server check */}
                        {server && (
                            <a 
                                href={server} 
                                target='_blank' 
                                rel="noreferrer"
                                className="px-5 py-2.5 text-sm font-semibold border border-gray-700 bg-gray-900 text-gray-300 rounded-xl hover:bg-gray-800 transition-all text-center min-w-[110px]"
                            >
                                Server Code
                            </a>
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProjectDetails;