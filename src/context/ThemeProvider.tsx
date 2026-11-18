import { useState, type ReactNode } from "react";
import { Themecontext } from "./Themecontext";

export default function ThemeProvider({children}:{children:ReactNode}){
    
    const[theme, settheme] = useState("light");

    const toggletheme=()=>{
        settheme(prev => prev === "light"?"dark":"light")
    }
    
    return(
        <Themecontext.Provider value={{theme, toggletheme}}>
            {children}
        </Themecontext.Provider>
    )
}