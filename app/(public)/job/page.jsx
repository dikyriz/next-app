import React from 'react';
import connectDB from "@/config/database";
import Jobs from "@/models/job";
import CardJobs from "@/components/CardJobs";

const JobPage = async ({searchParams}) => {
    await connectDB();
    const search = searchParams.search || "";
    const data = await Jobs.find({isPublish: true, title: {$regex: search, $options: "i"}});

    return (
        <>
           <h1 className="text-3xl font-bold underline text-center">List Jobs</h1>
           <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5 my-5">
               {data.map((item) => (
                   <CardJobs job={JSON.parse(JSON.stringify(item))} url={`job/${item._id}`} key={item._id} />
               ))}
           </div>
        </>
    );
};

export default JobPage;