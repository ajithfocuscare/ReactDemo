import { useContext } from "react";
import { Themecontext } from "./Themecontext";

export default function useTheme(){
   const context = useContext(Themecontext)

   if(!context){
    throw new Error("useTheme must be used inside ThemeProvider");
   }
   return context;
}