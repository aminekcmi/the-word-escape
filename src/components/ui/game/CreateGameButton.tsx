"use client";

import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { api } from "../../../../convex/_generated/api";
import { useAuth } from "@clerk/nextjs";

export default function CreateGameButton() {
    const createNewGame = useMutation(api.game.insertGame);
    const router = useRouter();
    const {userId} = useAuth();
    
    const handleClick = async () => {
        try {
            if (!userId) {
                return;
            }

            const gameID = await createNewGame({ownerID: userId});

            router.push(`/game/${gameID}`)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <button onClick={() => handleClick()} className="bg-slate-700 hover:bg-slate-800 shadow-lg my-2 py-2 rounded-md w-8/12 font-bold text-slate-50 text-xs 5xs:text-sm hover:scale-105 transition-transform hover:cursor-pointer">Create new game</button>
    );
}