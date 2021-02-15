import React, { Component } from "react";
import "../style/css/clothes.css";
//import { Link } from "react-router-dom";
import axios from "axios";
import Prodect from "./product";
class Hijab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Hijab: [],
      ErrorMsg: "",
      search: "",
    };
  }
  componentDidMount() {
    this.getAllHijabes();
  }

  getAllHijabes = () => {
    axios
      .get("http://localhost:4000/Hijab")
      .then((res) => {
        console.log(res);
        this.setState({ Hijab: res.data.reverse() });
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
    const { Hijab, ErrorMsg } = this.state;
    let filterProduct = this.state.Hijab.filter((product) => {
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
              {Hijab.length ? (
                filterProduct.map((Hijabe) => (
                  <Prodect
                    key={Hijabe._id}
                    ID={Hijabe._id}
                    Name={Hijabe.name}
                    Price={Hijabe.price}
                    Description={Hijabe.description}
                    Pic={Hijabe.pic}
                    getAllHijabes={this.getAllHijabes}
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

export default Hijab;
