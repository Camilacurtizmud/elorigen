const Item = ({ description, name}) => {
    return (
       <div>
            <h3>Item</h3>   
            <h2>{name}</h2>
            <p>{ description}</p>
        </div>
    )
}
export default Item