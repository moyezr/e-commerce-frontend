import { getAuth } from "@clerk/nextjs/server";

export default async function testHandler(req, res) {

    try {

    console.log(user);

    return res.json(user);
    } catch (error) {
        console.log("TEST ERROR", error)

        return res.json({ message: "error" });
    }
  
}