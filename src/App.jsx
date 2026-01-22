import { useState } from 'react';
import CartProduct from './components/cartProduct';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);

  const s = {
    app: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#ffffff', // ✅ ĐỔI NỀN TRẮNG
      padding: 20,
      boxSizing: 'border-box',
    },
    content: { flex: 1 },
  };

  return (
    <div style={s.app}>
      <div style={s.content}>
        <CartProduct onAddToCart={item => setCart([...cart, item])} />
        <Cart cart={cart} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
