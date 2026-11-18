import { useState, type ReactNode } from "react";
import { AuthContext } from "./Authcontext";
import type { User } from "../interfaces/User";

export default function AuthProvider({children}:{children:ReactNode}){
  
  const[isAuthenticated,setisAuthenticated] = useState(false);
  const[user, setuser] = useState<User | null>(null);

  const login=(email:string, password:string):boolean=>{
    if(email === "admin@test.com" && password === "1234"){
      setuser({
        id:1,
        name:"admin",
        email,
        role:"admin"
      })
        
    }else if(email === "manager@test.com" && password === "1234"){
 setuser({
        id:2,
        name:"manager",
        email,
        role:"manager"
      })
    }else{
        return false;
    }
  setisAuthenticated(true);
        return true;
  }

  const logout =()=>{
    setisAuthenticated(false);
  }

  const loginwithSSO=(provider: string)=>{
    console.log("SSO Provider:", provider);
    setisAuthenticated(true);
  }

    return(
    <AuthContext.Provider value={{isAuthenticated,loginwithSSO,login,logout,user}}>
        {children}
    </AuthContext.Provider>
  )
}