import { AiOutlineLeft } from "react-icons/ai";
import Cards from "/src/components/Cards/Cards"

const Incredible = ({ items = [], loading = false, className = "" }) => {
    return (
        <div className={`${className} h-fit`}>
            <div className="flex items-center">
                <div className="flex w-full items-center justify-between pt-5 px-4 pb-3">
                    <div className="flex gap-2">
                        <img
                            src="/assets/images/AmazingOffers/percentage-ic.svg"
                            className="w-6 h-6"
                            alt=""
                        />
                        <img
                            src="/assets/images/AmazingOffers/amazing-ic.svg"
                            className="w-fit h-5"
                            alt=""
                        />
                    </div>

                    <div className="flex items-center gap-1">
                        <span className="relative text-white text-[12px] font-bold -top-0.5 text-sm leading-none">
                            همه
                        </span>
                        <button type="button">
                            <AiOutlineLeft className="text-white" />
                        </button>
                    </div>
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center py-8">
                    <span className="loading loading-dots loading-md text-white"></span>
                </div>
            ) : (
                <Cards items={items} />
            )}
        </div>
    );
};

export default Incredible;