
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="intro-excerpt">
                            <h1>Modern Interior <span className="d-block">Design Studio</span></h1>
                            <p className="mb-4">DecorMakers: Crafting modern living with curated furniture selections that blend artistry, craftsmanship, and personalized design.</p>
                            <p><Link to={'/shop'} className="btn btn-secondary me-2">Shop Now</Link></p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="hero-img-wrap">
                            <img src="/src/assets/images/websites outlook/couch.png" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
