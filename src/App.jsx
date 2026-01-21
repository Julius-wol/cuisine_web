import { useState } from 'react'
import CartProduct from './components/cartProduct'   // 👈 import component
import Cart from './components/Cart';
import Footer from './components/Footer';
import './App.css';

function App() {
   const [cart, setCart] = useState([])

  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item])
    console.log('Cart:', item)
  }

  return (
    <div className="app-container">
      {/* Main content */}
      <div className="app-content">
        <CartProduct onAddToCart={handleAddToCart} />
        <Cart />
      </div>
      <Footer />
    </div>
  );
}

export default App;
