import { useState, useEffect } from 'react'
import getProducts from '../services/handMadePromise';
import ItemList from './ItemList'
import ItemCount from "../itemCount";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts
            .then(res => {
                setProducts(res)
            })
        .catch(err => alert('Estamos ante un Problema', err))
    }, [])
    
    return (
        <>
            <h2>Item Container</h2>
            <h3> {greeting}</h3>
            <ItemCount stock={6} initial={1} />
            <ItemList products={products}/>
        </>
    ); 
};

export default ItemListContainer;