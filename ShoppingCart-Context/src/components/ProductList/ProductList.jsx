import { products } from '../../data/productsData'
import ProductItem from '../ProductItem/ProductItem'
import './ProductList.css'

const ProductList = () => {
  return (
    <section className="product-list">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductList
