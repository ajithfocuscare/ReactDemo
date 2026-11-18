import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function ProtectedLayout(){
    return(
        <>
          <Header/>
          <div className="container-fluid">
            <Outlet/>
          </div>
        </>
    )
}