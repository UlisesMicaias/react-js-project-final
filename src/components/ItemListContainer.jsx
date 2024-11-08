// src/components/ItemListContainer/ItemListContainer.js
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

const ItemListContainer = ({ categoryId }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
        const querySnapshot = await getDocs(collection(db, "items"));
        const itemsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setItems(itemsData);
        };

        fetchItems();
    }, [categoryId]);

    return <ItemList items={items} />;
};

export default ItemListContainer;
