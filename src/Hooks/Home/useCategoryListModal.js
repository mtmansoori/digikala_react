import { useEffect } from "react";
import { useState } from "react";

export const useCategoryListModal = () => {
    const [listModal, setListModal] = useState([]);
    const [modalServices, setModalServices] = useState([]);

    const fetchListModal = async () => {
        try {
            const data = await fetch("/db.json");
            const res = await data.json();
            setListModal(res.listModal);
        } catch (error) {
            console.log(error.message);
        }

    };

    const fetchModalServices = async () => {
        try {
            const data = await fetch("/db.json");
            const res = await data.json();
            setModalServices(res.modalService);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchListModal();
        fetchModalServices();
    }, []);
    return { listModal, modalServices };
};