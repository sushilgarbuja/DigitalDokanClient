import ProductFeatures from "../../sections/productFeatures"
import Footer from "../../globals/components/Footer"
import HeroSection from "../../globals/components/HeroSection"
import Navbar from "../../globals/components/Navbar"
import TestimonialSection from "../../sections/testimonialSection"
import WhyChooseUs from "../../sections/whyChoose"



function Home() {
    return (
        <>

            <Navbar />
            <HeroSection />
            <ProductFeatures />
            <WhyChooseUs />
            <TestimonialSection />

            <Footer />
        </>
    )
}

export default Home
