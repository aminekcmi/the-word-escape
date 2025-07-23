"use client";

import { useAuth } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "../../../../convex/_generated/api";

export default function JoinGameButton() {
    const [codeInput, setCodeInput] = useState<string>("");
    const [notFoundMessage, setNotFoundMessage] = useState<string>("");
    const addPlayerToGame = useMutation(api.game.addPlayerToGame);
    const router = useRouter();
    const {userId} = useAuth();
    
    const handleClick = async () => {
        try {
            if (!userId) {
                return;
            }

            const gameID = await addPlayerToGame({code: codeInput, player: userId});

            if (!gameID) {
                setNotFoundMessage("Game not found!");
                return;
            }

            router.push(`/game/${gameID}`)
        } catch (error) {
            console.log(error);
        }
    }  

    return (
        <>
            <p className="my-2 text-slate-700 dark:text-slate-400 text-xs 5xs:text-sm">Or join here:</p>
            <input type="text" name="code" id="code" maxLength={5} value={codeInput} onChange={(e) => setCodeInput(e.target.value)} placeholder="Code..." className="bg-slate-100 dark:bg-slate-900 shadow-lg p-2 border-2 border-slate-300 dark:border-slate-700 rounded-lg w-8/12 text-slate-950 dark:text-slate-50 text-xs 5xs:text-sm" />
            <button onClick={() => handleClick()} className="bg-slate-700 hover:bg-slate-800 shadow-lg my-2 py-2 rounded-md w-8/12 font-bold text-slate-50 text-xs 5xs:text-sm hover:scale-105 transition-transform hover:cursor-pointer">Join game</button>
            <p className="my-2 font-bold text-red-600 text-xs 5xs:text-sm">{notFoundMessage}</p>
        </>
    );
}