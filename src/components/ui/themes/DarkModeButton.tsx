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
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            {theme === 'light' ? <IoMdMoon size={24} /> : <IoMdSunny size={24} />}
        </button>
    );
}