export default function Cart({ cart = [] }) {
  const s = {
    box: {
      background: 'rgb(252,119,3)',
      border : '1px solid white',
      padding: 30,
      marginTop: 40,
      
    },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
    item: { margin: '6px 0' },
  };

  return (
    <div style={s.box}>
      <div style={s.title}>Your Cart</div>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item, i) => (
        <div key={i} style={s.item}>
          {item.name} – ${item.price}
        </div>
      ))}
    </div>
  );
}
