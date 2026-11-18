import { createContext } from "react";
import type { User } from "../interfaces/User";

export interface AuthContextType{
    isAuthenticated : boolean,
    user: User | null;
    login:(email:string, password:string)=>boolean,
    loginwithSSO:(prvoider:string)=>void,
    logout:()=>void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)