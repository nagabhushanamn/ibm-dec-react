import React, { Component } from 'react';

class ReviewForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFormOpen: false
        }
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let newReview = {
            stars: this.refs.stars.value,
            author: this.refs.author.value,
            body: this.refs.body.value
        }
        this.props.onNewReview(newReview);
        this.setState({
            isFormOpen: false
        });
    }

    renderForm() {
        let { isFormOpen } = this.state;
        if (!isFormOpen) {
            return (
            <button onClick={() => { this.setState({ isFormOpen: true }) }} className="btn btn-primary">
                    New-Review
            </button>
            )
        } else {
            return (
                <div className="col-md-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">ReviewForm</div>
                        <div className="panel-body">
                            <form onSubmit={(e) => { this.handleFormSubmit(e) }}>
                                <div className="form-group">
                                    <label>stars</label>
                                    <select className="form-control" ref="stars">
                                        {[1, 2, 3, 4, 5].map(n => <option key={n}>{n}</option>)}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>author</label>
                                    <input className="form-control" ref="author" />
                                </div>
                                <div className="form-group">
                                    <label>body</label>
                                    <textarea className="form-control" ref="body"></textarea>
                                </div>
                                <button className="btn btn-primary">submit</button>
                                <button type="button" onClick={() => { this.setState({ isFormOpen: false }) }} className="btn btn-danger">
                                    Cancel
                            </button>
                            </form>
                        </div>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderForm()}
            </div>
        );
    }
}

export default ReviewForm;