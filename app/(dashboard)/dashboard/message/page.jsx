import React from 'react';
import connectDB from "@/config/database";
import {currentUser} from "@clerk/nextjs/server";
import Profile from "@/models/profile";
import ApplyJob from "@/models/applyJob";

const MessagePage = async () => {
    await connectDB();
    const {id} = await currentUser();

    const profileData = await Profile.findOne({
        clerkId: id
    }).select("_id");

    const listJobsdata = await ApplyJob.find({
        profile: profileData._id
    }).populate("ListJobs").lean();

    return (
        <>
            <h1 className="text-3xl font-bold underline text-info">List Message Apply Jobs</h1>
            {listJobsdata.map((item) => (
            <div className="card shadow-xl bg-info my-3">
                    <div className="chat chat-start">
                        <div className="chat-header">
                            <span className="font-bold text-2xl mr-3">{item.ListJobs.title}</span>
                            {item.status == "interview" ? (<div className="badge badge-primary">Interview</div>) : item.status == "pending" ? (<div className="badge badge-warning">Pending</div>) : (<div className="badge badge-error">Cancel</div>)}
                        </div>
                        <div className="chat-bubble mt-3 whitespace-pre-line bg-white text-black">{item.message ? item.message : "Belum ada pesan"}</div>
                    </div>
            </div>
            ))}
        </>
    );
};

export default MessagePage;