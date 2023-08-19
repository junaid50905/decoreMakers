import {  useDispatch, useSelector } from "react-redux"
import PageTitle from "../components/PageTitle"
import { removeFromCart, cartItemDecrementByOne, cartItemIncrementByOne } from "../features/cart/cartSlice"
import { Link } from "react-router-dom"

const Cart = () => {
    const cartProducts = useSelector(state => state.cartInfo.cart)
    const { subTotal, cart, totalQuantity } = useSelector(state => state.cartInfo)

    const dispatch = useDispatch()

    const removeFromCartHandler = (productId)=>{
        dispatch(removeFromCart(productId))
    }
    //cartItemDecrement
    const cartItemDecrement =(id)=>{
        dispatch(cartItemDecrementByOne(id))
    }
    //cartItemIncrement
    const cartItemIncrement = (id)=>{
        dispatch(cartItemIncrementByOne(id))
    }
    


    return (
        <section>
            <PageTitle title={'Cart'} />

            <div className="container">
                {
                    cartProducts.length > 0 ? (<div>
                        <div className="site-blocks-table mt-5" style={{ marginBottom: '10vh' }}>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className="product-thumbnail">Image</th>
                                        <th className="product-name">Product</th>
                                        <th className="product-price">Price</th>
                                        <th className="product-quantity">Quantity</th>
                                        <th className="product-total">Total</th>
                                        <th className="product-remove">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartProducts.map((cartProduct, i) => {
                                            const { id, image, currentPrice, name, quantity } = cartProduct
                                            return (
                                                <tr key={i}>
                                                    <td className="product-thumbnail">
                                                        <img src={image} alt="Image" className="img-fluid" />
                                                    </td>
                                                    <td className="product-name">
                                                        <h6 className="h6 text-black">{name}</h6>
                                                    </td>
                                                    <td>$ {currentPrice}</td>
                                                    <td>
                                                        <button className="btn" style={{ fontSize: '25px' }} onClick={() => cartItemDecrement(id)} disabled={quantity === 1}>-</button>
                                                        <span>{quantity}</span>
                                                        <button className="btn" style={{ fontSize: '25px' }} onClick={() => cartItemIncrement(id)}>+</button>
                                                    </td>
                                                    <td>${(quantity * currentPrice).toFixed(2)}</td>
                                                    <td><button className="btn btn-sm text-danger" onClick={() => removeFromCartHandler(id)}>X</button></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div className="row mb-5">
                            <div className="col-md-6">
                                <div className="row mb-5">
                                    <div className="col-md-6">
                                        <Link to={'/shop'} className="btn btn-outline-black btn-sm btn-block">Continue Shopping</Link>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label className="text-black h4">Coupon</label>
                                        <p>Enter your coupon code if you have one.</p>
                                    </div>
                                    <div className="col-md-8 mb-3 mb-md-0">
                                        <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code" />
                                    </div>
                                    <div className="col-md-4">
                                        <button className="btn btn-black">Apply Coupon</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 pl-5">
                                <div className="row justify-content-end">
                                    <div className="col-md-7">
                                        <div className="row">
                                            <div className="col-md-12 text-right border-bottom mb-5">
                                                <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <span className="text-black">Total Item</span>
                                            </div>
                                            <div className="col-md-6 text-right">
                                                <strong className="text-black">{cart.length}</strong>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <span className="text-black">Total Quantity</span>
                                            </div>
                                            <div className="col-md-6 text-right">
                                                <strong className="text-black">{totalQuantity}</strong>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <span className="text-black">Total</span>
                                            </div>
                                            <div className="col-md-6 text-right">
                                                <strong className="text-black">$ {subTotal.toFixed(2)}</strong>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <Link to={'/checkout'} className="btn btn-black btn-lg py-3 btn-block">Proceed To Checkout</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>) : (
                        <div className="d-flex justify-content-center align-items-center text-center mt-5">
                            <div>
                                <h2>Your Cart is Currently Empty</h2>
                                <p>Time to shop and fill your cart with amazing products! Start adding items now!</p>
                                <Link to={'/shop'} className="btn">Return to shop</Link>
                            </div>
                        </div>
                    )
                }
            </div>


        </section>
    )
}

export default Cart
