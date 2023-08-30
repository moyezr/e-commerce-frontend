import { clerkClient, useUser } from "@clerk/nextjs";
import { isWindowDefined } from "swr/_internal";

export default async function wishlist(req, res) {
    try {
         let data = await req.body; 

         const { userId, wishlistedIds } = data;


         console.log("USER id", userId)

            const response = await clerkClient.users.updateUserMetadata(userId, {
                unsafeMetadata: {
                  wishlistedIds:wishlistedIds
                }
              })

      return res.json({ response, satus: 200 });
    } catch (error) {
        console.log("WISHLIST SERVER ERROR", error);
        res.status(400).end();
    }
   
}