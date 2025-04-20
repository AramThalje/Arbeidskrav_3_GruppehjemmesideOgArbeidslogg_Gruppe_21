
import { data } from "react-router-dom";
import { client } from "../client";

export async function fetchAllMembers(){
    const data = await client.fetch(`
        *[_type == "members"]{memberName, _id, email, "Image": image.asset -> url}
        `);
        return data;
}
console.log(data)