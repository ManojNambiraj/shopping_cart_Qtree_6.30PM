import { useState } from "react";
import "./App.css";
import img1 from "./assets/image/one.jpg";
import img2 from "./assets/image/two.jpg";
import Product from "./Components/Product";
import CartItems from "./Components/CartItems";

function App() {
  const data = [
    {
      id: 1,
      productName: "Mi",
      price: 20000,
      desc: "Some quick example text to build on the card title and make",
      image: img1,
      isStock: true,
    },
    {
      id: 2,
      productName: "Samsung",
      price: 50000,
      desc: "Some quick example text to build on the card title and make",
      image: img2,
      isStock: false,
    },
    {
      id: 3,
      productName: "Sony",
      price: 75000,
      desc: "Some quick example text to build on the card title and make",
      image: img1,
      isStock: true,
    },
    {
      id: 4,
      productName: "POCO",
      price: 17000,
      desc: "Some quick example text to build on the card title and make",
      image: img2,
      isStock: false,
    },
    {
      id: 5,
      productName: "Xiomi",
      price: 15000,
      desc: "Some quick example text to build on the card title and make",
      image: img1,
      isStock: true,
    },
    {
      id: 6,
      productName: "Apple",
      price: 200000,
      desc: "Some quick example text to build on the card title and make",
      image: img2,
      isStock: false,
    },
  ];

  const [cartItems, setCartItem] = useState([]);
  const [total, setTotal] = useState(0)

  const handleAddToCart = (item) => {
    setCartItem([...cartItems, item]);
    setTotal(total + item.price);
  };

  const handleRemoveItem = (item) => {
    const index = cartItems.findIndex((cItem) => cItem.id === item.id);
    cartItems.splice(index, 1);
    setCartItem([...cartItems]);
    setTotal(total - item.price);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 left">
          <div className="row d-flex gap-4">
            {data.map((product) => {
              return (
                <Product product={product} handleAddToCart={handleAddToCart} />
              );
            })}
          </div>
        </div>
        <div className="col-2 right">
          <ol className="list-group list-group-numbered">

            <h3>CartItems: {cartItems.length}</h3>
            
            {cartItems.map((item) => {
              return (
                <CartItems item={item} handleRemoveItem={handleRemoveItem} />
              );
            })}

            <h3>Total: {total}</h3>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
