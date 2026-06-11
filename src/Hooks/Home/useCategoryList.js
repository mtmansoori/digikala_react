import { useQuery } from "@tanstack/react-query";


const fetchCategoryListData = async () => {
    const data = await fetch("/db.json");

    if (!data.ok) {
        throw new Error("Failed to fetch ads data");
    }

    const res = await data.json();

    return res.list;
}
export const useCategoryList = () => {

    return useQuery({
        queryKey: ["category-list"],
        queryFn: fetchCategoryListData,
    });
};