import { FaFacebook, FaGithub, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { MdAddCall, MdEmail } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";
import 'aos/dist/aos.css';

const Contacts = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_m680dx3', 'template_utpq75s', form.current, {
                publicKey: 'v4bAuHwLFBIkY2K38',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success('Email send successfully!🤩')
                    e.target.reset()
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <section data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-offset="30" id='contacts' className="py-16 md:px-24 bg-gray-900 text-gray-400">
            <div className=" flex items-center justify-center">
                <h1 className="text-3xl md:text-4xl text-center border-b-2 border-gray-400 p-2 font-bold mb-7 text-white">Contact Me</h1>
            </div>
            <div className="flex flex-col lg:flex-row mt-8">
                <div className=" p-4 mt-6 space-y-6 lg:w-1/2 text-center lg:text-start">
                    <div><h3 className="text-white text-2xl">Contact Me For More Info</h3>
                        <p >I’m currently available to take on new projects, so feel free to send me a message about anything you’d like to discuss. You can contact me anytime, 24/7.</p></div>
                    <div className="flex flex-col items-center lg:items-start justify-center space-y-4 lg:justify-start">
                        <p className="flex items-center gap-2 md:text-xl"><FaLocationDot /> <span>Senbag, Noakhali, Bangladesh</span></p>
                        <a href="mailto:mohammadnaim.dev@gmail.com" className="flex items-center gap-2 md:text-xl"><MdEmail /> <span className="underline text-blue-500">mohammadnaim.dev@gmail.com</span> </a>
                        <a href="https://wa.me/+8801882585833" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 md:text-xl font-sans"><MdAddCall /> <span className="underline text-blue-500">+8801882585833</span> </a>
                    </div>

                    <h3 className="text-xl text-white">Follow Me</h3>
                    <div className="space-x-4 space-y-4">
                        <div className="space-x-4">
                            <a href="https://www.linkedin.com/in/md-abu-naim/" target="_blank" className="relative w-9 inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-gray-500 via-black to-gray-500 group-hover:opacity-100"></span>
                                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                                <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                                <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                                <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                                <span className="relative text-2xl"><FaLinkedin /></span>
                            </a >
                            <a href="https://github.com/md-abu-naim" target="_blank" className="relative w-9 inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-gray-500 via-black to-gray-500 group-hover:opacity-100"></span>
                                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                                <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                                <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                                <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                                <span className="relative text-2xl"><FaGithub /></span>
                            </a >
                            <a href="https://www.facebook.com/farhanadnan.farabi.5" target="_blank" className="relative w-9 inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-gray-500 via-black to-gray-500 group-hover:opacity-100"></span>
                                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                                <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                                <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                                <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                                <span className="relative text-2xl"><FaFacebook /></span>
                            </a >
                        </div>
                        <div className="space-x-4">
                            <a href="https://www.fiverr.com/s/6Y3ZQQA" target="_blank" className="relative w-9 inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-gray-500 via-black to-gray-500 group-hover:opacity-100"></span>
                                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                                <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                                <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                                <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                                <span className="relative text-2xl"><TbBrandFiverr /></span>
                            </a >
                            <a href="https://www.upwork.com/freelancers/~018907ca57906be13c" target="_blank" className="relative w-9 inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-gray-500 via-black to-gray-500 group-hover:opacity-100"></span>
                                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                                <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                                <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                                <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                                <span className="relative text-2xl"><SiUpwork /></span>
                            </a >
                        </div>
                    </div>
                </div>
                <div className="p-5 lg:border-l-2 border-gray-400 text-center lg:text-start">
                    <h3 className="text-white text-2xl">Let’s work together!</h3>
                    <p>I design and code beautifully simple things, and I love what I do. Just simple like that!</p>
                    <form ref={form} onSubmit={sendEmail} className="mt-4">
                        <div className=" ">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-white">Your Name*</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="to_name" placeholder="Type your name" className=" text-white input input-bordered bg-gray-950 w-full" />
                                </label>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-white">Email*</span>
                                </label>
                                <label className="input-group">
                                    <input type="email" name="from_name" placeholder="Your email" className="input text-white  input-bordered font-sans bg-gray-950 w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-white">Description*</span>
                                </label>
                                <label className="input-group">
                                    <textarea name="message" placeholder="Description" rows="5" className="border-2 p-2 rounded-md bg-gray-950 text-white w-full"></textarea>
                                </label>
                            </div>
                        </div>

                        <button className="relative w-full inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-gray-500 via-black to-gray-500 group-hover:opacity-100"></span>
                            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                            <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                            <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                            <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                            <span className="relative flex gap-2 items-center">Sent <IoMdSend /></span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contacts;