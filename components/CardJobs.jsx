"use client"
import { CiMoneyBill, CiLocationOn, CiTimer, CiUser } from "react-icons/ci";
import Link from "next/link";
import {priceFormat} from "@/utils";
import {useUser} from "@clerk/nextjs"
import {jobDelete} from "@/actions/job";
import {toast} from "react-toastify";

const CardJobs = ({job, url}) => {
    const { jobType, title, salary, remote, address, city, state, companyName, clerkId, _id } = job;
    const {user} = useUser();

    const handleDelete = async () => {
        const confirm = window.confirm("are you sure delete this?")
        if(!confirm){
            return;
        }
        await jobDelete(_id);
        toast.success("delete success");
    }
    return (
        <div className="card glass min-h-full shadow-xl">
            <div className="card-body">
                <Link href={url}>
                <h2 className="card-title text-primary">{title}</h2>
                </Link>
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
                {user && user.id == clerkId ? (
                    <div className="flex justify-end gap-2 mb-2">
                    <Link className="btn btn-info text-white btn-sm" href={`/dashboard/jobs/${_id}/edit`}>Edit</Link>
                    <button className="btn btn-sm btn-error  text-white" onClick={handleDelete}>Delete</button>
                    <Link className="btn btn-accent text-white btn-sm" href={`/dashboard/jobs/${_id}/applicant`}><CiUser/> Applicant</Link>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default CardJobs;