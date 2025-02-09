import React from 'react';
import connectDB from "@/config/database";
import ApplyJob from "@/models/applyJob";
import Link from "next/link";
import {CiLinkedin} from "react-icons/ci";
import {MdSchool} from "react-icons/md";

const ListApplicantPage = async ({params}) => {
    await connectDB();

    const applyJobData = await ApplyJob.find({
        jobs: params.id,
        status: "pending"
    }).populate("ListPelamar").lean();

    const data = JSON.parse(JSON.stringify(applyJobData));
    console.info(data);
    return (
        <>
            <h1 className="text-center my-5 font-bold text-3xl text-info underline">List Applicant</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
                {data.map((item) => (
                    <div className="card bg-base-100 shadow-2xl">
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold text-info">{item.ListPelamar.firstName} {item.ListPelamar.lastName}</h2>
                            <p className="whitespace-pre-line my-3">{item.ListPelamar.biodata.substring(0, 200)} ...</p>
                            <div className="flex">
                                <Link href={item.ListPelamar.linkend} target="_blank">
                                    <CiLinkedin className="w-9 h-9 text-blue-400"/>
                                </Link>
                                <Link href={item.ListPelamar.portofolio} target="_blank">
                                    <MdSchool className="w-9 h-9 text-blue-400"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ListApplicantPage;