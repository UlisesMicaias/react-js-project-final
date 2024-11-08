// src/components/ItemDetail/ItemDetail.js
import { useState } from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';

const ItemDetail = ({ item }) => {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        // Lógica para añadir al carrito
        console.log(`Añadido ${quantity} de ${item.name} al carrito`);
    };

    return (
        <div>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <p>Precio: ${item.price}</p>
        <ItemQuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <button onClick={handleAddToCart}>Añadir al carrito</button>
        </div>
    );
};

export default ItemDetail;
