"use client"
import InputField from "@/components/form/InputField";
import TextAreaField from "@/components/form/TextAreaField";
import BtnSubmit from "@/components/form/BtnSubmit";
import {useFormState} from "react-dom";
import {profileCreate} from "@/actions/profile";

const AddProfile = () => {
    const [state, action] = useFormState(profileCreate, undefined);
    return (
        <form action={action} className="my-5">
            <InputField type="text" placeholder="input first name" name="firstName" label="First Name"/>
            {state?.errors?.firstName && (<p className="text-error mt-2">{state.errors.firstName}</p>)}
            <InputField type="text" placeholder="input last name" name="lastName" label="Last Name"/>
            {state?.errors?.lastName && (<p className="text-error mt-2">{state.errors.lastName}</p>)}
            <TextAreaField placeholder="input biodata" name="biodata" label="Biodata"/>
            {state?.errors?.biodata && (<p className="text-error mt-2">{state.errors.biodata}</p>)}
            <InputField type="text" placeholder="input url portofolio" name="portofolio" label="Portofolio"/>
            {state?.errors?.portofolio && (<p className="text-error mt-2">{state.errors.portofolio}</p>)}
            <InputField type="text" placeholder="input url linkend" name="linkend" label="Linkend"/>
            {state?.errors?.linkend && (<p className="text-error mt-2">{state.errors.linkend}</p>)}
            <BtnSubmit label="Create"/>
        </form>
    );
};

export default AddProfile;