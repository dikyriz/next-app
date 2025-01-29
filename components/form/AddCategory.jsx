"use client"
import React from 'react';
import {categoryCreate} from "@/actions/category";
import {useFormState} from "react-dom";
import InputField from "@/components/form/InputField";
import TextAreaField from "@/components/form/TextAreaField";
import BtnSubmit from "@/components/form/BtnSubmit";

const AddCategory = () => {
    const [state, action] = useFormState(categoryCreate, undefined);
    return (
        <form action={action} className="mt-5">
            <InputField type="text" name="name" placeholder="Insert Category Name" label="Category Name"/>
            {state?.errors.name && ( <p className="text-error mt-2">{state.errors.name}</p>)}
            <TextAreaField name="description" label="Description Category" placeholder="Insert Category Description" />
            {state?.errors.description && ( <p className="text-error mt-2">{state.errors.description}</p>)}
            <BtnSubmit label="Create"/>
        </form>
    );
};

export default AddCategory;