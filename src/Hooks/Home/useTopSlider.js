import { useEffect, useState } from 'react';
export const useTopSlider = () => {

    const [slider, setSlider] = useState([]);
    const fetchSlidedr = async () => {
        try {
            const data = await fetch("/db.json");
            const res = await data.json();
            setSlider(res.slider);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchSlidedr();
    }, []);

    return { slider };
};