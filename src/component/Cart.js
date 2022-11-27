import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addToBascked,
  removeToBascked,
  deleteToBascked,
} from "../redux/actions/action";

export default function Cart() {
  let history = useNavigate();
  const dispatch = useDispatch();

  const {
    products: { basket },
  } = useSelector((store) => store);

  const handleAddBasket = (product) => {
    dispatch(addToBascked(product));
  };

  const handleRemoveBasket = (product) => {
    dispatch(removeToBascked(product));
  };

  const handleDeleteBasket = (product) => {
    dispatch(deleteToBascked(product));
  };
  const totalPrice = basket.reduce(function (sum, el) {
    return sum + el.price * el.count;
  }, 0);

  return (
    <div className="cart">
      <div className="container">
        <div className="outContent">
          <button className="btn btn-dark" onClick={() => history(-1)}>
            <i className="fa-solid fa-chevron-left"></i>
            Go back
          </button>
        </div>
        {basket.map((product) => (
          <div className="row" key={product.id}>
            <div className="cartContent">
              <img className="cartImage" src={product.image} alt="" />
              <h4>{product.title}</h4>
              <p>
                {product.count} x ${product.price} = $
                {product.price * product.count}{" "}
              </p>
              <div className="cartBtns">
                <button onClick={() => handleAddBasket(product)}>
                  <i className="fa-solid fa-square-plus"></i>
                </button>
                <button
                  className="inc"
                  onClick={() => handleRemoveBasket(product)}
                >
                  <i className="fa-solid fa-square-minus"></i>
                </button>
                <button onClick={() => handleDeleteBasket(product)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))}{" "}
        <h2 className="totalPrice"> Total price:${totalPrice}</h2>
      </div>
    </div>
  );
}
