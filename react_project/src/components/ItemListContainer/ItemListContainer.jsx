import {useFetch} from '../../customHooks/useFetch';
import { useNavigate } from 'react-router-dom';

const ItemListContainer = () =>{
    const navigate = useNavigate()
    const { data, loading, error} = useFetch('https://fakestoreapi.com/products')

    console.log(data);
    console.log(loading);
    console.log(error);

    
    if (loading) {
        return <div>Cargando...</div>
    }

    if (error) {
        return <div>ERROR</div>
    }

    return (
        <>
            {data?.map((prod)=> <div key={prod.id} style={{cursor:'pointer'}} onClick={()=> navigate(`/detail/${prod.id}`)}>{prod.title}</div>)}
        </>
        
    )
}

export default ItemListContainer