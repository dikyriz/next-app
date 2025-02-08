"use client"
import {CiLocationOn, CiMoneyBill, CiTimer} from "react-icons/ci";
import {priceFormat} from "@/utils";
import {useUser} from "@clerk/nextjs";
import {applyJobCreate} from "@/actions/applyJob";
import {toast} from "react-toastify";

const DetailJob = ({job}) => {
    const { jobType, title, salary, remote, requirements, benefits, address, city, state, companyName, clerkId } = job;

    const {user} = useUser();

    const handleApply = async () => {
        const applyData = await applyJobCreate(job._id)
        if(applyData.error){
            toast.error(applyData.error);
        } else {
            toast.success(applyData.message);
        }
    }
    return (
        <div className="card glass min-h-full shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-primary">{title}</h2>
                <p className="font-bold">{companyName}</p>
                <div className="badge badge-info rounded-xl badge-xl">
                    {remote ? "Remote" : "Onsite"}
                </div>
                <ul className="menu">
                    <li>
                        <span><CiLocationOn/> {address}, {city}, {state}</span>
                    </li>
                    <li>
                        <span><CiMoneyBill/> {priceFormat(salary)}</span>
                    </li>
                    <li>
                        <span><CiTimer/> {jobType}</span>
                    </li>
                </ul>
                { user && clerkId != user.id ? (
                        <button className="btn btn-primary text-white rounded-full" onClick={handleApply}>Apply</button>
                ) : (
                    <p className="bg-base-200 text-center text-lg font-bold p-5">Please Login for Apply this Job</p>
                )}

                <h1 className="card-title text-info my-2">Requirements</h1>
                <p className="whitespace-pre-line">{requirements}</p>
                <h1 className="card-title text-info my-2">Benefits</h1>
                <p className="whitespace-pre-line">{benefits}</p>
            </div>
        </div>
    );
};

export default DetailJob;