import { useState, useEffect } from "react";

export const useCategoryNav = () => {
    const [services, setServices] = useState([]);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => setIsScrolled(window.scrollY > 60);

    const fetchServices = async () => {
        try {
            const data = await fetch("/db.json");
            const res = await data.json();
            setServices(res.services);
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleActiveService = (selectedIndex) => {
        setServices(prev =>
            prev.map((item, index) => ({ ...item, active: index === selectedIndex }))
        );
    };

    useEffect(() => {
        fetchServices();
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return { services, isScrolled, handleActiveService };
};