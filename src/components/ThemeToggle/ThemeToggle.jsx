"use client";
import { useTheme } from "@/contexts/ThemeProvider";
import { useEffect, useState } from "react";
import './ThemeToggle.css'

export default function ThemeToggle({
    size = 24, //change this to change the icon size
}) {
    const { theme, setTheme } = useTheme();
    const [clientSize, setClientSize] = useState(size);
    console.log(size);

    useEffect(() => {
        setClientSize(size);
    }, [size]);

    return (
        <label
            htmlFor="theme-toggle"
            className="wrapper cursor-pointer"
            style={{ "--size": `${clientSize}px` }}
        >
            <input
                id="theme-toggle"
                className="hidden"
                type="checkbox"
                checked={theme === "light"}
                onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            />
            <div className="icon size-0.5" onClick={() => setTheme(theme === "light" ? "dark" : "light")} />
        </label>
    );
}
