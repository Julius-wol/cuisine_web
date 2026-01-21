import canhga from '../assets/cartProduct/Canhga.jpg';
import goitom from '../assets/cartProduct/goitom.jpg';
import lathaichuacay from '../assets/cartProduct/Lathaichuacay.jpg';
import nemranchagio from '../assets/cartProduct/Nemranchagio.jpg';

const dishes = [
  {
    id: 1,
    name: 'Bamboo shoot, shrimp and meat salad',
    price: 10,
    image: goitom,
  },
  {
    id: 2,
    name: 'Fried spring rolls',
    price: 8,
    image: nemranchagio,
  },
  {
    id: 3,
    name: 'Grilled chicken wings with salt and chili',
    price: 14,
    image: canhga,
  },
  {
    id: 4,
    name: 'Thai hot and sour hot pot',
    price: 25,
    image: lathaichuacay,
  },
];

export default function CartProduct() {
  const styles = {
    page: {
      width: '100%',
    },

    title: {
      textAlign: 'center',
      fontSize: 40,
      color: 'rgb(252, 119, 3)',
      margin: '40px 0',
    },

    center: {
      display: 'flex',
      justifyContent: 'center',
    },

    menu: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 30,
      width: '100%',
      maxWidth: 1100,
      padding: '0 20px 40px',
    },

    food: {
      border: '1px solid #ddd',
      backgroundColor: '#fff',
      display: 'grid',
      gridTemplateColumns: '150px 1fr',
      gap: 20,
      alignItems: 'center',
      position: 'relative',
      padding: 20,
      borderRadius: 12,
    },

    image: {
      width: 150,
      height: 150,
      objectFit: 'cover',
      borderRadius: 12,
    },

    info: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
    },

    name: {
      fontSize: 18,
      fontWeight: 'bold',
    },

    price: {
      fontSize: 16,
    },

    buttonWrap: {
      position: 'absolute',
      right: 20,
      bottom: 20,
    },

    button: {
      backgroundColor: 'rgb(252, 119, 3)',
      color: '#fff',
      border: 'none',
      borderRadius: 20,
      padding: '8px 22px',
      fontSize: 14,
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>LIST OF DISHES</h1>

      <div style={styles.center}>
        <div style={styles.menu}>
          {dishes.map((item) => (
            <div key={item.id} style={styles.food}>
              <img
                src={item.image}
                alt={item.name}
                style={styles.image}
              />
              <div style={styles.info}>
                <div style={styles.name}>{item.name}</div>
                <div style={styles.price}>Price : ${item.price}</div>
              </div>

              <div style={styles.buttonWrap}>
                <button style={styles.button}>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
