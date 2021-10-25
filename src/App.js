import "./sass/app.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
function App() {
  return (
    <Router>
      <div className="App">
        <Home />
      </div>
    </Router>
  );
}

export default App;
