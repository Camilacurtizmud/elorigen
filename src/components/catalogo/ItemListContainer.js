import ItemCount from "../itemCount";

const ItemListContainer = ({ greeting}) => {
    return (
        <>
            <h2></h2>
            <h3> {greeting}</h3>
            <ItemCount stock={6} initial={1} />
        </>
    );
    
};
    
export default ItemListContainer;