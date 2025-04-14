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
      <section className="cart-empty">
        <h2>Your Cart</h2>
        <p>Your cart is empty.</p>
      </section>
    )
  }

  return (
    <section className="cart">
      <h2>Your Cart</h2>

      <ul>
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>
              <h4>{item.name}</h4>
              <p>
                ${item.price.toFixed(2)} × {item.quantity}
              </p>
            </div>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <footer className="cart-footer">
        <p>
          Total: <strong>${getTotal()}</strong>
        </p>
        <button className="clear-cart__button" onClick={clearCart}>
          Clear Cart
        </button>
      </footer>
    </section>
  )
}

export default Cart
