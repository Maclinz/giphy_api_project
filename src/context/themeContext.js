import React, { useContext, useState } from "react";
import { themes } from "../styles/themes";


const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()


export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState(0)
    const selectedTheme = themes[theme]

    return (
        <ThemeContext.Provider value={selectedTheme}>
            <ThemeUpdateContext.Provider value={setTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}

export const useTheme = () =>{
    return useContext(ThemeContext)
}

export const useThemeUpdate = () =>{
    return useContext(ThemeUpdateContext)
}