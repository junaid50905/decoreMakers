import PageTitle from "../components/PageTitle"
import Data from '../data/Data.json'
const Shop = () => {
  return (
    <section>
      <PageTitle title={'Shop'}/>

          <div className="untree_co-section product-section before-footer-section">
              <div className="container">
                  <div className="row">

                    {
                        Data.products.map((product, i)=>{
                            const {name, image, currentPrice} = product
                            return(
                                <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0" key={i}>
                                    <a className="product-item" href="cart.html">
                                        <img src={image} className="img-fluid product-thumbnail" />
                                        <h3 className="product-title">{name}</h3>
                                        <strong className="product-price">$ {currentPrice}</strong>

                                        <span className="icon-cross">
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