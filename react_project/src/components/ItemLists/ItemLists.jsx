import Item from "../Item/Item"
import ItemCount from "../ItemCount/ItemCount"

const ItemLists = ({data}) => {
    return(
        <div>
            {data?.map((prod)=> <Item key={prod.id} prod={prod}></Item>)}
        </div>
    )
}

export default ItemLists