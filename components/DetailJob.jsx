import React from 'react';
import {CiLocationOn, CiMoneyBill, CiTimer} from "react-icons/ci";
import {priceFormat} from "@/utils";

const DetailJob = ({job}) => {
    const { jobType, title, salary, remote, requirements, benefits, address, city, state, companyName } = job;
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
                <button className="btn btn-primary text-white rounded-full">Apply</button>
                <h1 className="card-title text-info my-2">Requirements</h1>
                <p className="whitespace-pre-line">{requirements}</p>
                <h1 className="card-title text-info my-2">Benefits</h1>
                <p className="whitespace-pre-line">{benefits}</p>
            </div>
        </div>
    );
};

export default DetailJob;