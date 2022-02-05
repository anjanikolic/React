import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/navbar/Sidebar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/pages/Home";
import SmartPhone from "./components/pages/SmartPhone";

function App() {
  const [smartPhone, setSmartPhone] = useState({});
  const getSmartPhone = (auto) => {
    console.log("A smart phone is clicked:", auto);
    setSmartPhone(auto);
  };

  return (
    <div className="App">
      <Router>
        <Sidebar clickSmartPhone={getSmartPhone} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route
            exact
            path="/smartPhone"
            render={(props) => <SmartPhone smartPhoneToShow={smartPhone} />}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
