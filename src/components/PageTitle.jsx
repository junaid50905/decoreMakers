
const PageTitle = ({title}) => {
  return (
      <div className="hero">
          <div className="container">
              <div className="row justify-content-between">
                  <div className="col-lg-5">
                      <div className="intro-excerpt">
                          <h1>{title}</h1>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default PageTitle
