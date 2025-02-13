import UserInfo from "@/components/dashboard/UserInfo";
import connectDB from "@/config/database";
import {auth} from "@clerk/nextjs/server";
import Profile from "@/models/profile";
import ApplyJob from "@/models/applyJob";
import UserStatus from "@/components/dashboard/UserStatus";
import Jobs from "@/models/job";
import ChartBar from "@/components/dashboard/ChartBar";

const DashboardPage = async () => {
    await connectDB();
    const {userId} = await auth();
    const profileData = await Profile.findOne({
        clerkId: userId
    }).select("_id");

    const pendingCount = await ApplyJob.countDocuments({
        profile: profileData._id,
        status: "pending"
    })

    const interviewCount = await ApplyJob.countDocuments({
        profile: profileData._id,
        status: "interview"
    })

    const cancelCount = await ApplyJob.countDocuments({
        profile: profileData._id,
        status: "cancel"
    })

    const objStatus = {
        pending: pendingCount,
        interview: interviewCount,
        cancel: cancelCount,
    }

    const chartApply = await Jobs.aggregate([
        {$match: {clerkId: userId}},
        {$lookup: {
            from: "applyjobs",
            localField: "_id",
            foreignField: "jobs",
            as: "applyDetails"
            }},
        {
            $unwind: "$applyDetails"
        },
        {
            $group: {
                _id: {jobTitle: "$title", status: "$applyDetails.status"},
                totalJob: {$sum: 1}
            }
        },
        {
            $sort: {
                "_id.jobTitle": 1,
                totalJob: -1,
            }
        }
    ]);

    const chartApplyRaw = JSON.parse(JSON.stringify(chartApply));

    return (
        <>
            <UserInfo/>
            <div className="grid grid-cols-3 gap-10 mt-5">
                <UserStatus title="Pending" bgColor="bg-warning" count={objStatus.pending}/>
                <UserStatus title="Interview" bgColor="bg-info" count={objStatus.interview}/>
                <UserStatus title="Cancel" bgColor="bg-error" count={objStatus.cancel}/>
            </div>
            <div className="my-2">
                <ChartBar jobApply={chartApplyRaw}/>
            </div>
        </>
    );
};

export default DashboardPage;