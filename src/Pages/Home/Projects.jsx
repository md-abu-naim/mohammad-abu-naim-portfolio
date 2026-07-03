import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('/Projects.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
            })
    }, [])
    return (
        <section data-aos="fade-up" id='projects' className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6 md:px-20'>
            <div className=" flex items-center justify-center">
                <h1 className="text-3xl md:text-4xl text-center border-b-2 border-gray-400 p-2 font-bold mb-7">Latest Projects</h1>
            </div>

            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                {
                    projects.map(p => (
                        <a href={p.url} target='_blank' key={p.name} className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-400 hover:scale-95 rounded-2xl overflow-hidden hover:shadow-gray-950 hover:shadow-2xl transition duration-300 '>
                            <img src={p.image} alt="" className='w-full h-56 object-cover' />
                            <div className='p-5'>
                                <h3 className='text-xl font-semibold text-white'>{p.name}</h3>
                                <p className='text-gray-400 mt-2 mb-3'>{p.description}</p>
                                <div className='flex flex-wrap gap-2 mb-3'>
                                    {
                                        p?.technologies?.slice(0, 3).map((technology, i) => (
                                            <span key={i} className='bg-gray-800 border border-gray-400 text-sm rounded-full px-3 py-1'>{technology}</span>
                                        ))
                                    }
                                    {
                                        p.technologies?.length > 3 && <small className='text-md pt-2'>.....</small>
                                    }
                                </div>
                                <div className='flex gap-3'>
                                    <a href={p.url} target='_blank' className="hidden lg:block px-4 py-2 text-sm font-semibold border border-gray-500 text-white rounded hover:bg-gray-950 hover:text-white transition">Live Site</a>
                                    <a href={p.client} target='_blank' className="px-4 py-2 text-sm font-semibold border border-gray-500 text-white rounded hover:bg-gray-950 hover:text-white transition">Source Code</a>
                                    <Link to={`/${p.name}`} className="px-4 py-2 text-sm font-semibold border border-gray-500 text-white rounded hover:bg-gray-950 hover:text-white transition">Details</Link>
                                </div>
                            </div>
                        </a>
                    ))
                }
            </div>
        </section>
    );
};

export default Projects;

