const Card = ({ item, index, total }) => {
    const isFirstItem = index === 0;
    const isLastItem = index === total - 1;

    return (
        <div
            className={`
                card bg-base-100 p-2 w-40 h-65 shadow-sm rounded-none!
                ${isFirstItem ? "mr-3 rounded-r-xl! " : ""}
                ${isLastItem ? "ml-5 rounded-l-xl!" : ""}
            `}
        >
            <figure>
                <img
                    className="max-h-28.5 w-28.5  object-contain"
                    src={item.img}
                    alt={item.title}
                />
            </figure>

            <div className="card-body p-0 items-start">
                <h2 className="card-title pt-2 px-2 text-sm line-clamp-2">
                    {item.title}
                </h2>

                <div>
                    <div className="flex items-center justify-start gap-1 px-2 pt-1">
                        <div className="bg-red-600 text-white rounded-3xl px-2 p-1 items-center text-[11px] font-bold">
                            {item.discount}
                        </div>

                        <div className="line-through text-neutral-400 text-[11px]">
                            {item.oldPrice}
                        </div>
                    </div>

                    <div className="flex justify-start">
                        <div className="rounded-3xl px-2 p-1 items-center text-[16px] font-bold">
                            {item.newPrice}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;