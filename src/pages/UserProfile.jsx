import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setUserData } from "../features/user/userSlice"
 

const UserProfile = () => {
    // token
    const token = useSelector(state => state.user.token)
    const {name, email} = useSelector(state => state.user.userData)
    // dispatch
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/user', {
                    headers: {
                        Authorization: `Bearer ${token}` // Attach the token in the Authorization header
                    }
                });
                dispatch(setUserData({
                    name: response.data.user.name,
                    email: response.data.user.email,
                }))
            } catch (error) {
                console.log(error);
            }
        };

        if (token) {
            fetchUserData();
        }
    }, [token]);
    

  return (
    <div className="container py-5">
      <h2>User profile</h2>
      <p>{email}</p>
      <p>{name}</p>
    </div>
  )
}

export default UserProfile
