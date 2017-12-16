import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          name: 'Laptop',
          price: 198000,
          description: 'New mac pro',
          canBuy: true,
          image: 'images/Laptop.png'
        },
        {
          name: 'Mobile',
          price: 18000,
          description: 'New  pro',
          canBuy: true,
          image: 'images/Mobile.png'
        }
      ]
    };
  }

  renderProducts() {
    let { products } = this.state; // ref- ES6 - destructuring syntax
    return products.map((product, idx) => {
      let buyBtn = null;
      if (product.canBuy) {
        buyBtn = <button className="btn btn-primary">buy</button>
      }
      return (
        <div key={idx} className="list-group-item">
          <div className="row">
            <div className="col-xs-3 col-sm-3 col-md-3">
              <img src={product.image} className="img-responsive" />
            </div>
            <div className="col-xs-9 col-sm-9 col-md-9">
              <h4>{product.name}</h4>
              <h5>&#8377;{product.price}</h5>
              <p>{product.description}</p>
              {buyBtn}
            </div>
          </div>
        </div>
      );
    });

  }

  render() {

    return (
      <div className="container">
        <div className="page-header">shopIT</div>
        <div className="list-group">
          {this.renderProducts()}
        </div>
      </div>
    );
  }
}

export default App;
