import { useCart } from '../../context/CartContext'
import './Cart.css'

const Cart = () => {
  const { cart, removeItem, clearCart } = useCart()

  const getTotal = () => {
    return cart
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2)
  }
}

export default Cart
