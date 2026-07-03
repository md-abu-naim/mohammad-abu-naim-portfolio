import About from "./About";
import Banner from "./Banner";
import Contacts from "./Contacts";
import Educations from "./Educations";
import Footer from "../../Components/Footer";
import Projects from "./Projects";
import Skills from "./Skills";
import { useEffect } from "react";
import Aos from "aos";

const Home = () => {

    useEffect(() => {
        Aos.init({
            once: false,
            duration: 1000,
            delay: 100,
            offset:100,
            easing: 'ease-in-out',
        })
    },[])
    return (
        <div>
            <Banner />
            <About />
            <Skills />
            <Educations />
            <Projects />
            <Contacts />
            <Footer />
        </div>
    );
};

export default Home;