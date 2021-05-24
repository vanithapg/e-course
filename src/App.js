import "./App.css";

import { Route, BrowserRouter as Router } from "react-router-dom";
import Enquire from "./Enquire";
import Courses from "./Courses";
import { Link } from "react-router-dom";
import Support from "./Support";

function App() {
  return (
    <div className="App">
      <h1> E-COURSES</h1>
      <hr />
      <Router>
        <div className="topnav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/support">Enquires</Link>
            </li>
          </ul>
        </div>
        <Route exact path="/" component={Courses}></Route>
        <Route path="/enquire" component={Enquire}></Route>
        <Route path="/support" component={Support}></Route>
      </Router>
    </div>
  );
}

export default App;
