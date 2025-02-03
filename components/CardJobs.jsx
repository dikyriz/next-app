import React from 'react';
import { CiMoneyBill, CiLocationOn, CiTimer } from "react-icons/ci";
import Link from "next/link";
import {priceFormat} from "@/utils";

const CardJobs = ({job, url}) => {
    const { jobType, title, salary, remote, address, city, state, companyName } = job;
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
            </div>
        </div>
    );
};

export default CardJobs;