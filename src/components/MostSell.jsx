import Data from '../data/Data.json'
const MostSell = () => {
  return (
      <div className="popular-product">
          <div className="container">
              <div className="row">
                {
                    Data.new_arrivals.map((new_arrival, i)=>{
                        const { name, description, image } = new_arrival
                        return(
                            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0" key={i}>
                                <div className="product-item-sm d-flex">
                                    <div className="thumbnail">
                                        <img src={image} alt="Image" className="img-fluid" />
                                    </div>
                                    <div className="pt-3">
                                        <h3>{name.toUpperCase()}</h3>
                                        <p>{description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                  
              </div>
          </div>
      </div>
  )
}

export default MostSell
