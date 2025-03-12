import {useFetch} from '../../customHooks/useFetch';
import { useParams } from 'react-router-dom';

const ItemDetail =  ()=>{
    const { productID } = useParams()

    const { data, loading, error} =  useFetch(`https://fakestoreapi.com/products/${productID}`)
    console.log(data);
    

    return(
        <div>{data.title}</div>
    )
}

export default ItemDetail