import { AiOutlineArrowLeft } from "react-icons/ai";
const MoreCard = () => {
    return (<div className="card mr-0 flex h-57 w-40 items-center justify-center rounded-none! rounded-l-xl! bg-base-100 p-2 shadow-sm">
        <button
            type="button"
            className="flex flex-col items-center gap-3 text-neutral-700"
        >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700 text-neutral-700">
                <AiOutlineArrowLeft className="text-2xl" />
            </span>

            <span className="text-sm text-neutral-700 font-bold">
                مشاهده همه
            </span>
        </button>
    </div>);
}

export default MoreCard;