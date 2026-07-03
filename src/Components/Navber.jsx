import { useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Navber = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { href: "#", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#educations", label: "Educations" },
        { href: "#contacts", label: "Contacts" },
    ];
    return (
        <header className="sticky top-0 z-50 bg-gray-950 text-white shadow-lg">
            <nav className="navbar px-4 md:px-16 flex justify-between items-center h-20">
                <div className="flex items-center space-x-4">
                    {/* Mobile Hamburger */}
                    <button onClick={() => setIsOpen(!isOpen)} className="btn btn-ghost lg:hidden p-2" aria-label="toggle-menu">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>

                    <Link to='/' className="flex flex-col leading-none">
                        <span className="text-2xl md:text-3xl lg:text-2xl font-bold tracking-wide">Mohammad Abu Naim</span>
                        <small className="text-sm font-medium text-gray-400">
                            <Typewriter words={['Web Developer', 'Frontend Developer', 'Full-Stack Developer', 'MERN Stack Developer']} loop={true} cursor cursorStyle={'|'} typeSpeed={70} deleteSpeed={50} delaySpeed={1500} />
                        </small>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex space-x-8 font-semibold uppercase text-gray-200">
                    {
                        navLinks.map(link => (
                            <li key={link.href}>
                                <a href={link.href} className='hover:text-gray-400 transition-colors duration-300'>{link.label}</a>
                            </li>
                        ))
                    }
                </ul>

                <div className="hidden md:flex">
                    <a href="#contacts" className="group relative inline-flex h-12 items-center justify-center font-bold rounded-full bg-gray-800 hover:bg-gray-600 px-3 py-2 md:px-6 text-white hover:animate-pulse "><span>Hire Me</span><div className="relative ml-1 h-5 w-5 overflow-hidden group-hover:animate-bounce"><div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" ></path></svg><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -translate-x-4"><path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" ></path></svg></div></div></a>
                </div>
            </nav>

            {/* Mobile Dropdwon Menu */}
            {
                isOpen && (
                    <ul className="lg:hidden bg-gray-900 font-semibold space-y-2 px-4 pb-4 pt-2 uppercase">
                        {
                            navLinks.map(link => (
                                <li key={link.href}>
                                    <a href={link.href} className="block py-2 px-4 rounded hover:bg-gray-700 transition">{link.label}</a>
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </header>
    );
};

export default Navber;