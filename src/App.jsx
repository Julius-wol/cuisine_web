import { useState } from 'react';
import CartProduct from './components/cartProduct';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/header';

function App() {
  const [cart, setCart] = useState([]);

  const s = {
    app: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#ffffff',
      padding: 20,
      boxSizing: 'border-box',
    },
    content: { flex: 1 },
  };

  return (
    <div style={s.app}>
      <Header />
      <div style={s.content}>
        <CartProduct onAddToCart={item => setCart([...cart, item])} />
        <Cart cart={cart} />
      </div>
      <Footer />
    </div>
  );
}
export default App;
