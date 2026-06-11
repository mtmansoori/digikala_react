import { AiOutlineLeft } from "react-icons/ai";
import Cards from "./Cards";

const Incredible = () => {
    return (<div className="bg-[linear-gradient(225deg,#d22c4e_0%,#ee384e_100%)] h-fit  ">
        <div className="flex items-center ">
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
                        <AiOutlineLeft className="text-white " />
                    </button>
                </div>
            </div>
        </div>
       <Cards/>
    </div>);
}

export default Incredible;