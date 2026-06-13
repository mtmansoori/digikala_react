import { AiOutlineClose, AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategoryListModal } from "../../redux/CategoryListModal/Action"
const CategoryListModal = () => {
    const { categoryListModal, modalServices, loading, error } = useSelector((state) => state.useCategoryListModal)
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategoryListModal())
    }, [dispatch])
    

    return (
        <dialog id="my_modal_3" className="modal modal-bottom p-0"
            onCancel={(e) => {
                e.preventDefault();
                e.stopPropagation();
            }}
            onKeyDownCapture={(e) => {
                if (e.key === "Escape") {
                    e.preventDefault();
                    e.stopPropagation();
                }
            }}>
            <div className="modal-box  modal-slide-up h-screen max-h-screen w-screen max-w-none rounded-none p-0">
                <div className="sticky top-0 z-20 flex justify-between items-center bg-white py-3 px-5 text-2xl text-gray-800">
                    <span className="grow text-h5 text-neutral-600 font-bold text-[15px]">
                        خدمات دیجی‌کالا
                    </span>

                    <button
                        type="button"
                        onClick={() => document.getElementById("my_modal_3")?.close()}
                        className="btn btn-sm btn-circle btn-ghost"
                    >
                        <AiOutlineClose className="text-2xl" />
                    </button>

                    <span className="absolute bottom-0 left-6 right-6 h-px bg-neutral-200" />
                </div>

                <div className="grid grid-cols-3 gap-x-3 gap-y-4  px-6 py-10">
                    {categoryListModal.map((item, index) => (
                        <a
                            key={index}
                            href={item.url || item.link}
                            className="flex flex-col items-center gap-1"
                        >
                            <img
                                src={item.icon}
                                alt={item.text}
                                className="h-13 w-13 object-contain"
                            />

                            <span className="line-clamp-2 min-h-8 text-center font-bold text-[10px] mt-1 leading-2 text-neutral-600">
                                {item.text}
                            </span>
                        </a>
                    ))}
                </div>

                <h4 className="font-bold text-[12px] text-neutral-400 px-4">سرویس های گروه دیجی کالا</h4>

                <ul className="list bg-base-100 rounded-box ">
                    {
                        modalServices?.map((item, index) => {
                            return (

                                <li className="list-row py-3 px-5" key={index}>
                                    <div><img className="size-13 rounded-box" src={item.pic} /></div>
                                    <div className="list-col-grow">
                                        <div className="text-neutral-700 font-bold text-[13px]" >{item.title}</div>
                                        <div className="text-[11px] mt-1 font-semibold opacity-60">{item.text}</div>
                                    </div>
                                    <button className="btn btn-square btn-ghost">
                                        <AiOutlineArrowLeft className="text-2xl text-neutral-400" />
                                    </button>
                                    <span href={item.link} className="absolute bottom-0 left-6 right-6 h-px bg-neutral-100" />
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </dialog>
    );
}

export default CategoryListModal;