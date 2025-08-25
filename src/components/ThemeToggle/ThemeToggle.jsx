"use client";
import { useTheme } from "@/contexts/ThemeProvider";
import './ThemeToggle.css'

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <label
            htmlFor="theme-toggle"
            className="wrapper flex items-center justify-center gap-2 cursor-pointer"
        >
            <input
                id="theme-toggle"
                className="hidden"
                type="checkbox"
                checked={theme === "dark"}
                onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            />
            <div className="icon" />
        </label>
    );
}
