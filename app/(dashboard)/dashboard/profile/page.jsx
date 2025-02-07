import React from 'react';
import connectDB from "@/config/database";
import {auth} from "@clerk/nextjs/server";
import Profile from "@/models/profile";
import Link from "next/link";
import {CiLinkedin} from "react-icons/ci"
import {MdSchool} from "react-icons/md"

const DetailProfile = async () => {
    await connectDB();
    const {userId} = await auth();
    const data = await Profile.findOne({clerkId: userId});
    return (
        <>
            {data ? (
                <div className="card bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold text-info">{data.firstName} {data.lastName}</h2>
                        <p className="whitespace-pre-line my-3">{data.biodata}</p>
                        <div className="flex">
                            <Link href={data.linkend} target="_blank">
                                <CiLinkedin className="w-9 h-9 text-blue-400"/>
                            </Link>
                            <Link href={data.portofolio} target="_blank">
                                <MdSchool className="w-9 h-9 text-blue-400"/>
                            </Link>
                        </div>
                        <div className="card-actions justify-end">
                            <Link href='/dashboard/profile/update' className="btn btn-info text-white rounded">Edit</Link>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <p className="text-lg">
                        Data belum ada, silahkan buat dulu <Link href="/dashboard/profile/create" className="btn btn-primary my-3 rounded-lg">Create Profile</Link>
                    </p>
                </>
            )}
        </>
    );
};

export default DetailProfile;