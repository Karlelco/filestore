import { v } from "convex/values";
import { query, mutation, action } from "./_generated/server";



//adding a new file to convex
export const newFile = mutation({
  args: {
    directory: v.string(),
    filename: v.string(),
    storageId: v.id("_storage"),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("files", {
      directory: args.directory,
      filename: args.filename,
      storageId: args.storageId,
      
    });
  },
});

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});


//fetch files by directoryId
export const getFilesByDirectoryId = query({
  args: {
    directoryI: v.string(),
  },
  handler: async (ctx, args) => {
    const user = args.directoryI;
    return await ctx.db.query("files").withIndex("directoryId",(q) => q.eq("directory", user)).collect();
  },
});