import canhga from '../assets/cartProduct/Canhga.jpg';
import goitom from '../assets/cartProduct/goitom.jpg';
import lathaichuacay from '../assets/cartProduct/Lathaichuacay.jpg';
import nemranchagio from '../assets/cartProduct/Nemranchagio.jpg';

const dishes = [
  { id: 1, name: 'Bamboo shoot, shrimp and meat salad', price: 10, image: goitom },
  { id: 2, name: 'Fried spring rolls', price: 8, image: nemranchagio },
  { id: 3, name: 'Grilled chicken wings with salt and chili', price: 14, image: canhga },
  { id: 4, name: 'Thai hot and sour hot pot', price: 25, image: lathaichuacay },
];

export default function CartProduct({ onAddToCart }) {
  const s = {
    title: { textAlign: 'center', fontSize: 40, color: 'rgb(252,119,3)', margin: '40px 0' },
    center: { display: 'flex', justifyContent: 'center' },
    menu: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0,1fr))',
      gap: 30,
      maxWidth: 1100,
      width: '100%',
      boxSizing: 'border-box',
    },
    card: {
      background: '#fff',
      border: '2px solid black',
      borderRadius: 16,
      padding: 20,                       // 🔼 tăng padding
      display: 'grid',
      gridTemplateColumns: '220px 1fr',  // 🔼 card rộng hơn
      gap: 30,
      alignItems: 'center',
      position: 'relative',
    },

    img: {
      width: 220,                        // 🔼 ảnh to hơn
      height: 220,
      objectFit: 'cover',
      borderRadius: 14,
    },
    info: { display: 'flex', flexDirection: 'column', gap: 10 },
    name: { fontSize: 18,color: 'black' },
    price: { fontSize: 16 },
    btnWrap: { position: 'absolute', right: 20, bottom: 20 },
    btn: {
      backgroundColor: 'rgb(252,119,3)',
      color: 'white',
      border: 'none',
      borderRadius: 20,
      padding: '7px 22px',
      cursor: 'pointer',
    },
  };

  return (
    <>
      <h1 style={s.title}>LIST OF DISHES</h1>

      <div style={s.center}>
        <div style={s.menu}>
          {dishes.map(item => (
            <div key={item.id} style={s.card}>
              <img src={item.image} alt={item.name} style={s.img} />

              <div style={s.info}>
                <div style={s.name}>{item.name}</div>
                <div style={s.price}>Price : ${item.price}</div>
              </div>

              <div style={s.btnWrap}>
                <button
                  style={s.btn}
                  onMouseOut={e => (e.target.style.backgroundColor = 'rgb(252,119,3)')}
                  onClick={() => onAddToCart?.(item)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
