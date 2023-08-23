
const Login = () => {
  return (
      <section className="container p-5 w-100 h-100 d-flex justify-content-center align-items-center">
          <div className="form py-2 px-3">
              <form>
                  <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input type="password" name="password" className="form-control" id="password" />
                  </div>
                  <button type="submit" className="btn btn-dark">Submit</button>
              </form>
          </div>
      </section>
  )
}

export default Login
