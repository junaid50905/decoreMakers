
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Link, useNavigate } from 'react-router-dom'



import cartImg from '../assets/images/websites outlook/cart.svg'
import { logout } from '../features/user/userSlice'
import { toast } from 'react-toastify'
import axios from 'axios'
const Navbar = () => {
    const { subTotal, cart} = useSelector(state=> state.cartInfo)
    const { name } = useSelector(state => state.user.userData)
    const  isLoggedIn  = useSelector(state => state.user.isLoggedIn)
    const  token  = useSelector(state => state.user.token)

    // dispatch
    const dispatch = useDispatch()

    // navigate
    const navigate = useNavigate()

    // logoutHandler
    const logoutHandler = async ()=>{
        

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/logout', null, {
                headers: {
                    Authorization: `Bearer ${token}` // Attach the token in the Authorization header
                }
            });
            dispatch(logout()); 
            navigate('/'); 
            console.log(response.data.message);
            toast.success('Logged out successfully'); // Show a success toast notification
        } catch (error) {
            console.log(error);
            toast.error('An error occurred while logging out'); // Show an error toast notification
        }
        
    }

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
                          {
                            !isLoggedIn && (
                                <>
                                      <li className='nav-item'><NavLink className="nav-link" to={'/register'}>Register</NavLink></li>
                                      <li className='nav-item'><NavLink className="nav-link" to={'/login'}>Login</NavLink></li>
                                </>
                            )
                          }
                      </ul>
                      {/* user info navlink */}
                      {
                        isLoggedIn && (
                              <div className="dropdown">
                                  <span className="text-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      {name}
                                  </span>
                                  <ul className="dropdown-menu">
                                      <li><Link to={'/user-profile'} className="dropdown-item">User profile</Link></li>
                                      <li><button className="dropdown-item" onClick={logoutHandler}>Logout</button></li>
                                  </ul>
                              </div>
                        )
                      }
                      <ul className='mt-3' style={{ listStyle: 'none' }}>
                          <li>
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
