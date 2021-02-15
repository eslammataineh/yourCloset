import React, { Component } from "react";
import "../style/css/admin.css";
import axios from "axios";
import { Link } from "react-router-dom";
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Categories: [],
      name: "",
      price: "",
      availableitems: "",
      category: "",
      pic: "",
      description: "",
      selectedFile: null,
      selectedFileName: "",
      ValidationErr: "",
      Admin: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/category")
      .then((res) => this.setState({ Categories: res.data }))
      .catch((err) => console.log(err));

    const config = {
      headers: {
        signtoken: localStorage.getItem("token"),
      },
    };
    console.log("token is" + localStorage.getItem("token"));
    axios
      .get("http://localhost:4000/admin/login", config)
      .then((res) => {
        console.log(" res is  " + res.data[0]);
        this.setState({ Admin: res.data[0] });
      })
      .catch((err) => console.log(err));
  }

  formHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  checkFile = (event) => {
    let file = event.target.files[0];
    if (this.validatFileSize(event)) {
      this.setState({ selectedFile: file, selectedFileName: file.name }, () => {
        this.uploadFile();
      });
    }
  };

  validatFileSize = (event) => {
    let file = event.target.files[0];
    let maxSize = 3000000;
    if (file) {
      if (file.size > maxSize) {
        this.setState({
          ValidationErr: "the file is too big",
        });
        return false;
      } else {
        this.setState({
          ValidationErr: "the file is good continue",
        });
        return true;
      }
    } else {
      this.setState({ ValidationErr: " please upload a file first" });
      return false;
    }
  };
  uploadFile = () => {
    const data = new FormData();
    data.append("file", this.state.selectedFile);

    axios
      .post("http://localhost:4000/UploadPic", data)
      .then((res) => {
        this.setState({
          pic: "http://localhost:4000/uploads/" + res.data.data.name,
        });
        console.log("http://localhost:4000/uploads/" + res.data.data.name);
        console.log(this.state);
      })
      .catch((err) => {
        this.setState({ ValidationErr: "cannot upload the file corectly" });
      });
  };

  createCloth = (event) => {
    event.preventDefault();
    console.log(this.state);
    if (this.validationForm()) {
      console.log(" submit form");
      axios
        .post("http://localhost:4000/clothes", this.state)
        .then((res) => {
          console.log(res + "eslammmmmm succcesss");
          console.log(this.state);
        })
        .catch((err) => console.log("eslam clothing err " + err));
    }
  };

  createPants = (event) => {
    event.preventDefault();
    console.log(this.state);
    if (this.validationForm()) {
      console.log(" submit form");
      axios
        .post("http://localhost:4000/pants", this.state)
        .then((res) => {
          console.log(res + "eslammmmmm succcesss");
          console.log(this.state);
        })
        .catch((err) => console.log("eslam clothing err " + err));
    }
  };

  createDress = (event) => {
    event.preventDefault();
    console.log(this.state);
    if (this.validationForm()) {
      console.log(" submit form");
      axios
        .post("http://localhost:4000/dresses", this.state)
        .then((res) => {
          console.log(res + "eslammmmmm succcesss");
          console.log(this.state);
        })
        .catch((err) => console.log("eslam clothing err " + err));
    }
  };

  createHijab = (event) => {
    event.preventDefault();
    console.log(this.state);
    if (this.validationForm()) {
      console.log(" submit form");
      axios
        .post("http://localhost:4000/hijab", this.state)
        .then((res) => {
          console.log(res + "eslammmmmm succcesss");
          console.log(this.state);
        })
        .catch((err) => console.log("eslam hijab err " + err));
    }
  };

  validationForm = () => {
    let overallresult = true;
    if (!this.state.name) {
      this.setState({
        ValidationErr: "name can't be empty",
      });
      overallresult = false; //^[\.a-zA-Z0-9\s,!? ]*$
    } else if (!this.state.name.match(/^[a-zA-Z][A-Za-z\s]*$/)) {
      this.setState({
        ValidationErr: "name must be just letters",
      });
      overallresult = false;
    } else if (this.state.name.length <= 3) {
      this.setState({
        ValidationErr: "name must be more than 3 letters",
      });
      overallresult = false;
    } else if (!this.state.price) {
      this.setState({
        ValidationErr: "Price can't be empty",
      });
      overallresult = false;
    } else if (this.state.price.length < 1) {
      this.setState({
        ValidationErr: "Price can't be less than 1Jd",
      });
      overallresult = false;
    } else if (!this.state.description) {
      this.setState({
        ValidationErr: "description can't be empty",
      });
      overallresult = false;
    } else if (!this.state.description.match(/^[\.a-zA-Z0-9\s,!? ]*$/)) {
      this.setState({
        ValidationErr: "description must be just letters",
      });
      overallresult = false;
    } else if (this.state.description.length <= 3) {
      this.setState({
        ValidationErr: "description must be more than 3 letters",
      });
      overallresult = false;
    } else if (!this.state.pic) {
      this.setState({
        ValidationErr: "must upload a pic",
      });
      overallresult = false;
    } else {
      this.setState({ ValidationErr: "" });
      return overallresult;
    }
  };

  render() {
    return (
      <>
        {this.state.Admin ? (
          <div className="container-fluid content">
            <img
              className="background"
              src={process.env.PUBLIC_URL + "imgs/satan (2).jpg"}
              alt=""
            />
            <h3 className="welcomadmin"> hi {this.state.Admin.username}</h3>
            <div className="container con">
              <div className="row">
                <div className="errors"> {this.state.ValidationErr}</div>
                <form className="col-12 col-md-8 col-lg-6 text-center">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Name"
                    onChange={this.formHandler}
                  />

                  <input
                    type="number"
                    min="1"
                    name="price"
                    id="price"
                    placeholder="price"
                    onChange={this.formHandler}
                  />

                  <input
                    type="number"
                    name="availableitems"
                    id="number of items"
                    placeholder="number of items"
                    min="0"
                    required
                    onChange={this.formHandler}
                  />

                  <input
                    type="description"
                    name="description"
                    id="description"
                    placeholder="Description"
                    required
                    onChange={this.formHandler}
                  />
                  <input
                    type="file"
                    name="pic"
                    id="pic"
                    required
                    onChange={this.checkFile}
                  />

                  <select
                    className="select"
                    name="category"
                    required
                    onChange={this.formHandler}
                  >
                    {this.state.Categories.length ? (
                      this.state.Categories.map((category) => (
                        <option key={category._id} value={category._id}>
                          {category.CategoryName}
                        </option>
                      ))
                    ) : (
                      <option>no category found</option>
                    )}
                  </select>
                  <br></br>
                  <div>
                    <button type="submit" onClick={this.createCloth}>
                      Create
                    </button>
                    <button type="submit" onClick={this.createPants}>
                      pants
                    </button>
                    <button type="submit" onClick={this.createDress}>
                      dress
                    </button>
                    <button type="submit" onClick={this.createHijab}>
                      Hijab
                    </button>
                  </div>
                </form>
              </div>
              <div className="orderpage">
                <Link to="/orders">Orders</Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="container-fluid content">
            <img
              className="background"
              src={process.env.PUBLIC_URL + "imgs/satan (2).jpg"}
              alt=""
            />
            <h3 className="welcomadmin"> you are not logged in </h3>
            <div className="container con"></div>
          </div>
        )}
      </>
    );
  }
}

export default Admin;
