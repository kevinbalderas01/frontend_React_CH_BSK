import {useFetch} from '../../customHooks/useFetch';
import { useNavigate } from 'react-router-dom';
import ItemLists from '../ItemLists/ItemLists';
const ItemListContainer = () =>{
    const navigate = useNavigate()
    const { data, loading, error} = useFetch('https://fakestoreapi.com/products')

    

    
    if (loading) {
        return <div>Cargando...</div>
    }

    if (error) {
        return <div>ERROR</div>
    }

    return (
        <>
            <ItemLists data={data}></ItemLists>
        </>
        
    )
}

export default ItemListContainer