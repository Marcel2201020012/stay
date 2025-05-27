import React from 'react';
import '../styles/ReviewCard.css';

function ReviewCard({ review }) {
    return (
        <div className="review-card">
            <div className="review-header">
                <strong>{review.name}</strong>
                <span className="score">{review.score}/10</span>
            </div>
            <p className="review-text">{review.comment}</p>
        </div>
    );
}

export default ReviewCard;
