import React, { Component } from 'react';

class Review extends Component {
    render() {
        let {review}=this.props;
        return (
            <div className="alert alert-danger">
                <span className="badge">{review.stars}</span> &mdash; <span>{review.author}</span>
                <hr />
                <p>{review.body}</p>
            </div>
        );
    }
}

export default Review;