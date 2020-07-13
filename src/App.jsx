import React from "react";
//import logo from "./logo.svg";
//import "./App.css";

import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "./_helpers";
import { alertActions } from "./_actions";
import { PrivateRoute } from "./_components";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { RegisterPage } from "./RegisterPage";

function App() {
  //super(props);

  //const { dispatch } = this.props;
  //history.listen((location, action) => {            
 //     dispatch(alertActions.clear());
 // });

  //const { alert } = this.props;

  return (
    <div className="jumbroton">
      <div className="container">
        <div className="col-12">
          {alert.message && (
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          )}
          <Router history={history}>
            <div>
              <PrivateRoute exact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
            </div>
          </Router>
        </div>
      </div>
    </div>
  );
}


function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}

export default App;
