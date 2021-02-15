import React, { useContext, useState } from "react";
import "../style/css/login.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../App";

const Login = (props) => {
  let [Auth, setAuth] = useContext(AuthContext);
  let [userlog, setuserlog] = useState({ email: "", password: "" });
  const history = useHistory();
  const handleChange = (event) => {
    setuserlog({ ...userlog, [event.target.name]: event.target.value });
  };

  function handelSubmin(event) {
    event.preventDefault();

    console.log("inside login");

    //console.log(this.state);
    axios
      .post("http://localhost:4000/admin/login", userlog)
      .then((res) => {
        localStorage.setItem("token", res.data.token);

        console.log("res ==", res);

        setAuth({
          token: res.data.token,
          userName: res.data.Signinuser.username,
          userIsAdmin: res.data.Signinuser.isAdmin,
          userEmail: res.data.Signinuser.email,
        });

        history.push("/");
        // localStorage.setItem("Admin", Auth.Signinuser.isAdmin);
      })
      .catch((err) => {
        console.log(" login faild admin" + err);
      });
  }

  /* function chekadmin() {
    Auth.userIsAdmin ? history.push("/admin") : history.push("/clothes");
    console.log("admin", Auth.userIsAdmin);
  } */
  return (
    <>
      <div className="container-fluid content">
        <img
          className="backgroundhome"
          src={process.env.PUBLIC_URL + "imgs/satan (2).jpg"}
          alt=""
        />
        <div className="container con">
          <div className="row">
            <form className="col-12 col-md-8 col-lg-6 text-center">
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                  value={userlog.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="Password"
                  placeholder="password"
                  min="5"
                  required
                  value={userlog.password}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" onClick={handelSubmin}>
                log in
              </button>
              <p>I don't have account</p>
              <div className="register">
                <Link to="signin">Sign in</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

/* import React, { Component } from "react";
import "../style/css/login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../App";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handelChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handelSubmin = (event) => {
    event.preventDefault();

    console.log("inside login");

    const Auth = AuthContext;

    console.log(this.state);
    axios
      .post("http://localhost:4000/admin/login", this.state)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log("Auth from log in", Auth);
        Auth.login(res.data);
 */
//console.log(" localstorage = " + localStorage.getItem("token"));

/* if (res.status === 200) {
          console.log("inside state:", res.data);
          const token = res.data;
          localStorage.setItem("token", token);
          return (window.location.pathname = "/admin");
        } */
/*   })
      .catch((err) => {
        console.log(" login faild admin" + err);
      });
    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <div className="container-fluid content">
        <img
          className="backgroundhome"
          src={process.env.PUBLIC_URL + "imgs/satan (2).jpg"}
          alt=""
        />
        <div className="container con">
          <div className="row">
            <form className="col-12 col-md-7 col-lg-6 text-center">
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handelChange}
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="Password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.handelChange}
                />
              </div>
              <button type="submit" onClick={this.handelSubmin}>
                log in
              </button>
              <p>I don't have account</p>
              <div className="register">
                <Link to="signin">Sign in</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login; */
