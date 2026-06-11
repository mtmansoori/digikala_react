import { useQuery } from "@tanstack/react-query";

const fetchFastDelivery = async () =>{
        const data = await fetch("/db.json");

    if (!data.ok) {
        throw new Error("Failed to fetch ads data");
    }

    const res = await data.json();
    console.log(res);
    
    return res.fastDelivery;
}
export const useFastDelivery = () => {
    return useQuery({
        queryKey:["fastDelivery"],
        queryFn:fetchFastDelivery,
    });
};