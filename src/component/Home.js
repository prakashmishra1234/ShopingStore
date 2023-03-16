import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import instance from "../api/Instance";
import Header from "../component/Header";
import { AuthContext } from "../store/Store";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

const Home = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const getTvShow = () => {
    setLoading(true);
    instance
      .get("/products")
      .then((res) => {
        context.setProducts(res);
      })
      .catch((err) => {
        console.log(err);
        context.setProducts([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getTvShow();
  }, []);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center mt-2">
          <CircularProgress />
        </div>
      ) : (
        <div className="mainDivTv">
          {context.products.length ? (
            <>
              {context.products.map((i, index) => {
                return (
                  <div
                    className="card"
                    style={{
                      width: "12rem",
                      margin: "1rem",
                      cursor: "pointer",
                    }}
                    key={index}
                    onClick={() => {
                      navigate("/details", { state: i });
                    }}
                  >
                    <img
                      className="card-img-top"
                      src={i?.image}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <p
                        className="card-title"
                        style={{
                          width: "100%",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          fontWeight: "500",
                        }}
                        title={i?.title ?? "N/A"}
                      >
                        {i?.title ?? "N/A"}
                      </p>
                      <div className="ratingandpricediv">
                        <p>₹ {i?.price ?? 0}</p>
                        <p
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <span>{i?.rating?.rate ?? 0}</span>
                          <StarOutlinedIcon />
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <div className="d-flex justify-content-center align-items-center">
              No data found!
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
