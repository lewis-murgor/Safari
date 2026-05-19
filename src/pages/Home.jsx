import Hero from "../components/Hero.jsx"
import CTA from "../components/CTA.jsx"
import FeaturedSafaris from "../components/FeaturedSafaris.jsx"
import WhyChooseUs from "../components/WhyChooseUs.jsx"


function Home() {
    return (
        <div>
            <Hero />
            <FeaturedSafaris />
            <WhyChooseUs />
            <CTA />
        </div>
    );
}

export default Home