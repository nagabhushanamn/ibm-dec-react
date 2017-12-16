import React, { Component } from 'react';
import Product from './components/Product';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      products: [
        {
          name: 'Laptop',
          price: 198000,
          description: 'New mac pro',
          canBuy: true,
          image: 'images/Laptop.png',
          reviews: [
            { stars: 5, author: 'nag@gmail.com', body: 'good one' },
            { stars: 1, author: 'indu@gmail.com', body: 'costly one' }
          ]
        },
        {
          name: 'Mobile',
          price: 18000,
          description: 'New  pro',
          canBuy: true,
          image: 'images/Mobile.png',
          reviews: [
            { stars: 5, author: 'nag@gmail.com', body: 'good one' },
            { stars: 1, author: 'indu@gmail.com', body: 'costly one' }
          ]
        }
      ]
    };
  }

  addToCart(product) {
    this.setState({
      cart: this.state.cart.concat(product)
    });
  }
  addNewReview(review, id) {
    this.setState({
      products: this.state.products.map(product => {
        if (product.id !== id) return product;
        else {
          product.reviews = [...product.reviews, review]
          return product;
        }
      })
    });
  }

  renderProducts() {
    let { products } = this.state;
    return products.map((product, idx) => {
      return <Product onNewReview={(review, id) => { this.addNewReview(review, id) }} onBuy={(p) => { this.addToCart(p) }} product={product} key={idx} />
    });
  }

  render() {
    let { cart } = this.state;
    return (
      <div className="container">
        <div className="page-header">shopIT</div>
        <span className="badge">{cart.length}</span> in cart <hr />
        <div className="list-group">
          {this.renderProducts()}
        </div>
      </div>
    );
  }
}

export default App;
