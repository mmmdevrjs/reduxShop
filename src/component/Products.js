import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        setData(res.data);
        setFilter(res.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProduct("men's clothing");
            }}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProduct("women's clothing");
            }}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProduct("jewelery");
            }}
          >
            Jewelry
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProduct("electronics");
            }}
          >
            Electronic
          </button>
        </div>
        {filter.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100 text-center p-4 ">
              <img
                src={product.image}
                className="card-img-top"
                alt="product-image"
                height={"250px"}
              />
              <div className="card-body">
                <h5 className="card-title mb-0">
                  {product.title.substring(0, 12)}...
                </h5>
                <p className="card-text">
                  Price: <b>${product.price}</b>
                </p>

                <NavLink
                  to={`/products/${product.id}`}
                  className="btn btn-outline-secondary"
                >
                  About
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}
