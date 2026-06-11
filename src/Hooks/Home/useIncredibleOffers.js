import { useEffect, useState } from "react";
export const useIncredibleOffers = () => {
        const [incredible, setIncredible] = useState([]);

    const fetchIndredible = async () => {
        try {
            const data = await fetch("/db.json");
            const res = await data.json();

            setIncredible(res.incredible);
        } catch (error) {
            console.log(error.message);

        }
    }

    useEffect(() => {
        fetchIndredible();
    }, []);

    return { incredible };
};