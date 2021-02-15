import React, { Component } from "react";
import "../style/css/clothes.css";
//import { Link } from "react-router-dom";
import axios from "axios";
import Prodect from "./product";
class Pants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Pants: [],
      ErrorMsg: "",
      search: "",
    };
  }

  componentDidMount() {
    this.getAllPants();
  }

  getAllPants = () => {
    axios
      .get("http://localhost:4000/pants")
      .then((res) => {
        console.log(res);
        this.setState({ Pants: res.data.reverse() });
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
    const { Pants, ErrorMsg } = this.state;
    let filterProduct = this.state.Pants.filter((product) => {
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
              {Pants.length ? (
                filterProduct.map((pant) => (
                  <Prodect
                    key={pant._id}
                    ID={pant._id}
                    Name={pant.name}
                    Price={pant.price}
                    Description={pant.description}
                    Pic={pant.pic}
                    getAllPants={this.getAllPants}
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
              <i class="fas fa-angle-up"></i>
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Pants;
