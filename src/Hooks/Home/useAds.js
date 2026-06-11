import { useQuery } from "@tanstack/react-query";

const fetchAds = async () => {
    const data = await fetch("/db.json");

    if (!data.ok) {
        throw new Error("Failed to fetch ads data");
    }

    const res = await data.json();

    return res.ads;
}

export const useAds = () => {

    return useQuery({
        queryKey: ["ads"],
        queryFn: fetchAds,
    })
};