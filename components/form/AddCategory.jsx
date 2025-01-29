"use client"
import React from 'react';
import {categoryCreate} from "@/actions/category";
import {useFormState, useFormStatus} from "react-dom";

const AddCategory = () => {
    const [state, action] = useFormState(categoryCreate, undefined);
    const {pending} = useFormStatus();
    return (
        <form action={action} className="mt-5">
            <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" name="name" placeholder="Insert Category Name"/>
            </label>
            {state?.errors.name && ( <p className="text-error mt-2">{state.errors.name}</p>)}
            <button type="submit" className="btn btn-sm btn-block btn-primary mt-5" disabled={pending}>Create</button>
        </form>
    );
};

export default AddCategory;