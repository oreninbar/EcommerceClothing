import "./sass/app.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { ProductsList } from "./pages/ProductsList";
import { ProductPage } from "./pages/ProductPage";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact render={() => <Home />}></Route>
          <Route path="/home" exact render={() => <Home />}></Route>
          <Route path="/productsList" exact render={() => <ProductsList />}></Route>
          <Route path="/product" exact render={() => <ProductPage />}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
