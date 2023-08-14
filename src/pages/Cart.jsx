import PageTitle from "../components/PageTitle"

const Cart = () => {
    return (
        <section>
            <PageTitle title={'Cart'} />

            <div className="container">
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
                            <tr>
                                <td className="product-thumbnail">
                                    <img src="/src/assets/images/websites outlook/product-2.png" alt="Image" className="img-fluid" />
                                </td>
                                <td className="product-name">
                                    <h2 className="h5 text-black">Product 1</h2>
                                </td>
                                <td>$49.00</td>
                                <td>
                                    <button className="btn" style={{ fontSize: '25px' }}>-</button>
                                    <input type="text" value={1} style={{ width: '40px', textAlign: 'center', border: '1px solid #bdc3c7', margin: '0 10px' }}/>
                                    <button className="btn" style={{ fontSize: '25px' }}>+</button>
                                </td>
                                <td>$49.00</td>
                                <td><a href="#" className="btn btn-black btn-sm">X</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="row mb-5">
                    <div className="col-md-6">
                        <div className="row mb-5">
                            <div className="col-md-6 mb-3 mb-md-0">
                                <button className="btn btn-black btn-sm btn-block">Update Cart</button>
                            </div>
                            <div className="col-md-6">
                                <button className="btn btn-outline-black btn-sm btn-block">Continue Shopping</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <label className="text-black h4">Coupon</label>
                                <p>Enter your coupon code if you have one.</p>
                            </div>
                            <div className="col-md-8 mb-3 mb-md-0">
                                <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code"/>
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
                                        <span className="text-black">Subtotal</span>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <strong className="text-black">$230.00</strong>
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col-md-6">
                                        <span className="text-black">Total</span>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <strong className="text-black">$230.00</strong>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <button className="btn btn-black btn-lg py-3 btn-block">Proceed To Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Cart
