import React from "react";
import { connect } from "react-redux";

import NavBar from "../_components/navBar/NavBar";
import Quotes from "../Quotes/Quotes";
import headerimg from "../assets/header.jpg";
class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      curTime: null,
    };
  }

  componentDidMount() {}

  render() {
    const { user, users } = this.props;
    let fecha = new Date();
    return (
      <div className="container mt-2">
        <div className="col-12">        
          <img src={headerimg} className="card-img" />
          <NavBar />
          <br></br>
          <div>
            <h4>
              Cotizaciones de la fecha:{" "}
              {fecha.getDate() +
                "/" +
                (fecha.getMonth() + 1) +
                "/" +
                fecha.getFullYear()}{" "}
            </h4>
          </div>

          <hr />

          <div className="row">
            <div className="col-4">
              <Quotes currency="Euro"></Quotes>{" "}
            </div>
            <div className="col-4">
              <Quotes currency="Dollar"></Quotes>{" "}
            </div>
            <div className="col-4">
              <Quotes currency="Real"></Quotes>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
    user,
    users,
  };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
