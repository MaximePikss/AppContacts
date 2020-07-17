import React, { Component } from "react";
import Header from "./Components/interface/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./Components/contact/List";
import { Provider } from "./Context";
import AddContact from "./Components/contact/AddContact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import APropos from "./Components/pages/APropos";
import Erreur from "./Components/pages/Erreur";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route path="/add" component={AddContact} />
                <Route path="/list" component={List} />
                <Route exact path="/" component={List} />
                <Route path="/apropos" component={APropos} />
                <Route component={Erreur} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
