
const WhyUs = () => {
  return (
      <div className="why-choose-section">
          <div className="container">
              <div className="row justify-content-between">
                  <div className="col-lg-6">
                      <h2 className="section-title">Why We Stand Out</h2>
                      <p>We distinguish through unrivaled quality, impeccable service, and innovative designs. Experience the difference that sets us apart in every aspect of your journey with us</p>

                      <div className="row my-5">
                          <div className="col-6 col-md-6">
                              <div className="feature">
                                  <div className="icon">
                                      <img src={'/src/assets/images/why us/truck.svg'} alt="Image" className="imf-fluid"/>
                                  </div>
                                  <h3>Fast &amp; Free Shipping</h3>
                                  <p>Experience your first shopping delight with us, and enjoy the added bonus of free shipping on all orders!.</p>
                              </div>
                          </div>

                          <div className="col-6 col-md-6">
                              <div className="feature">
                                  <div className="icon">
                                      <img src={'/src/assets/images/why us/bag.svg'} alt="Image" className="imf-fluid"/>
                                  </div>
                                  <h3>Easy to Shop</h3>
                                  <p>Simplify your shopping experience with our user-friendly platform, making it effortless to find and purchase your desired items.</p>
                              </div>
                          </div>

                          <div className="col-6 col-md-6">
                              <div className="feature">
                                  <div className="icon">
                                      <img src={'/src/assets/images/why us/support.svg'} alt="Image" className="imf-fluid"/>
                                  </div>
                                  <h3>24/7 Support</h3>
                                  <p>Count on our 24/7 support to assist you at any time, ensuring a seamless shopping experience whenever you need.</p>
                              </div>
                          </div>

                          <div className="col-6 col-md-6">
                              <div className="feature">
                                  <div className="icon">
                                      <img src={'/src/assets/images/why us/return.svg'} alt="Image" className="imf-fluid"/>
                                  </div>
                                  <h3>Hassle Free Returns</h3>
                                  <p>Enjoy stress-free shopping knowing that hassle-free returns are available, making your satisfaction our top priority from start to finish.</p>
                              </div>
                          </div>

                      </div>
                  </div>

                  <div className="col-lg-5">
                      <div className="img-wrap">
                          <img src="/src/assets/images/why us/why-choose-us-img.jpg" alt="Image" className="img-fluid"/>
                      </div>
                  </div>

              </div>
          </div>
      </div>
  )
}

export default WhyUs
