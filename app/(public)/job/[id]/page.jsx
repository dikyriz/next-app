import React from 'react';
import connectDB from "@/config/database";
import Jobs from "@/models/job";
import DetailJob from "@/components/DetailJob";
import DetailCompany from "@/components/DetailCompany";

const DetailJobPage = async ({params}) => {
    await connectDB();
    const data = await Jobs.findById(params.id);
    return (
        <div className="grid md:grid-cols-6 gap-5 mb-5">
            <div className="md:col-span-4">
                <DetailJob job={JSON.parse(JSON.stringify(data))}/>
            </div>
            <div className="md:col-span-2">
                <DetailCompany job={JSON.parse(JSON.stringify(data))}/>
            </div>
        </div>
    );
};

export default DetailJobPage;