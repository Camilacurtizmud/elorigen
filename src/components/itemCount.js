import { useState } from "react";

const ItemCount = ({ stock, initial }) => {
   
    const [count, setCount] = useState(initial);

    const addItem = () => {
        const newValue = count + 1;
        if (newValue < stock) {
            setCount(newValue);
        }
    };

    const quitItem = () => {
        const newValue = count - 1;
        if (newValue > initial) {
            setCount(newValue);
        }
    };

    const onAdd = () => {
        alert(`Agregaste ${count} productos`);
};
    return (
        <>
            <h1> Stock Carrito </h1>
            <div>
                <button OnClick={addItem}>+</button>
                <h3>{count}</h3>
                <button onClick={quitItem}>-</button>
            </div>
            <button onClick={onAdd}>Agregar al Carrito</button>
        </>
    );
};

export default ItemCount;
