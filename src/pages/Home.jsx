import Hero from "../components/Hero"
import InteriorService from "../components/InteriorService"
import NewArrival from "../components/NewArrival"
import MostSell from "../components/MostSell"
import WhyUs from "../components/WhyUs"
import RecentBlogs from "../components/RecentBlogs"

const Home = () => {
    return (
        <section>
            <Hero />
            <NewArrival />
            <WhyUs />
            <InteriorService />
            <MostSell />
            <RecentBlogs />
        </section>
    )
}

export default Home
