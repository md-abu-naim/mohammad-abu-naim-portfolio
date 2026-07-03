import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const ProjectDetails = () => {
    const [projects, setProjects] = useState([])
    const { name } = useParams()
    const project = projects?.find(project => project.name === name)
    const { image, url, client, server, description, features, technologies } = project || {}
    console.log(project);
    useEffect(() => {
        fetch('/Projects.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProjects(data);
            })
    }, [])
    return (
        <section className='bg-gray-900 text-gray-100 min-h-screen px-4 md:px-10 py-16'>
            <div className='grid md:grid-cols-1 lg:grid-cols-2 border border-gray-400 rounded-xl p-5 gap-10 items-center max-w-7xl mx-auto'>
                <div>
                    <img src={image} alt={name} className='w-full h-auto rounded-xl border border-gray-700' />
                </div>

                <div>
                    <h1 className="text-4xl font-bold mb-4 border-b-2 inline-block border-gray-400 pb-1">{name}</h1>
                    <p className='text-gray-400 mb-6 text-justify'>{description}</p>
                    <div className='mb-4'>
                        <h2 className="text-xl font-semibold mb-2">Key Features:</h2>
                        <ul className='list-disc list-inside space-y-1 text-gray-400'>
                            {
                                features?.map((feature, index) => <li key={index}>{feature}</li>)
                            }
                        </ul>
                    </div>
                    <div className='mb-4'>
                        <h2 className="text-xl font-semibold mb-2">Technologies:</h2>
                        <div className='flex flex-wrap gap-2'>
                            {
                                technologies?.map((technology, i) => (
                                    <span key={i} className='bg-gray-800 border border-gray-400 text-sm rounded-full px-3 py-1'>{technology}</span>
                                ))
                            }
                        </div>
                    </div>
                    <div className='flex gap-3 mt-6'>
                        <a href={url} target='_blank' className=" px-4 py-2 text-sm font-semibold border border-gray-500 text-white rounded hover:bg-gray-950 hover:text-white transition">Live Site</a>
                        <a href={client} target='_blank' className="px-4 py-2 text-sm font-semibold border border-gray-500 text-white rounded hover:bg-gray-950 hover:text-white transition">Client Code</a>
                        <a href={server} className="px-5 py-2 font-semibold border border-gray-500 text-white rounded hover:bg-gray-950 hover:text-white transition">Server Code</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;