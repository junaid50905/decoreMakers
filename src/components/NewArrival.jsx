import { useDispatch } from 'react-redux'
import Data from '../data/Data.json'
import { addToCart } from '../features/cart/cartSlice'

const NewArrival = () => {

    const dispatch = useDispatch()

    const addToCartHandler = (new_arrival) => {
        dispatch(addToCart(new_arrival))
    }

    return (
        <div className="product-section">
            <div className="container">
                <div className="row">

                    <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                        <h2 className="mb-4 section-title">New Styles, Fresh Vibes.</h2>
                        <p className="mb-4">Introducing our captivating new arrivals – a fusion of elegance and innovation. Elevate your space with trendsetting designs that redefine style. Discover today and embrace a world of contemporary living like never before.</p>
                        <p><a href="shop.html" className="btn">Explore</a></p>
                    </div>
                    {
                        Data.new_arrivals.map((new_arrival, i)=>{
                            const { name, currentPrice, image } = new_arrival
                            return(
                                <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0" key={i}>
                                    <a className="product-item">
                                        <img src={image} className="img-fluid product-thumbnail" />
                                        <h3 className="product-title">{name}</h3>
                                        <strong className="product-price">$ {currentPrice}</strong>

                                        <span className="icon-cross" onClick={() => addToCartHandler(new_arrival)}>
                                            <i className="fa-solid fa-plus text-white mt-2" style={{ fontSize: '20px' }}></i>
                                        </span>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default NewArrival
