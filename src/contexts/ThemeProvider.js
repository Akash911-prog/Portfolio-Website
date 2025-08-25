"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    // Initialize theme from localStorage / system
    useEffect(() => {
        const stored = localStorage.getItem("theme");
        if (stored) {
            setTheme(stored);
            document.documentElement.classList.toggle("dark", stored === "dark");
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const initial = prefersDark ? "dark" : "light";
            setTheme(initial);
            document.documentElement.classList.toggle("dark", initial === "dark");
        }
    }, []);

    // Update when theme changes
    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// Hook for components
export function useTheme() {
    return useContext(ThemeContext);
}
