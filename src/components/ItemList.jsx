// src/components/ItemList/ItemList.js
import { Link } from 'react-router-dom';

const ItemList = ({ items }) => (
    <div>
        {items.map(item => (
        <div key={item.id}>
            <Link to={`/item/${item.id}`}>
            <h2>{item.name}</h2>
            <p>Precio: ${item.price}</p>
            </Link>
        </div>
        ))}
    </div>
);

export default ItemList;

