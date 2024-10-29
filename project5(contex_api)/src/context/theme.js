import { createContext, useContext } from "react";


export const Theme = createContext({
    themeMode: "light",
    setDark: () => {},
    setLight: () => {},
})


export const Themecontext = Theme.Provider;



