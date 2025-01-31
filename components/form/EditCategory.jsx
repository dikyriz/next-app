"use client"
import React from 'react';
import {useFormState} from "react-dom";
import InputField from "@/components/form/InputField";
import TextAreaField from "@/components/form/TextAreaField";
import BtnSubmit from "@/components/form/BtnSubmit";
import {categoryUpdate} from "@/actions/category";

const EditCategory = ({category}) => {
    const id = category._id;
    const [state, action] = useFormState(categoryUpdate, id);
    return (
        <form action={action} className="mt-5">
            <InputField type="text" name="name" placeholder="Insert Category Name" label="Category Name" defaultValue={category.name}/>
            {state?.errors?.name && (<p className="text-error mt-2">{state.errors.name}</p>)}
            <TextAreaField name="description" label="Description Category" placeholder="Insert Category Description" defaultValue={category.description}/>
            {state?.errors?.description && (<p className="text-error mt-2">{state.errors.description}</p>)}
            <BtnSubmit label="Update"/>
        </form>
    );
};

export default EditCategory;