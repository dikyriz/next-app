"use client"
import InputField from "@/components/form/InputField";
import TextAreaField from "@/components/form/TextAreaField";
import BtnSubmit from "@/components/form/BtnSubmit";
import {useFormState} from "react-dom";
import { profileUpdate} from "@/actions/profile";

const UpdateProfile = ({profile}) => {
    const [state, action] = useFormState(profileUpdate, profile._id);
    return (
        <form action={action} className="my-5">
            <InputField type="text" placeholder="input first name" name="firstName" label="First Name" defaultValue={profile.firstName}/>
            {state?.errors?.firstName && (<p className="text-error mt-2">{state.errors.firstName}</p>)}
            <InputField type="text" placeholder="input last name" name="lastName" label="Last Name" defaultValue={profile.lastName}/>
            {state?.errors?.lastName && (<p className="text-error mt-2">{state.errors.lastName}</p>)}
            <TextAreaField placeholder="input biodata" name="biodata" label="Biodata" defaultValue={profile.biodata}/>
            {state?.errors?.biodata && (<p className="text-error mt-2">{state.errors.biodata}</p>)}
            <InputField type="text" placeholder="input url portofolio" name="portofolio" label="Portofolio" defaultValue={profile.portofolio}/>
            {state?.errors?.portofolio && (<p className="text-error mt-2">{state.errors.portofolio}</p>)}
            <InputField type="text" placeholder="input url linkend" name="linkend" label="Linkend" defaultValue={profile.linkend}/>
            {state?.errors?.linkend && (<p className="text-error mt-2">{state.errors.linkend}</p>)}
            <BtnSubmit label="Update"/>
        </form>
    );
};

export default UpdateProfile;