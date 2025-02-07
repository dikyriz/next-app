import React from 'react';
import connectDB from "@/config/database";
import {currentUser} from "@clerk/nextjs/server";
import Profile from "@/models/profile";
import UpdateProfile from "@/components/form/UpdateProfile";

const UpdateProfilePage = async () => {
    await connectDB();
    const user = await currentUser();
    const data = await Profile.findOne({clerkId: user.id});

    return (
        <>
            <h1 className="font-bold text-primary text-3xl">Update Profile</h1>
            <UpdateProfile profile={JSON.parse(JSON.stringify(data))}/>
        </>
    );
};

export default UpdateProfilePage;