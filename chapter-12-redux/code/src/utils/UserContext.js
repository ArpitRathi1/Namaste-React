// import createContext from react.
import {createContext} from "react";

// Now creating context using createContext function.
// This create context takes a object and in this object we can define our varibles.
const UserContext =  createContext({
    user : {
    name : "Arpit",
    email : "rathi844@gmail.com"
    }
})

export default UserContext;

// Now to use this data in any component of our app we can use a hook, useContext (We are using this in Header)