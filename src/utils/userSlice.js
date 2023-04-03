import {createSlice} from '@reduxjs/toolkit'
const userSlice = createSlice({
    name: 'user',
    initialState:{
        user:{
            name: "",
            phone: "",
            email: "",
            linkedin: "",
            currdesignation: "",
            relocate: "",
            skills: "",
            degree: "",
            institute: "",
            prevComp: "",
            timePrevComp: "",
            desgPrevComp: "",
            achievements: "",
            certifications: "",
          }
    },
    reducers:{
        updateUser : (state, action)=>{
            state.user=action.payload
        }
    }
})

export default userSlice.reducer;
export const {updateUser} = userSlice.actions;