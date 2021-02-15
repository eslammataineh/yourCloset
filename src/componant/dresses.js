import React, { Component } from "react";
import "../style/css/clothes.css";
//import { Link } from "react-router-dom";
import axios from "axios";
import Prodect from "./product";
class Dresses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Dresses: [],
      ErrorMsg: "",
      search: "",
    };
  }

  componentDidMount() {
    this.getAlldresses();
  }

  getAlldresses = () => {
    axios
      .get("http://localhost:4000/dresses")
      .then((res) => {
        console.log(res);
        this.setState({ Dresses: res.data.reverse() });
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
    const { Dresses, ErrorMsg } = this.state;
    let filterProduct = this.state.Dresses.filter((product) => {
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
              {Dresses.length ? (
                filterProduct.map((dress) => (
                  <Prodect
                    key={dress._id}
                    ID={dress._id}
                    Name={dress.name}
                    Price={dress.price}
                    Description={dress.description}
                    Pic={dress.pic}
                    getAlldresses={this.getAlldresses}
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

export default Dresses;
