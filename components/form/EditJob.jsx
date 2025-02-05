"use client"

import SelectList from "@/components/form/SelectList";
import SelectOption from "@/components/form/SelectOption";
import {JOB_TYPE} from "@/utils/constant";
import InputToggle from "@/components/form/InputToggle";
import InputField from "@/components/form/InputField";
import TextAreaField from "@/components/form/TextAreaField";
import BtnSubmit from "@/components/form/BtnSubmit";
import {useFormState} from "react-dom";
import {jobUpdate} from "@/actions/job";
import {toast} from "react-toastify";

const EditJob = ({category, job}) => {
    const [state, action] = useFormState(jobUpdate, job._id);

    if(state.error){
        toast.error(state.error);
    }
    return (
        <form action={action}>
            <InputField name="title" label="Job Title" type="text" placeholder="Input Job Here" defaultValue={job.title}/>
            {state?.errors?.title && (<p className="text-error">{state.errors.title}</p>)}
            <InputField name="salary" label="Salary" type="number" placeholder="Input Salary" defaultValue={job.salary}/>
            {state?.errors?.salary && (<p className="text-error">{state.errors.salary}</p>)}
            <SelectList name="category" label="Category" list={category} defaultValue={job.category}/>
            {state?.errors?.category && (<p className="text-error">{state.errors.category}</p>)}
            <SelectOption name="jobType" label="Job" list={Object.values(JOB_TYPE)} defaultValue={job.jobType}/>
            {state?.errors?.jobType && (<p className="text-error">{state.errors.jobType}</p>)}
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                <div>
                    <InputToggle name="isPublish" label="Publish" defaultCheck={job.isPublish}/>
                    {state?.errors?.isPublish && (<p className="text-error">{state.errors.isPublish}</p>)}
                </div>
                <div>
                    <InputToggle name="remote" label="Remote" defaultCheck={job.remote}/>
                    {state?.errors?.remote && (<p className="text-error">{state.errors.remote}</p>)}
                </div>
            </div>
            <TextAreaField name="requirements" label="Requirements" placeholder="Input Detail Requirements" defaultValue={job.requirements}/>
            {state?.errors?.requirements && (<p className="text-error">{state.errors.requirements}</p>)}
            <TextAreaField name="benefits" label="Benefits" placeholder="Input Detail Benefits" defaultValue={job.benefits}/>
            {state?.errors?.benefits && (<p className="text-error">{state.errors.benefits}</p>)}
            <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
                <div>
                    <InputField name="city" label="City" type="text" placeholder="Input City" defaultValue={job.city}/>
                    {state?.errors?.city && (<p className="text-error">{state.errors.city}</p>)}
                </div>
                <div>
                    <InputField name="state" label="State" type="text" placeholder="Input State" defaultValue={job.state}/>
                    {state?.errors?.state && (<p className="text-error">{state.errors.state}</p>)}
                </div>
            </div>
            <TextAreaField name="address" label="Address" placeholder="Input Address" defaultValue={job.address}/>
            {state?.errors?.address && (<p className="text-error">{state.errors.address}</p>)}
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                <div>
                    <InputField name="companyName" label="Company Name" type="text" placeholder="Input Company" defaultValue={job.companyName}/>
                    {state?.errors?.companyName && (<p className="text-error">{state.errors.companyName}</p>)}
                </div>
                <div>
                    <InputField name="contactPhone" label="Phone" type="text" placeholder="Input Phone" defaultValue={job.contactPhone}/>
                    {state?.errors?.contactPhone && (<p className="text-error">{state.errors.contactPhone}</p>)}
                </div>
                <div>
                    <InputField name="contactEmail" label="Email" type="email" placeholder="Input Email" defaultValue={job.contactEmail}/>
                    {state?.errors?.contactEmail && (<p className="text-error">{state.errors.contactEmail}</p>)}
                </div>
            </div>
            <BtnSubmit label="Update"/>
        </form>
    );
};

export default EditJob;