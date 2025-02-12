import UserInfo from "@/components/dashboard/UserInfo";
import connectDB from "@/config/database";
import {auth} from "@clerk/nextjs/server";
import Profile from "@/models/profile";
import ApplyJob from "@/models/applyJob";
import UserStatus from "@/components/dashboard/UserStatus";

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

    console.info(objStatus);

    return (
        <>
            <UserInfo/>
            <div className="grid grid-cols-3 gap-10 mt-5">
                <UserStatus title="Pending" bgColor="bg-warning" count={objStatus.pending}/>
                <UserStatus title="Interview" bgColor="bg-info" count={objStatus.interview}/>
                <UserStatus title="Cancel" bgColor="bg-error" count={objStatus.cancel}/>
            </div>
        </>
    );
};

export default DashboardPage;