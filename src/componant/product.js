import React, { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../App";
const Product = (props) => {
  let [Auth, setAuth] = useContext(AuthContext);

  function handelDelete(
    ID,
    getAllClothes,
    getAllPants,
    getAlldresses,
    getAllHijabes
  ) {
    axios
      .delete(`http://localhost:4000/clothes/Delete/${ID}`)
      .then((res) => {
        console.log("delete  clothes" + res);
        getAllClothes();
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .delete(`http://localhost:4000/pants/Delete/${ID}`)
      .then((res) => {
        console.log("delete pants" + res);
        getAllPants();
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .delete(`http://localhost:4000/dresses/Delete/${ID}`)
      .then((res) => {
        getAlldresses();
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .delete(`http://localhost:4000/hijab/Delete/${ID}`)
      .then((res) => {
        getAllHijabes();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="clo-card col-12 col-md-6 col-lg-4">
      <Link to={"/details/" + props.ID}>
        <div className="img">
          <img src={props.Pic} alt="" />
        </div>
      </Link>
      <div className="info">
        <div className="name">{props.Name}</div>
        <div className="price">{props.Price}jd</div>
        <div className="addtocard">
          <button type="submit" className="detailsbtn">
            <Link to={"/details/" + props.ID}>More Details</Link>
          </button>
          &nbsp;
          {Auth.userIsAdmin ? (
            <button
              className="deleted"
              type="submit"
              onClick={() =>
                handelDelete(
                  props.ID,
                  props.getAllClothes,
                  props.getAllPants,
                  props.getAlldresses,
                  props.getAllHijabes
                )
              }
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          ) : (
            <span></span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
