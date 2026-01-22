export default function Footer() {
  const s = {
    footer: {
      backgroundColor: 'rgb(252,119,3)',
      padding: '60px 20px',
      textAlign: 'center',
      marginTop: 60,
    },
    text: {
      fontSize: 16,
      margin: '10px 0',
      color: 'white',
    },
    bold: {
      fontSize: 16,
      margin: '10px 0',
      fontWeight: 'bold',
      color: 'white',
    },
  };

  return (
    <footer style={s.footer}>
      <p style={s.text}>Email: Vietnamesecuisine@gmail.com</p>
      <p style={s.text}>Address: 100 Phan Van Tri, Binh Thanh District, HCMC</p>
      <p style={s.bold}>© 2025 Vietnamesecuisine.com</p>
    </footer>
  );
}
