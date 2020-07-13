import React from "react";

import { config } from "../_helpers/config";

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cotization: [],
      currency: this.props.currency,
    };
  }
  componentDidMount() {
    setInterval(() => {
      let token = JSON.parse(localStorage.getItem('user'));
      
      let url = `${config.apiUrl}quotation/${this.state.currency}`;
      return fetch(url, {
        method: 'GET',
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((response) => response.json())
        .then((response) => this.setState({ cotization: response }));
    }, 5000);
  }

  render() {
    const { quotes } = this.state;
    return (
      <div className="card ms-3" style={{ maxWidth: 540 }}>
        <div className="card text-center">
          <div className="card-header text-center border-bottom-0 bg-transparent text-success pt-4">
          
            <h5> {"Cotización: " + this.props.currency} </h5>
          </div>
          <div className="card-body">
            <h1>$ {parseFloat((Number(this.state.cotization.amount).toPrecision(4)))|| 0.00}</h1>
            <h5 className="text-muted">
              <small>Pesos/{this.props.currency}</small>
            </h5>
          </div>

          <div className="card-footer border-top-0"></div>
        </div>
      </div>
    );
  }
}

export default Quotes;
