import React, { Component } from "react";
import "../style/css/clothes.css";
import "../style/css/orders.css";
//import { Link } from "react-router-dom";
import axios from "axios";
class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Orders: [],
    };
  }
  componentDidMount() {
    this.getAllOrders();
  }

  getAllOrders = () => {
    axios
      .get("http://localhost:4000/order")
      .then((res) => {
        console.log(res);
        this.setState({ Orders: res.data.reverse() });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ ErrorMsg: "could not get the data" });
      });
  };
  render() {
    const { Orders } = this.state;
    return (
      <>
        <span id="up"></span>
        <div className="container-fluid order-content">
          <div className="container order-con">
            <div className="row">
              {Orders.length ? (
                Orders.map((Order) => (
                  <div
                    key={Order._id}
                    className=" card col-12 col-md-6 col-lg-4 orders"
                  >
                    <div className="name">
                      <span>Product Id :</span> {Order.clothes}
                    </div>
                    <div className="phone">
                      <span>Phone Number :</span> {Order.PhoneNumber}
                    </div>

                    <div className="size">
                      <span>Size :</span> {Order.sizename}
                    </div>
                  </div>
                ))
              ) : (
                <div className="noorder">no orders yet</div>
              )}
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

export default Order;
