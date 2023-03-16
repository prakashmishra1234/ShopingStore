import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import "../App.css";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { AuthContext } from "../store/Store";
const Details = () => {
  const [rating, setRating] = React.useState(0);
  const location = useLocation();
  const context = useContext(AuthContext);
  React.useEffect(() => {
    setRating(location.state?.rating?.average / 2);
  }, []);

  return (
    <>
      {
        <div className="detailsMain">
          <img src={location.state.image}></img>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div className="ratingDiv">
                <p>{`${location.state?.title ?? "N/A"}`}</p>
              </div>
              <div className="detailsRate">
                <div className="detailsRating">
                  <span>{location.state?.rating?.rate}</span>
                  <StarOutlinedIcon />
                </div>
                <div className="numberRating">
                  {location.state?.rating?.count} Ratings
                </div>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <h3>₹ {location.state?.price ?? 0}</h3>
              </div>
              <div>{location.state?.description}</div>
            </div>
            <div>
              <div className="d-flex justify-content-around">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    const temp = [...context.cart];
                    temp.push(location.state);
                    context.setCart(temp);
                  }}
                >
                  Add to cart
                </button>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Details;
