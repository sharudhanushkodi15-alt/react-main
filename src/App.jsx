
import { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Classic T-Shirt",
      price: 499,
      category: "Fashion",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    },
    {
      id: 2,
      name: "Running Shoes",
      price: 1299,
      category: "Shoes",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 1999,
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    },
    {
      id: 4,
      name: "Hand Bag",
      price: 899,
      category: "Fashion",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
    },
    {
      id: 5,
      name: "Headphones",
      price: 1499,
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      id: 6,
      name: "Sneakers",
      price: 1099,
      category: "Shoes",
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
    },
  ];

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <nav className="navbar">
        <h2>ShopEase 🛍️</h2>
        <div>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#cart">Cart ({totalItems})</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <h1>Welcome to ShopEase</h1>
        <p>Discover your favourite products at the best prices.</p>
        <a href="#products" className="shop-btn">
          Shop Now
        </a>
      </section>

      <section className="products-section" id="products">
        <h2>Our Products</h2>

        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />

              <div className="product-info">
                <p className="category">{product.category}</p>
                <h3>{product.name}</h3>
                <p className="price">₹{product.price}</p>

                <button onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cart-section" id="cart">
        <h2>🛒 Your Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty. Start shopping!</p>
        ) : (
          cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <h3>{item.name}</h3>
              <p>₹{item.price} × {item.quantity}</p>
              <button
                onClick={() =>
                  setCart(
                    cart
                      .map((product) =>
                        product.id === item.id
                          ? {
                              ...product,
                              quantity: product.quantity - 1,
                            }
                          : product
                      )
                      .filter((product) => product.quantity > 0)
                  )
                }
              >
                -
              </button>
              <span> {item.quantity} </span>
              <button
                onClick={() =>
                  setCart(
                    cart.map((product) =>
                      product.id === item.id
                        ? {
                            ...product,
                            quantity: product.quantity + 1,
                          }
                        : product
                    )
                  )
                }
              >
                +
              </button>
              <button
                className="remove-btn"
                onClick={() =>
                  setCart(cart.filter((product) => product.id !== item.id))
                }
              >
                Remove
              </button>
            </div>
          ))
        )}

        <h3 className="total">
          Total: ₹
          {cart.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          )}
        </h3>
      </section>

      <footer>
        <p>© 2026 ShopEase. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
