import Image from "next/image";

const CardMechanic = ({id, name, picture, tags}) => {
    const tagElements = tags.map((tag, i) => (
        <span key={`${i}-${tag}`} className="p-1 bg-blue-400 rounded-md text-white text-xs">{tag}</span>
    ))
    return (
        <div key={id} className="border rounded p-2 grid grid-cols-2 bg-white bg-opacity-80">
            <Image src={picture} layout="responsive" height={30} width={25} alt={name}/>
            <div className="flex flex-col">
                <h1 className="font-bold">{name}</h1>
                <div className="flex gap-1">{tagElements}</div>
            </div>
        </div>
    )
}

export default CardMechanic;
