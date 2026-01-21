import Cart from './components/Cart';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Main content */}
      <div className="app-content">
        <Cart />
      </div>

      {/* Footer luôn chạm đáy */}
      <Footer />
    </div>
  );
}

export default App;
