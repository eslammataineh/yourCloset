import React, { useState } from "react";
import Header from "./componant/header";
import Home from "./componant/home";
import Clothes from "./componant/clothes";
import Hijab from "./componant/hijab";
import Login from "./componant/login";
import Admin from "./componant/admin";
import Signin from "./componant/signin";
import Footer from "./componant/footer";
import Details from "./componant/details";
import Pants from "./componant/pants";
import Dresses from "./componant/dresses";
import About from "./componant/about";
import Contact from "./componant/contact";
import Offers from "./componant/offers";
import Payment from "./componant/payment";
import Blog from "./componant/blog";
import Order from "./componant/orders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const AuthContext = React.createContext();

let auth = {
  username: "",
  email: "",
  password: "",
  isAdmin: "",
};
function App() {
  let [Auth, setAuth] = useState(auth);

  return (
    <AuthContext.Provider value={[Auth, setAuth]}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/clothes" component={Clothes} />
          <Route path="/hijab" component={Hijab} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
          <Route path="/signin" component={Signin} />
          <Route path="/pants" component={Pants} />
          <Route path="/dresses" component={Dresses} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/offers" component={Offers} />
          <Route path="/payment" component={Payment} />
          <Route path="/blog" component={Blog} />
          <Route path="/orders" component={Order} />
          <Route path="/details/:product_id" component={Details} />
        </Switch>
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
