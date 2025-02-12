"use client"
import {useState} from "react";
import ModalDialog from "@/components/ModalDialog";

const DialogButton = ({data, dataId}) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = (item) => {
        setSelectedItem(item);
        setIsOpen(true);
    }

    const handleCloseModal = () => {
        setSelectedItem(null);
        setIsOpen(false);
    }

    return (
        <>
            <button className="btn btn-info " onClick={() => handleOpenModal(data)}>Action</button>
            <ModalDialog isOpen={isOpen} data={data} onClose={handleCloseModal} dataId={dataId}/>
        </>
    );
};

export default DialogButton;