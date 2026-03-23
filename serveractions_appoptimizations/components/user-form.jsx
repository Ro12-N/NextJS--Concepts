import React from "react";
import { createUser } from "@/actions";

function UserForm() {
    // This is a server action that will be called when the form is submitted 
    // inline server actions are not recommended for production use, but they are useful for testing and prototyping
    // async function createUser(formData){
    //     "use server"
    //     const name = formData.get("name");
    //     console.log("creating user:", name);
    // }

    return (
        <div>
            <form action={createUser}>
                <input name="name" placeholder="name" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UserForm;