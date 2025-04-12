"use client"
import { createContext, ReactNode, useCallback, useContext, useState } from "react";

type ThemeContextType = {
    theme: boolean;
    toggleTheme: () => void;
}

const themeContext = createContext<ThemeContextType>({
    theme: false,
    toggleTheme: () => { }
});

export function ThemeProvider({ children }: { children: ReactNode }) {

    /*
    * true = light
    * false= dark
    */
    const [theme, setTheme] = useState<boolean>(true);
    const toggleTheme = useCallback(() => { setTheme(prev => !prev) }, [])

    return <themeContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </themeContext.Provider>

}

export function useTheme() {
    const context = useContext(themeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}