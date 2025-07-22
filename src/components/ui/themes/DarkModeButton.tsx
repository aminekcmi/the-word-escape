"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

export default function DarkModeButton() {
    const {theme, setTheme} = useTheme();
    const [isMounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!isMounted) {
        return;
    }

    return (
        <button className="hover:scale-105 transition-transform hover:cursor-pointer" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            {theme === 'light' ? <IoMdMoon className="text-slate-950" size={24} /> : <IoMdSunny className="text-slate-50" size={24} />}
        </button>
    );
}