import { useCart } from '../../context/CartContext'
import './ProductItem.css'

const ProductItem = ({ product }) => {
  const { addItem } = useCart()

  return (
    <section className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price.toFixed(2)}</p>
      <button onClick={() => addItem(product)}>Add to Cart</button>
    </section>
  )
}

export default ProductItem
