"use client"
import BtnSubmit from "@/components/form/BtnSubmit";
import InputField from "@/components/form/InputField";

const InputSearching = () => {
    return (
        <form>
            <InputField type="text" placeholder="Input Search Job Title" name="search"/>
            <BtnSubmit label="Search"/>
        </form>
    );
};

export default InputSearching;