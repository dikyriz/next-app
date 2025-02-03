import React from 'react';
import connectDB from "@/config/database";
import { auth } from '@clerk/nextjs/server';
import Job from "@/models/job";
import Link from "next/link";
import CardJobs from "@/components/CardJobs";

const JobPage = async () => {
    await connectDB();
    const { userId } = await auth();
    const jobs = await Job.where('clerkId', userId);

    if(!jobs.length){
        return (
            <>
                <h1>Job not found, create now!</h1>
                <div className="flex my-2">
                    <Link href="/dashboard/jobs/create" className="btn btn-primary rounded-lg">Create Job</Link>
                </div>
            </>
        )
    }

    return (
        <>
            <h1 className="text-primary font-bold text-3xl">List Job</h1>
            <div className="flex my-2">
            <Link href="/dashboard/jobs/create" className="btn btn-primary rounded-lg">Create Job</Link>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3 my-2">
                {jobs.map((item) => (
                    <CardJobs job={JSON.parse(JSON.stringify(item))} url={`/dashboard/jobs/${item._id}`}/>
                ))}
            </div>
        </>
    );
};

export default JobPage;