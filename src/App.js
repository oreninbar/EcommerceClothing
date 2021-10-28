import "./sass/app.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { ProductsList } from "./pages/ProductsList";
import { ProductPage } from "./pages/ProductPage";
import { Login } from "./pages/login/Login";
import {SignUp} from "./pages/signup/SignUp";
import {ResetPassword} from "./pages/forgetpassword/ResetPassword";
import { Cart } from "./pages/cart/Cart";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact render={() => <Home />}></Route>
          <Route path="/home" exact render={() => <Home />}></Route>
          <Route path="/productsList" exact render={() => <ProductsList />}></Route>
          <Route path="/product" exact render={() => <ProductPage />}></Route>
          <Route path="/login" exact render={() => <Login />}></Route>
          <Route path="/sign-up" exact render={() => <SignUp />}></Route>
          <Route path="/reset-password" exact render={() => <ResetPassword />}></Route>
          <Route path="/cart" exact render={() => <Cart />}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
