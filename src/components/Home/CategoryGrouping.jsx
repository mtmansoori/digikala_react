
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategoryGrouping } from "../../redux/CategoryGrouping/Action";

export default function CategoryGrouping() {
    const { categoryGrouping, loading, error } = useSelector(
        (state) => state.useCategoryGrouping
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoryGrouping());
    }, [dispatch]);

    if (loading) return <div className="text-center py-10">درحال بارگزاری...</div>;
    if (error) return <div className="text-center py-10 text-red-600">خطا: {error}</div>;


    return (
        <div className='mt-5'>
            <div className='w-full p-3'>
                دسته بندی ها
            </div>
            <div className="overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden">
                <div className="grid grid-rows-2 grid-flow-col gap-2 w-max">
                    {categoryGrouping?.map((item, index) => (
                        <div key={index} className="w-24 flex flex-col gap-2 items-center">
                            <img src={item.img} alt={item.title} className="w-18 items-center" />
                            <h2 className="text-[11px] font-light px-2 text-center">{item.title}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}