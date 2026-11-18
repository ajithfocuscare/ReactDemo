import { useState } from "react";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";

export default function Login(){

    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [error, seterror] = useState("");
    const [success,setsuccess] = useState("");

    const navigate = useNavigate();
    const {login, loginwithSSO} = useAuth();

    const handleSSOLogin =(provider:string)=>{
        loginwithSSO(provider);
         navigate("/dashboard");
    }

    const handleLogin=()=>{
        seterror("");
        setsuccess("");

        if(!email.trim() || !password.trim()){
            seterror("Please Enter email and password")
            return;
        }

        const result = login(email,password);

        if(result){
            setsuccess("Login successful!");
            navigate("dashboard")
        }else{
            seterror("Invalid Credentisla..")
        }
    }

    return(
        <div className="container d-flex align-items-center 
        justify-content-center">    

            <div className="d-flex flex-column">
                <h1>Welcome Back!...</h1>

                <Input label="User Email" type="text" value={email} placeholder="Enter an Email"
                onChange={(e)=>setemail(e.target.value)}/>

                <Input label="Enter Password" type="password" value={password}
                placeholder="Enter a password" onChange={(e)=>setpassword(e.target.value)}/>

                {error && 
                <div className="text-danger">
                    {error}</div>}

                    {
                        success && 
                        <div className="text-success">
                            {success}
                        </div>
                    }
                <button className="btn btn-primary mt-3" 
                onClick={handleLogin}>Login</button>

                <button className="btn btn-primary mt-3" 
                onClick={()=>handleSSOLogin("Google")}>
                    Continue with Google
                </button>

                <button className="btn btn-primary mt-3" 
                onClick={()=>handleSSOLogin("Microsoft")}>
                    Continue with Microsoft
                </button>
            </div>
        </div>
    )
}