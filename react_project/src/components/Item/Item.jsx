import ItemCountButton from "../ItemCount/ItemCountButton"
import { useNavigate } from "react-router-dom"

const Item = ({key, prod}) => {
    const navigate = useNavigate()

    return(
            <>
            <div key={key} style={{cursor:'pointer'}} onClick={()=> navigate(`/detail/${prod.id}`)}>{prod.title}</div>
            <ItemCountButton></ItemCountButton>
            </>

    )
}

export default Item


