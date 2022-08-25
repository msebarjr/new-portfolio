import About from "../../components/About/About";

import ContactArea from "../../components/ContactArea";
import Experience from "../../components/Experience/Experience";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/Navbar/Navbar";

// import ProjectSection from "../../components/ProjectSection/ProjectSection";
import Scrollbar from "../../components/scrollbar/scrollbar";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import Testimonial from "../../components/Testimonial/Testimonial";

const HomePage = () => {
    return (
        <>
            <Navbar hclass={"wpo-header-style-1"} topbarNone={"topbar-none"} />
            <Hero />
            <About />
            <ServiceSection />
            <Experience />
            <Testimonial />
            <ContactArea />
            <Footer />
            <Scrollbar />
        </>
    );
};
export default HomePage;
