import Item from './Item'

const ItemList = ({ products }) => {
    console.log('Products', products)
    return (
        <div>
            {products.map(product => {
                return(
                    <Item
                        name={product.name}
                    description={product.description}
                        image={product.price}
                        
                    />
                    )
            })}
        </div>
    )
}

export default ItemList