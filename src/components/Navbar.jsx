
import { useSelector } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'



import cartImg from '../assets/images/websites outlook/cart.svg'
const Navbar = () => {
    const { subTotal, cart} = useSelector(state=> state.cartInfo)

  return (
      <>
          <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark sticky-top">

              <div className="container">
                  <Link to={'/'} className="navbar-brand"><h2>DecorMakers<span className='text-success'>.</span></h2></Link>

                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarsFurni">
                      <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                          <li className='nav-item'><NavLink className="nav-link" to={'/'}>Home</NavLink></li>
                          <li className='nav-item'><NavLink className="nav-link" to={'/shop'}>Shop</NavLink></li>
                          <li className='nav-item'><NavLink className="nav-link" to={'/blogs'}>Blogs</NavLink></li>
                          <li className='nav-item'><NavLink className="nav-link" to={'/contact-us'}>Contact</NavLink></li>
                      </ul>
                      <ul className='mt-3' style={{ listStyle: 'none' }}>
                          <li>
                              {/* <Link to={'/cart'} className="fa-solid fa-cart-shopping" style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}><sup className='bg-warning rounded-circle' style={{ padding: '2px 5px', color: 'black', fontSize: '8px !important' }}>{totalQuantity}</sup></Link> */}
                              <Link to={'/cart'} style={{ textDecoration: 'none' }}>
                                  <img src={cartImg} alt="" />
                                  <sup className='bg-warning rounded-circle' style={{ padding: '1px 4px', fontWeight: 'bold' }}>{cart.length}</sup>
                                  <span style={{ color: 'white', marginLeft: '10px' }}>[ $ {subTotal.toFixed(2)} ]</span>
                              </Link>
                          </li>
                      </ul>
                  </div>
              </div>

          </nav>
      </>
  )
}

export default Navbar
