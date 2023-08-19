import { useDispatch } from "react-redux"
import PageTitle from "../components/PageTitle"
import Data from '../data/Data.json'

import { addToCart } from '../features/cart/cartSlice'
import { Link } from "react-router-dom"




const Shop = () => {

    const dispatch = useDispatch()

    const addToCartHandler = (product)=>{
        dispatch(addToCart(product))
    }


  return (
    <section>
      <PageTitle title={'Shop'}/>

          <div className="untree_co-section product-section before-footer-section">
              <div className="container">
                  <div className="row">

                    {
                        Data.products.map((product, i)=>{
                            const {id, name, image, currentPrice} = product
                            return(
                                <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0" key={i}>
                                    <a className="product-item">
                                        <img src={image} className="img-fluid product-thumbnail" />                                        
                                        <Link to={`/shop/${id}`}><h3 className="product-title">{name}</h3></Link>
                                        <strong className="product-price">$ {currentPrice}</strong>

                                        <span className="icon-cross" onClick={()=> addToCartHandler(product)}>
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
    </section>
  )
}

export default Shop
