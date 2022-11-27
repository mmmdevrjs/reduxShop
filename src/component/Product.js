import React, { useState, useEffect } from "react";

import { useParams, useNavigate, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import { addToBascked } from "../redux/actions/action";

export default function Product() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  let history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://fakestoreapi.com/products/${id}`,
    })
      .then((res) => {
        setProduct(res.data);
      })
      .catch((e) => {
        console.log(e + "error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const Loading = () => {
    return (
      <div className="d-flex skelton">
        <div className="col-md-6">
          <Skeleton height={400} width={350} />
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={70} width={500} className="mt-4" />
          <Skeleton height={100} width={500} className="mt-3" />
          <Skeleton height={25} width={100} className="mt-3" />
          <Skeleton height={50} width={200} className="mt-4" />
          <div className="buttons d-flex ">
            <Skeleton height={50} width={100} className="mt-4 me-2 " />
            <Skeleton height={50} width={100} className="mt-4 me-2" />
            <Skeleton height={50} width={100} className="mt-4 me-2" />
          </div>
        </div>
      </div>
    );
  };

  const ShowProduct = () => {
    const handlebasket = (product) => {
      dispatch(addToBascked(product));
    };
    return (
      <div className="product">
        <div className="container">
          <div className="row">
            <div className="productRow ">
              <div className="productImage col-md-6">
                <img
                  src={product.image}
                  className="img-thumbnail"
                  alt={product.title}
                  height={450}
                  width={400}
                ></img>
              </div>

              <div className="productInfo ">
                <p className="productCategory">{product.category}</p>
                <h1>{product.title}</h1>
                <p>{product.description.slice(0, 500)}</p>
                <p>
                  Rating: <i className="fa-solid fa-star"></i>
                  {product.rating && product.rating.rate}
                </p>
                <p className="productPrice">
                  {" "}
                  Price: <b>${product.price}</b>{" "}
                </p>

                <div className="buttons">
                  <button
                    onClick={() => handlebasket(product)}
                    className="btn btn-dark me-2"
                  >
                    Add cart
                  </button>
                  <NavLink to="/cart" className="btn btn-dark me-2">
                    Go to cart
                  </NavLink>
                  <button
                    className="btn btn-secondary "
                    onClick={() => history(-1)}
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container mt-5">
        {loading ? <Loading /> : <ShowProduct />}
      </div>
    </>
  );
}
