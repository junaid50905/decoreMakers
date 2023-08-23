import axios from "axios";
import {  useState } from "react"
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { registration } from "../features/user/userSlice";



const Register = () => {
    // user data
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    // errors
    const [emailError, SetEmailError] = useState(null)
    const [nameError, setNameError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)

    // loading
    const [loading, setLoading] = useState(false)

    // navigate
    const navigate = useNavigate()

    // dispatch
    const dispatch = useDispatch()





    // registration Form Submit Handler
    const registrationFormSubmitHandler = async (e)=>{
        e.preventDefault()

        try {
            setLoading(true)
            const response = await axios.post('http://127.0.0.1:8000/api/register', { email, name, password })
            if (response.data.status === 'success') {

                // setLoading
                setLoading(false)

                // Navigate first and then show a toast notification
                navigate('/user-profile');
                setEmail('');
                setName('');
                setPassword('');

                // set user token in the redux
                dispatch(registration(response.data.token))

            

                toast(response.data.message, {
                    autoClose: 3000, // Auto close the notification after 3 seconds
                });

            }
        } catch (error) {
            if (error.response && error.response.data.errors) {
                const errors = error.response.data.errors
                SetEmailError(errors.email ? errors.email[0] : null)
                setNameError(errors.name ? errors.name[0] : null)
                setPasswordError(errors.password ? errors.password[0] : null)
            }
            // setLoading
            setLoading(false)
        }

    }

    
    
  return (
    <>
          <section className="container p-5 w-100 h-100 d-flex justify-content-center align-items-center">
              <div className="form py-2 px-3">
                  <form onSubmit={registrationFormSubmitHandler}>
                      <div className="mb-3">
                          <label htmlFor="email" className="form-label">Email</label>
                          <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" id="email" />
                          {emailError && (<p className="text-danger">{emailError}</p>)}
                      </div>
                      <div className="mb-3">
                          <label htmlFor="name" className="form-label">Name</label>
                          <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} className="form-control" id="name" />
                          {nameError && (<p className="text-danger">{nameError}</p>)}
                      </div>
                      <div className="mb-3">
                          <label htmlFor="password" className="form-label">Password</label>
                          <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" id="password" />
                          {passwordError && (<p className="text-danger">{passwordError}</p>)}
                      </div>
                      <button type="submit" className="btn btn-dark">{loading ? "Submitting..." : "Submit"}</button>
                  </form>
              </div>
          </section>
    </>
  )
}

export default Register
