export default function Cart() {
    const cartItems = [
        { name: "Grilled chicken wings with salt and chili", price: 14 },
        { name: "Thai hot and sour hot pot", price: 25 },
        { name: "Fried spring rolls", price: 8 }
    ];

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div
            style={{
                width: '1500px',
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                borderRadius: '4px'
            }}
        >
            {/* Header */}
            <div
                style={{
                    backgroundColor: '#FFD9E0',
                    padding: '20px 30px'
                }}
            >
                <h1
                    style={{
                        fontSize: '28px',
                        fontWeight: 'bold',
                        margin: 0,
                        fontFamily: 'Georgia, serif',
                        color: '#000'
                    }}
                >
                    Your Cart
                </h1>
            </div>

            {/* Content */}
            <div
                style={{
                    padding: '40px 60px',
                    minHeight: '300px'
                }}
            >
                <ul
                    style={{
                        listStyle: 'disc',
                        paddingLeft: '20px',
                        marginBottom: '40px'
                    }}
                >
                    {cartItems.map((item, index) => (
                        <li
                            key={index}
                            style={{
                                fontSize: '18px',
                                fontFamily: 'Georgia, serif',
                                marginBottom: '20px',
                                color: '#000'
                            }}
                        >
                            {item.name} - ${item.price}
                        </li>
                    ))}
                </ul>

                <div
                    style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        fontFamily: 'Georgia, serif',
                        color: '#000'
                    }}
                >
                    Total: {total}$
                </div>
            </div>
        </div>
    );
}
