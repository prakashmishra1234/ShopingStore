import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../store/Store";
import "../App.css";

const Cart = () => {
  const context = useContext(AuthContext);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    let prices = 0;
    context.cart.map((item) => {
      prices = prices + item.price;
    });
    setPrice(prices);
  }, [context.cart]);

  const removefromcart = (i) => {
    const temp = [...context.cart];

    temp.map((item, index) => {
      if (index === i) {
        temp.splice(index, 1);
      }
    });
    context.setCart(temp);
  };

  return (
    <>
      {context.cart.length === 0 ? (
        <div className="d-flex justify-content-center">Please select item</div>
      ) : (
        <div className="d-flex justify-content-between p-5 w-100">
          <div className="d-flex flex-column" style={{ width: "60%" }}>
            {context.cart.map((item, index) => {
              return (
                <div
                  key={index}
                  className="d-flex justify-content-between mb-3 w-100 flex-wrap p-3"
                  style={{
                    boxShadow: "2px 3px #888888",
                    border: "1px solid grey",
                    borderRadius: "4px",
                  }}
                >
                  <div style={{ width: "30%" }}>
                    <img
                      style={{ height: "9rem", width: "7rem" }}
                      src={item?.image ?? ""}
                    ></img>
                  </div>
                  <div style={{ width: "70%" }}>
                    <div>{item?.title ?? "N/A"}</div>
                    <div>
                      <span style={{ marginRight: "0.5rem" }}>Size:</span>
                      <span>M</span>
                    </div>
                    <div>
                      <span style={{ marginRight: "0.3rem" }}>Seller:</span>
                      <span>SOMETHINGFASHION</span>
                    </div>
                    <div>
                      <h3 style={{ marginRight: "0.3rem" }}>
                        ₹ {item?.price ?? 0}
                      </h3>
                    </div>
                    <div>
                      <button
                        className="btn"
                        onClick={() => {
                          removefromcart(index);
                        }}
                      >
                        Remove from cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            style={{
              width: "30%",
              boxShadow: "2px 3px #888888",
              border: "1px solid grey",
              borderRadius: "4px",
              height: "15rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              className="d-flex justify-content-center"
              style={{ borderBottom: "1px solid grey" }}
            >
              Price Details
            </div>
            <div
              className="d-flex justify-content-between"
              style={{ padding: "5px" }}
            >
              <div>
                Price ({context.cart.length} {"item"})
              </div>{" "}
              <div>{price} </div>
            </div>
            <div
              className="d-flex justify-content-between"
              style={{ padding: "5px" }}
            >
              <span>Discount</span>
              <span style={{ color: "green" }}>000</span>
            </div>
            <div
              className="d-flex justify-content-between"
              style={{ padding: "5px" }}
            >
              <span>Delivery Charge</span>
              <span style={{ color: "green" }}>free</span>
            </div>
            <div
              className="d-flex justify-content-between"
              style={{ padding: "5px", borderTop: "1px solid grey" }}
            >
              <span>Total Price</span>
              <span>{price}</span>
            </div>
            <div
              className="d-flex justify-content-between"
              style={{ borderTop: "1px solid grey" }}
            >
              <button className="btn btnPlaceorder">Place Order</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
