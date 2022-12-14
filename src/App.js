import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
