import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Data from '../data/Data.json'


const Product = () => {
    const {id} = useParams()
    const [product, setProduct] = useState(null);
    

    useEffect(() => {
        const singleProduct = Data.products.find(item => item.id === parseInt(id))

        if (singleProduct) {
            setProduct(singleProduct)
        }


    }, [id]);
    
    
  return (
    <div className="container my-5">
        {
            product ? (<div>
                <div className="row">
                    <div className="col-md-4">
                          <img src={product.image} alt="" style={{height: '300px'}}/>
                    </div>
                    <div className="col-md-6">
                        <h3>{product.name}</h3>
                        <div>
                            <strong>Description: </strong>
                            <p>{product.description}</p>
                            <p><strong>Price: </strong>$ {product.currentPrice} /{product.quantity} piece</p>
                            <p><strong>Rating: </strong>{product.rating.rate} ({product.rating.count} people rated)</p>
                        </div>

                    </div>
                </div>
            </div>) : (<h2>No product found</h2>)
        }
    </div>
  )
}

export default Product
