
const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-6">
            <div className=" flex items-center justify-center">
                <h1 className=" text-center p-2 text-2xl text- font-bold">MOHAMMAD ABU NAIM</h1>
            </div>
            <footer className="footer footer-center">
                <aside className="flex text-gray-400">
                    © {new Date().getFullYear()} Designed & Developed by <a href="https://www.linkedin.com/in/md-abu-naim/" target="_blank" className="text-blue-500 underline">Mohammad Abu Naim</a>
                </aside>
            </footer>
        </footer>
    );
};

export default Footer;