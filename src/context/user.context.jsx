import { createContext, useState , useEffect} from "react";

import { createUserDocumentFromAuth, onAuthStateChangedListener} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: "",
  setCurrentUser: ()=> null,
});

export const UserProvider = ({children})=>{
    
    const [currentUser, setCurrentUser] = useState(null)
    const value = {currentUser, setCurrentUser}

    useEffect(()=>{ // All that has to do with authentication 
        const unsubscribe= onAuthStateChangedListener((user)=>{
            console.log(user)
            if (user){
                createUserDocumentFromAuth(user)
            }

            setCurrentUser(user)
        })
    },[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
