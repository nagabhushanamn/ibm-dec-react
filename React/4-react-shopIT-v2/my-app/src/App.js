import React, { Component } from 'react';
import Product from './components/Product';

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
    let { products } = this.state;
    return products.map((product, idx) => {
      return <Product product={product} key={idx} />
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
