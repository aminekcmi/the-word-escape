import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    games: defineTable({
        owner: v.string(),
        players: v.array(v.string()),
        code: v.string(),
        createdAt: v.number(),
    }).index("by_code", ["code"]),
});
