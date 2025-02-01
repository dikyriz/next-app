"use client"

import {categoryDelete} from "@/actions/category";
import {toast} from "react-toastify";

const BtnDeleteCategory = ({data}) => {
    const handleDelete = async () => {
        const confirmNow = window.confirm("Are you sure delete this?")
        if(!confirmNow){
            return;
        }
        await categoryDelete(data);
        toast.success("Delete successful");
    }
    return (
        <button className="btn btn-sm btn-error" onClick={handleDelete}>
            Delete
        </button>
    );
};

export default BtnDeleteCategory;