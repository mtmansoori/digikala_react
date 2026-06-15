const Card = ({ item }) => {
    const hasDiscount = item.discount !== "0";

    return (
        <div className={`bg-base-100 rounded-2xl border-stone-200 border`} style={{ width: "138px" }}>
            <figure >
                <img
                    className="max-h-36 w-36 object-contain rounded-2xl"
                    src={item.img}
                    alt={item.title}
                />
            </figure>
            <div className="p-1">

                <div className="p-0 items-start">
                    <h2 className="pt-2 px-2 text-[13px] line-clamp-2">
                        {item.title}
                    </h2>

                    <div >
                        <div className="min-h-8 flex items-center justify-start gap-1 px-2 pt-1">
                            {hasDiscount && (
                                <>
                                    <div className="bg-red-600 text-white rounded-3xl px-2 p-1 text-[11px] font-bold">
                                        {item.discount}
                                    </div>
                                    <div className="line-through text-neutral-400 text-[11px]">
                                        {item.oldPrice}
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="flex justify-start">
                            <div className="px-2 p-1 text-[16px] font-bold">
                                {item.newPrice}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;