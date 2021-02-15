import React, { Component } from "react";
import "../style/css/details.css";
//import OrderForm from "./orderform";
import axios from "axios";
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetails: [],
      // NewLength: "",
      phone: "",
      selectsize: "",
      users: "",
      ValidationErr: "",
    };
  }

  validationForm = () => {
    let overallresult = true;
    if (!this.state.selectsize) {
      this.setState({
        ValidationErr: "select size pleaze",
      });
      overallresult = false;
    } else if (!this.state.phone) {
      this.setState({
        ValidationErr: "phone can't be empty",
      });
      overallresult = false;
    } else if (this.state.phone.length < 10 || this.state.phone.length > 10) {
      this.setState({
        ValidationErr: "phone number must be 10 digit",
      });
      overallresult = false;
    } else {
      this.setState({ ValidationErr: "" });
      return overallresult;
    }
  };
  componentDidMount() {
    let id = this.props.match.params.product_id;

    axios
      .get(`http://localhost:4000/clothes/${id}`)
      .then((res) => {
        this.setState({ productDetails: res.data });
        console.log(this.state.productDetails);
        console.log(id + "  " + typeof id);
      })
      .catch((err) => {
        console.log("detailsss" + err);
        this.setState({ ErrorMsg: "  could not get the data" });
      });

    axios
      .get(`http://localhost:4000/pants/${id}`)
      .then((res) => {
        this.setState({ productDetails: res.data });
        //console.log(this.state.productDetails);
      })
      .catch((err) => {
        // console.log("detailsss" + err);
        this.setState({ ErrorMsg: "  could not get the data" });
      });
    axios
      .get(`http://localhost:4000/hijab/${id}`)
      .then((res) => {
        this.setState({ productDetails: res.data });
        // console.log(this.state.productDetails);
      })
      .catch((err) => {
        console.log("detailsss" + err);
        this.setState({ ErrorMsg: "  could not get the data" });
      });
    axios
      .get(`http://localhost:4000/dresses/${id}`)
      .then((res) => {
        this.setState({ productDetails: res.data });
        console.log(this.state.productDetails);
      })
      .catch((err) => {
        console.log("detailsss" + err);
        this.setState({ ErrorMsg: "could not get the data" });
      });
  }

  handelcustom = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addToCart = (event) => {
    event.preventDefault();
    if (this.validationForm()) {
      let productdetails = this.state.productDetails;

      //console.log("buy ittttt" + selectsizeone);
      //let id = this.props.match.params.product_id;
      /* axios
        .post(`http://localhost:4000/useredit`, this.state.Newlength)
        .then((res) => {
          //this.setState({ newlength: res.data });
          console.log(this.state.Newlength);
          //console.log("done length");
        })
        .catch((err) => {
          // console.log("detailsss newlength" + err);
          this.setState({ ErrorMsg: "  could not post newlength" });
        }); */

      console.log("**************************************");

      let order = {
        phone: this.state.phone,
        clothes: productdetails,
        selectsize: this.state.selectsize,
      };

      axios
        .post(`http://localhost:4000/order`, order)
        .then((res) => {
          console.log("order inside axios " + res.data);
        })
        .catch((err) => {
          // console.log("detailsss order" + err);
          this.setState({ ErrorMsg: "  could not get the order data" });
        });

      this.setState({
        phone: "",
        selectsize: "",
      });
    }
  };

  render() {
    const { productDetails } = this.state;
    //const f = false;
    return (
      <>
        {/* <h1>hello {this.state.users.username}</h1> */}

        {productDetails ? (
          <div className="container-fluid det-content">
            <div className="errors">{this.state.ValidationErr}</div>
            <div className="container det-con">
              <div className="row">
                <div className="img col-12 col-md-6">
                  <img src={productDetails.pic} alt="" />
                </div>

                <div className="orderdetails col-12 col-md-6">
                  <div className="details">
                    <div className="description">
                      <p className="lead">{productDetails.description}</p>
                    </div>

                    <form method="post" action="/order">
                      <p className="lead">{productDetails.price} JD</p>
                      <label>please, choose your size</label>
                      <br />
                      <select
                        className="d_select"
                        name="selectsize"
                        value={this.state.selectsize}
                        onChange={this.handelcustom}
                      >
                        <option>Select Size</option>
                        <option value="small">small</option>
                        <option value="medium">medium</option>
                        <option value="large">large</option>
                      </select>

                      <br />
                      <br />

                      {/* <label htmlFor="custom">
                        you could custom your order if you want, write down the
                        length you want in cm
                      </label>
                      <br />
                      <br />
                      <input
                        type="number"
                        name="Newlength"
                        min="0"
                        id="custom"
                        placeholder="Your Custom Length"
                        value={this.state.Newlength}
                        onChange={this.handelcustom}
                      />
                     */}
                      <br />
                      <br></br>

                      <input
                        type="number"
                        name="phone"
                        id="phone"
                        min="0"
                        max="10"
                        placeholder="phone number"
                        value={this.state.phone}
                        onChange={this.handelcustom}
                      />

                      <br />
                      <br />
                      <br />
                      <div className="addtocard">
                        <button type="submit" onClick={this.addToCart}>
                          Buy it
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>loading product details</div>
        )}
      </>
    );
  }
}

export default Details;
