// src/components/Checkout/Checkout.js
import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase';

const Checkout = () => {
    const [formData, setFormData] = useState({ name: '', surname: '', phone: '', email: '', confirmEmail: '' });
    const [emailMatch, setEmailMatch] = useState(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setEmailMatch(formData.email === formData.confirmEmail);
    };

    const handlePurchase = async (e) => {
        e.preventDefault();
        const order = {
        buyer: { ...formData },
        items: [], // Aquí debes agregar los items del carrito
        date: new Date(),
        status: 'generated'
        };
        const docRef = await addDoc(collection(db, "orders"), order);
        alert(`Compra realizada con éxito. ID de la orden: ${docRef.id}`);
    };

    return (
        <form onSubmit={handlePurchase}>
        <input type="text" name="name" onChange={handleInputChange} placeholder="Nombre" required />
        <input type="text" name="surname" onChange={handleInputChange} placeholder="Apellido" required />
        <input type="text" name="phone" onChange={handleInputChange} placeholder="Teléfono" required />
        <input type="email" name="email" onChange={handleInputChange} placeholder="Email" required />
        <input type="email" name="confirmEmail" onChange={handleInputChange} placeholder="Confirmar Email" required />
        <button type="submit" disabled={!emailMatch}>Realizar compra</button>
        </form>
    );
};

export default Checkout;

