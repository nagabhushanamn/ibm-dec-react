import React, { Component } from 'react';
import classnames from 'classnames';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: 1,
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

  renderTabPanel(product) {
    let { tab } = this.state;
    let panel = null;
    switch (tab) {
      case 1:
        panel = <div className="panel"><p>{product.description}</p></div>;
        break;
      case 2:
        panel = <div className="panel"><p>Not Yet</p></div>;
        break;
      case 3:
        panel = <div className="panel"><p>None Yet</p></div>;
        break;
    }
    return panel;
  }

  renderProducts() {
    let { products,tab } = this.state; // ref- ES6 - destructuring syntax
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
              {buyBtn}
              <hr />
              <section>
                <ul className="nav nav-tabs">
                  <li className={classnames({active:tab===1,other:true})}><a onClick={()=>{this.setState({tab:1})}} href="#">Description</a></li>
                  <li className={classnames({active:tab===2,other:true})}><a onClick={()=>{this.setState({tab:2})}} href="#">Specification</a></li>
                  <li className={classnames({active:tab===3,other:true})}><a onClick={()=>{this.setState({tab:3})}} href="#">Reviews</a></li>
                </ul>
                {this.renderTabPanel(product)}
              </section>
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
