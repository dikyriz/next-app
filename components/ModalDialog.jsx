"use client"
import React, {useState} from "react"
import SelectOption from "@/components/form/SelectOption";
import TextAreaField from "@/components/form/TextAreaField";
import BtnSubmit from "@/components/form/BtnSubmit";
import {useFormState} from "react-dom";
import {applyJobUpdate} from "@/actions/applyJob";

const ModalDialog = ({isOpen, onClose, data, dataId}) => {
    const [state, action] = useFormState(applyJobUpdate, dataId);
    const listStatus = ["pending", "interview", "cancel"];
    if(!isOpen){
        return null;
    }

    return (
        <div className="modal modal-open">
            <div className="modal-box w-11/12 max-w-5xl">
                <h2 className="font-bold text-lg">Detail Pelamar</h2>
                <p className="py-4">{data.firstName} {data.lastName}</p>
                <p className="mt-2 text-base-content">{data.biodata}</p>
                <div className="flex w-full flex-col">
                    <div className="divider">Form Update Status</div>
                </div>
                <div className="mt-2">
                    <form action={action}>
                        <SelectOption label="Select Status" name="status" list={listStatus}/>
                        {state?.errors?.status && ( <p className="text-error mt-2">{state.errors.status}</p>)}
                        <TextAreaField label="Message" name="message" placeholder="Input Message"/>
                        {state?.errors?.message && ( <p className="text-error mt-2">{state.errors.message}</p>)}
                        <BtnSubmit label="Update"/>
                    </form>
                </div>
                <div className="modal-action">
                    <button className="btn btn-primary" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default ModalDialog;