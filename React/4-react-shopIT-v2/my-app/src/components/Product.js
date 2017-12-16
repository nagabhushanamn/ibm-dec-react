import React, { Component } from 'react';
import PropTypes from 'proptypes';
import classnames from 'classnames';

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tab: 1
        };
    }

    handleTabChange(e, tab) {
        e.preventDefault();
        this.setState({
            tab
        })
    }

    renderTabPanel(product) {
        let { tab } = this.state;
        let panel;
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
            default:
                panel = null;
        }
        return panel;
    }

    renderProduct(product) {
        let { tab } = this.state; // ref- ES6 - destructuring syntax
        let buyBtn = null;
        if (product.canBuy) {
            buyBtn = <button className="btn btn-primary">buy</button>
        }
        return (
            <div className="list-group-item">
                <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3">
                        <img alt="" src={product.image} className="img-responsive" />
                    </div>
                    <div className="col-xs-9 col-sm-9 col-md-9">
                        <h4>{product.name}</h4>
                        <h5>&#8377;{product.price}</h5>
                        {buyBtn}
                        <hr />
                        <section>
                            <ul className="nav nav-tabs">
                                <li className={classnames({ active: tab === 1, other: true })}><a onClick={(e) => { this.handleTabChange(e, 1) }} href="">Description</a></li>
                                <li className={classnames({ active: tab === 2, other: true })}><a onClick={(e) => { this.handleTabChange(e, 2) }} href="">Specification</a></li>
                                <li className={classnames({ active: tab === 3, other: true })}><a onClick={(e) => { this.handleTabChange(e, 3) }} href="">Reviews</a></li>
                            </ul>
                            {this.renderTabPanel(product)}
                        </section>
                    </div>
                </div>
            </div>
        );

    }


    render() {
        let { product } = this.props;
        return (
            <div>
                {this.renderProduct(product)}
            </div>
        );
    }
}

Product.propTypes = {
    product: PropTypes.object
};

export default Product;