
import { Link } from 'react-router-dom';
const InteriorService = () => {
  return (
      <div className="we-help-section">
          <div className="container">
              <div className="row justify-content-between">
                  <div className="col-lg-7 mb-5 mb-lg-0">
                      <div className="imgs-grid">
                          <div className="grid grid-1"><img src="/src/assets/images/interior service/img-grid-1.jpg" alt="Untree.co"/></div>
                          <div className="grid grid-2"><img src="/src/assets/images/interior service/img-grid-2.jpg" alt="Untree.co"/></div>
                          <div className="grid grid-3"><img src="/src/assets/images/interior service/img-grid-3.jpg" alt="Untree.co"/></div>
                      </div>
                  </div>
                  <div className="col-lg-5 ps-lg-5">
                      <h2 className="section-title mb-4">We Help You Make Modern Interior Design</h2>
                      <p>Empowering you with our expertise in contemporary interior design, we transform spaces into modern havens that reflect your unique style and vision, turning houses into homes</p>

                      <ul className="list-unstyled custom-list my-4">
                          <li>Expertise in Contemporary Design</li>
                          <li>Personalized Space Transformation</li>
                          <li>Unique Style and Vision Reflection</li>
                          <li>Creating Modern, Inviting Homes</li>
                      </ul>
                      <p><Link to={'/shop'} className="btn">Explore</Link></p>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default InteriorService
