import Image from "next/image";
import Link from "next/link";

const CardMechanic = ({props}) => {
    const {id, name, picture, tags, contacts} = props
    const tagElements = tags.map((tag, i) => (
        <span key={`${i}-${tag}`} className="p-1 bg-blue-400 rounded-md text-white text-xs">{tag}</span>
    ))
    const contactElements = contacts.map((contacts, i) => (
        <span key={`${contacts.contact}`} className="text-xs">{contacts.contact}</span>
    ))
    return (
        <Link href={`/mechanic/${id}`} key={id}>
            <div className="border rounded p-2 grid grid-cols-2 bg-white bg-opacity-80 gap-2 hover:shadow-md hover:scale-105 cursor-pointer duration-300">
                <Image src={picture} layout="responsive" height={30} width={25} alt={name}/>
                <div className="flex flex-col">
                    <h1 className="font-bold">{name}</h1>
                    <div className="flex gap-1">{tagElements}</div>
                    <div className="flex flex-col gap-1 mt-2">
                        <h1 className='font-bold'>Contacts</h1>
                        {contactElements}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CardMechanic;
