"use client"
import { createContext, ReactNode, useCallback, useContext, useState } from "react";

type Language = "hi" | "en";

type LanguageContextType = {
    language: Language,
    toggleLanguage: () => void
}

const languageContext = createContext<LanguageContextType>({
    language: "en",
    toggleLanguage: () => { }
});

export function LanguageProvider({ children }: { children: ReactNode }) {

    /*
    * true = light
    * false= dark
    */
    const [language, setlanguage] = useState<Language>("en");
    const toggleLanguage = useCallback(() => {
        setlanguage(prev => {
            if (prev == "en") {
                return "hi"
            } else return "en"
        })
    }, [])

    return <languageContext.Provider value={{ language, toggleLanguage }}>
        {children}
    </languageContext.Provider>

}

export function useLanguage() {
    const context = useContext(languageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}