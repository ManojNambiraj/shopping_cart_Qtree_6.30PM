import "./App.css";
import img1 from "./assets/image/one.jpg";
import img2 from "./assets/image/two.jpg";
import Product from "./Components/Product";

function App() {
  const data = [
    {
      id: 1,
      productName: "Mi",
      price: 20000,
      desc: "Some quick example text to build on the card title and make",
      image: img1,
    },
    {
      id: 2,
      productName: "Samsung",
      price: 50000,
      desc: "Some quick example text to build on the card title and make",
      image: img2,
    },
    {
      id: 3,
      productName: "Sony",
      price: 75000,
      desc: "Some quick example text to build on the card title and make",
      image: img1,
    },
    {
      id: 4,
      productName: "POCO",
      price: 17000,
      desc: "Some quick example text to build on the card title and make",
      image: img2,
    },
    {
      id: 5,
      productName: "Xiomi",
      price: 15000,
      desc: "Some quick example text to build on the card title and make",
      image: img1,
    },
    {
      id: 6,
      productName: "Apple",
      price: 200000,
      desc: "Some quick example text to build on the card title and make",
      image: img2,
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 left">
          <div className="row">
            {data.map((product) => {
              return <Product product={product} />;
            })}
          </div>
        </div>
        <div className="col-2 right">right</div>
      </div>
    </div>
  );
}

export default App;
