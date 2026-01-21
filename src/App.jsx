import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#3a3a3a'
      }}
    >
      {/* Main content */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px 20px'
        }}
      >
        <Cart />
      </div>

      {/* Footer luôn chạm đáy */}
      <Footer />
    </div>
  );
}

export default App;
