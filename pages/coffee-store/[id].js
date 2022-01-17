import {useRouter} from "next/router";

const CoffeeStore = () => {
    const {query} = useRouter()
    console.log(query)
    return <div>Coffee Store</div>
}

export default CoffeeStore;
