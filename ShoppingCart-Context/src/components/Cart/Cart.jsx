import { useCart } from '../../context/CartContext'
import './Cart.css'

const Cart = () => {
  const { cart, removeItem, clearCart } = useCart()

  const getTotal = () => {
    return cart
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2)
  }

  if (cart.length === 0) {
    return (
      <section className="cart">
        <h2>Your Cart</h2>
        <p>Your cart is empty.</p>
      </section>
    )
  }
}

export default Cart
