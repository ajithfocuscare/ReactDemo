import { createContext } from "react";

export interface ThemeContextType{
    theme :string,
    toggletheme:()=>void;
}

export const Themecontext = createContext<ThemeContextType | undefined>(undefined);