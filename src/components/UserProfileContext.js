import React,{ createContext, useState } from "react";


export const UserProfileContext = createContext({
    firstName : "",
    lastName:"",
    email:"",
    address:"",
    zipcode :"",
    city : "",
    setUserProfileContext : info =>{}
})

const UserProfileContextProvider = ({children}) =>{
    const userProfileState = {
        firstName : "",
        lastName:"",
        email:"",
        address:"",
        zipcode :"",
        city : "",
        setUserProfileContext : info =>
        setUserProfile(prevState =>({
            ...prevState ,
            [Object.keys(info)] : Object.values(info)[0 ]
        }))
    }
    const [userProfile , setUserProfile] = useState(userProfileState) ; 
    return(
        <UserProfileContext.Provider value = {userProfile}>
        {children}
        </UserProfileContext.Provider>
    )
}

export default UserProfileContextProvider ;