import { useState } from 'react'
import CartProduct from './components/cartProduct'   // 👈 import component

function App() {
  const [cart, setCart] = useState([])

  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item])
    console.log('Cart:', item)
  }

  return (
    <>
      {/* GỌI COMPONENT CART PRODUCT */}
      <CartProduct onAddToCart={handleAddToCart} />

      {/* HIỂN THỊ CART (test nhanh) */}

    </>
  )
}

export default App
