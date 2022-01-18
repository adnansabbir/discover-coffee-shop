const TopCards = ({title, cardData, Card}) => {
    const cards = cardData.map((data, i) => (<Card key={i} props={data}/>))
    return (
        <div className="p-4 sm:pl-0 sm:pr-0 grid grid-cols-1 gap-4">
            <h1 className="text-3xl font-bold text-white">{title}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:lg:grid-cols-4 gap-4">
                {cards}
            </div>
        </div>
    )
}

export default TopCards;
