const TopCards = ({title, cardData, card}) => {
    return (
        <div className="p-4 sm:pl-0 sm:pr-0 grid grid-cols-1 gap-4">
            <h1 className="text-3xl font-bold text-white">{title}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:lg:grid-cols-4 gap-4">
                {cardData.map(data => (card(data)))}
            </div>
        </div>
    )
}

export default TopCards;
