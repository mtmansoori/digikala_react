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
        <div className='w-full flex flex-col items-center'>
            <div className='w-full px-2 mt-5 mb-3 text-neutral-900 text-[15px] font-bold'>دسته بندی ها</div>
            <div className='w-full bg-neutral-000 flex-wrap gap-4 flex overflow-x-auto overflow-y-hidden hide-scrollbar'></div>
        </div>
    );
}