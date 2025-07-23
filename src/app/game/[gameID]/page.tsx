"use client";

import { useAuth } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { useParams, useRouter } from "next/navigation";
import { api } from "../../../../convex/_generated/api";
import LoadingUI from "@/components/ui/layout/LoadingUI";
import { useEffect } from "react";

export default function Game() {
    const { gameID } = useParams();
    const { userId } = useAuth();
    const router = useRouter();
    const game = useQuery(
        api.game.getGame,
        typeof gameID === "string" ? { gameID } : "skip"
    );

    useEffect(() => {
        if (game === null || (game && (!userId || !game.players.includes(userId)))) {
            router.replace("/");
        }
    }, [game, userId, router]);

    if (game === undefined) return <LoadingUI />;

    if (game === null || !userId || !game.players.includes(userId)) return null;
    
    return (
        <>
            Hello, {userId}, you joined the game {game._id}
        </>
    );
}