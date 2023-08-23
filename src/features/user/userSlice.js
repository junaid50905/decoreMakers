import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    token: null,
    isLoggedIn: false,
    userData: {
        name: null,
        email: null
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        registration(state, action) {
            state.token = action.payload
            state.isLoggedIn = true

        },
        setUserData(state, action) {
            state.userData = {
                name: action.payload.name,
                email: action.payload.email
            }
        },
        logout(state, ) {
            state.token = null
            state.isLoggedIn = false
            state.userData = {
                name: '',
                email: ''
            }
        }
    }
})

export default userSlice.reducer
export const { registration, setUserData, logout } = userSlice.actions