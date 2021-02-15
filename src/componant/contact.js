import React, { useState, useEffect, useContext } from "react";
import "../style/css/contact.css";
import axios from "axios";
import { AuthContext } from "../App";
const Contact = (props) => {
  let [Auth, setAuth] = useContext(AuthContext);
  let [messeges, setmesseges] = useState([]);
  let [usermessege, setusermessege] = useState({
    name: "",
    contactemail: "",
    message: "",
    ValidationErr: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:4000/contact")
      .then((res) => {
        console.log(res);
        setmesseges(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (event) => {
    setusermessege({ ...usermessege, [event.target.name]: event.target.value });
  };

  const handelsubmit = (e) => {
    e.preventDefault();

    console.log("in axiox");
    axios
      .post("http://localhost:4000/contact", usermessege)
      .then((res) => {
        console.log(res);
        setusermessege(res.data);
        axios
          .get("http://localhost:4000/contact")
          .then((res) => {
            console.log(res);
            setmesseges(res.data.reverse());
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /* let validationForm = () => {
    let overallresult = true;
    //console.log("usermessege.name =" + usermessege.contactemail);
    if (!usermessege.name) {
      usermessege.ValidationErr = "name cannot be empty";
      overallresult = false;
    } else if (!usermessege.name.match(/^[a-zA-Z]+$/)) {
      usermessege.ValidationErr = "name must be letters";
      overallresult = false;
    } else if (!usermessege.contactemail) {
      usermessege.ValidationErr = " email cannot be empty";
      overallresult = false;
    } else if (typeof usermessege.contactemail !== "undefined") {
      let lastAtPos = usermessege.contactemail.lastIndexOf("@");
      let lastDotPos = usermessege.contactemail.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          usermessege.contactemail.indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          usermessege.contactemail.length - lastDotPos > 2
        )
      ) {
        overallresult = false;
        usermessege.ValidationErr = "Email is not valid";
      } else {
        console.log("usermessege.name =" + usermessege.contactemail);
        usermessege.ValidationErr = "";
        return overallresult;
      }
    } else {
      console.log("usermessege.name =" + usermessege.contactemail);
      usermessege.ValidationErr = "";
      return overallresult;
    }
  }; */
  return (
    <div className="container-fluid fluid">
      <img
        className="backgroundhome"
        src={process.env.PUBLIC_URL + "imgs/satan (2).jpg"}
        alt=""
      />

      <div className="container cont">
        <div className="errors bg-danger"> {usermessege.ValidationErr}</div>
        <form className="form  col-12 col-lg-9">
          <h4>contact for information</h4>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            type="email"
            name="contactemail"
            id="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <textarea
            name="message"
            id="textarea"
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="submitcontact"
            onClick={handelsubmit}
          >
            Send <i class="fas fa-heart"></i>
          </button>
        </form>
        <br />
        {Auth.userIsAdmin ? (
          <div className="contact">
            <h3 className="messages">All messages</h3>
            {messeges.length ? (
              messeges.map((messege) => (
                <div className="invelop">
                  <i class="fas fa-envelope-open"></i>
                  <div key={messege._id} className=" card col-9 contactus">
                    <p>
                      A messege from :<b>{messege.name}</b>
                    </p>
                    <p>
                      His/her email : <b>{messege.contactemail}</b>
                    </p>
                    <p>
                      He/she told you that :" <b>{messege.message}</b>"
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="noblogs">Post new blog</div>
            )}
          </div>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
};

export default Contact;
