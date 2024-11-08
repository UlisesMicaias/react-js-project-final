import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { totalItems } = useCartContext();
    return <span>Carrito ({totalItems})</span>;
};

export default CartWidget;
