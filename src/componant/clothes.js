import React, { Component } from "react";
import "../style/css/clothes.css";
//import { Link } from "react-router-dom";
import axios from "axios";
import Prodect from "./product";
class Clothes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Cloth: [],
      ErrorMsg: "",
      search: "",
    };
  }
  componentDidMount() {
    this.getAllClothes();
  }

  getAllClothes = () => {
    axios
      .get("http://localhost:4000/clothes")
      .then((res) => {
        console.log(res);
        this.setState({ Cloth: res.data.reverse() });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ ErrorMsg: "could not get the data" });
      });
  };

  handelSearch = (event) => {
    this.setState(
      { search: event.target.value },
      console.log(event.target.value)
    );
  };

  render() {
    const { Cloth, ErrorMsg } = this.state;
    let filterProduct = this.state.Cloth.filter((product) => {
      return product.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });
    return (
      <>
        <span id="up"></span>
        <div className="container-fluid clo-content">
          <div className="container clo-con">
            <input
              className="search"
              type="text"
              name="search"
              placeholder="Search"
              value={this.state.search}
              onChange={this.handelSearch}
            />

            <br />
            <br />
            <br />
            <br />
            <div className="row">
              {Cloth.length ? (
                filterProduct.map((clothe) => (
                  <Prodect
                    key={clothe._id}
                    ID={clothe._id}
                    Name={clothe.name}
                    Price={clothe.price}
                    Description={clothe.description}
                    Pic={clothe.pic}
                    getAllClothes={this.getAllClothes}
                  />
                ))
              ) : (
                <span>nothing to show</span>
              )}
              {ErrorMsg ? console.log(ErrorMsg) : <span></span>}
            </div>
          </div>
          <div className="up">
            <a href="#up">
              <i className="fas fa-angle-up"></i>
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Clothes;
