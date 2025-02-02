"use client"

import SelectList from "@/components/form/SelectList";
import SelectOption from "@/components/form/SelectOption";
import {JOB_TYPE} from "@/utils/constant";
import InputToggle from "@/components/form/InputToggle";
import InputField from "@/components/form/InputField";
import TextAreaField from "@/components/form/TextAreaField";
import BtnSubmit from "@/components/form/BtnSubmit";
import {useFormState} from "react-dom";
import {jobCreate} from "@/actions/job";

const AddJob = ({category}) => {
    const [state, action] = useFormState(jobCreate, undefined);
    return (
        <form action={action}>
            <InputField name="title" label="Job Title" type="text" placeholder="Input Job Here"/>
            {state?.errors?.title && (<p className="text-error">{state.errors.title}</p>)}
            <InputField name="salary" label="Salary" type="number" placeholder="Input Salary" defaultValue="0"/>
            {state?.errors?.salary && (<p className="text-error">{state.errors.salary}</p>)}
            <SelectList name="category" label="Category" list={category}/>
            {state?.errors?.category && (<p className="text-error">{state.errors.category}</p>)}
            <SelectOption name="jobType" label="Job" list={Object.values(JOB_TYPE)}/>
            {state?.errors?.jobType && (<p className="text-error">{state.errors.jobType}</p>)}
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                <div>
                <InputToggle name="isPublish" label="Publish"/>
                    {state?.errors?.isPublish && (<p className="text-error">{state.errors.isPublish}</p>)}
                </div>
                <div>
                <InputToggle name="remote" label="Remote"/>
                    {state?.errors?.remote && (<p className="text-error">{state.errors.remote}</p>)}
                </div>
            </div>
            <TextAreaField name="requirements" label="Requirements" placeholder="Input Detail Requirements"/>
            {state?.errors?.requirements && (<p className="text-error">{state.errors.requirements}</p>)}
            <TextAreaField name="benefits" label="Benefits" placeholder="Input Detail Benefits"/>
            {state?.errors?.benefits && (<p className="text-error">{state.errors.benefits}</p>)}
            <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
                <div>
                <InputField name="city" label="City" type="text" placeholder="Input City"/>
                    {state?.errors?.city && (<p className="text-error">{state.errors.city}</p>)}
                </div>
                <div>
                <InputField name="state" label="State" type="text" placeholder="Input State"/>
                    {state?.errors?.state && (<p className="text-error">{state.errors.state}</p>)}
                </div>
            </div>
            <TextAreaField name="address" label="Address" placeholder="Input Address"/>
            {state?.errors?.address && (<p className="text-error">{state.errors.address}</p>)}
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                <div>
                <InputField name="companyName" label="Company Name" type="text" placeholder="Input Company"/>
                    {state?.errors?.companyName && (<p className="text-error">{state.errors.companyName}</p>)}
                </div>
                <div>
                <InputField name="contactPhone" label="Phone" type="text" placeholder="Input Phone"/>
                    {state?.errors?.contactPhone && (<p className="text-error">{state.errors.contactPhone}</p>)}
                </div>
                <div>
                <InputField name="contactEmail" label="Email" type="email" placeholder="Input Email"/>
                    {state?.errors?.contactEmail && (<p className="text-error">{state.errors.contactEmail}</p>)}
                </div>
            </div>
            <BtnSubmit label="Create"/>
        </form>
    );
};

export default AddJob;