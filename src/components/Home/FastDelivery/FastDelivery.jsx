import { AiFillInfoCircle, AiOutlineLeft } from "react-icons/ai";
import { useFastDelivery } from "../../../Hooks/Home/useFastDelivery";
import Card from "./Card";
import { useState } from "react";

const FastDelivery = () => {
    const { data: fastDelivery, isLoading } = useFastDelivery();
    const [hasAddress,setHasAddress] = useState(false);
    return (
        <div className="bg-[#fcf3eb] h-fit">
            <div className="flex items-center py-2 px-3">
                <div className="flex gap-2">
                    <img
                        src="/assets/images/FastDelivery/ic.svg"
                        className="w-6 h-6"
                        alt=""
                    />
                    <span className="text-neutral-800 text-[16px]">ارسال ۳ ساعته فروشنده</span>
                </div>
            </div>

            <div className="px-3">
                <div className="w-full rounded-2xl py-3 bg-orange-100">
                    <div className="flex flex-wrap px-4 gap-1 py-1 justify-start">
                        <AiFillInfoCircle className="text-[18px] text-amber-800" />
                        <div className="-top-1 text-[13px] leading-3.5 font-bold text-amber-950">
                            برای بررسی امکان ارسال، آدرس را انتخاب کنید.
                        </div>
                    </div>
                    <div className="justify-end flex gap-1 w-full px-4 py-1">
                        <div className="text-[12px] text-[#934c0e] font-bold leading-0.5" onClick={() => setHasAddress(!hasAddress)}>انتخاب آدرس</div>
                        <AiOutlineLeft className="text-[#934c0e] text-[10px]" />
                    </div>
                </div>
            </div>

            <div className="flex overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden px-3 gap-2 py-2">
                {isLoading ? (
                    <div>در حال بارگذاری...</div>
                ) : (
                    fastDelivery.map((item) => (
                        <Card key={item.id} item={item} disabled={hasAddress} />
                    ))
                )}
            </div>
        </div>
    );
}

export default FastDelivery;