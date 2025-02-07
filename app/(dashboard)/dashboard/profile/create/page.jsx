import connectDB from "@/config/database";
import {currentUser} from "@clerk/nextjs/server";
import Profile from "@/models/profile";
import {redirect} from "next/navigation";
import AddProfile from "@/components/form/AddProfile";


const CreateProfile = async () => {
    await connectDB();
    const {id } = await currentUser();
    const data = await Profile.findOne({clerkId: id});

    if(data){
        redirect("/");
    }
    return (
        <>
            <AddProfile/>
        </>
    );
};

export default CreateProfile;