import { ThemeContextType, ThemeProviderProps } from "@/types";
import React, { useContext, useState } from "react";

const ThemeContext = React.createContext<ThemeContextType>({
    isDarkTheme: false,
    toogleTheme: () => { },
});

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [isDarkTheme, setDarkTheme] = useState<boolean>(false);
    const toogleTheme = () => setDarkTheme((prev) => !prev);
    return (
        <ThemeContext.Provider value={{ isDarkTheme, toogleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
export default ThemeProvider;
