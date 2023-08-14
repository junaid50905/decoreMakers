
import { NavLink, Link } from 'react-router-dom'


const Navbar = () => {

  return (
      <>
          <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark">

              <div className="container">
                  <Link to={'/'} className="navbar-brand" href="index.html"><h2>DecorMakers<span className='text-success'>.</span></h2></Link>

                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarsFurni">
                      <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                          <li className='nav-item'><NavLink className="nav-link" to={'/'}>Home</NavLink></li>
                          <li className='nav-item'><NavLink className="nav-link" to={'/shop'}>Shop</NavLink></li>
                          <li className='nav-item'><NavLink className="nav-link" to={'/blogs'}>Blogs</NavLink></li>
                      </ul>
                      <ul className='mt-3' style={{ listStyle: 'none' }}>
                          <li>
                              <Link to={'/cart'} className="fa-solid fa-cart-shopping" style={{ color: 'white', fontSize: '20px', textDecoration: 'none' }}></Link><sup className='bg-warning px-1 rounded-circle' style={{ fontWeight: 'bold' }}>7</sup>
                            </li>
                      </ul>
                  </div>
              </div>

          </nav>
      </>
  )
}

export default Navbar
