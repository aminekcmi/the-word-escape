import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { nanoid } from "nanoid";

export const insertGame = mutation({
    args: {ownerID: v.string() },
    handler: async (ctx, args) => {
        let code: string;
        let existing;

        do {
            code = nanoid(5);

            existing = await ctx.db
                .query("games")
                .withIndex("by_code", (q) => q.eq("code", code))
                .unique()
        } while(existing);

        const gameID = await ctx.db.insert("games", 
            {
                owner: args.ownerID,
                players: [args.ownerID],
                code,
                createdAt: Date.now()
            });

        return gameID;
    }
});

export const addPlayerToGame = mutation({
    args: {code: v.string(), player: v.string()},
    handler: async (ctx, args) => {
        const game = await ctx.db
            .query("games")
            .withIndex("by_code", q => q.eq("code", args.code))
            .unique();
        
        if (!game) {
            return null;
        }

        if (game.players.includes(args.player)) {
            return game._id;
        }

        const gameID = await ctx.db.patch(game._id, {players: [...game.players, args.player]});

        return gameID;
    }
});

export const getGame = query({
    args: { gameID: v.string() },
    handler: async (ctx, args) => {
        const id = await ctx.db.normalizeId("games", args.gameID);
        if (!id) return null;

        const game = await ctx.db.get(id);
        return game ?? null;
    },
});