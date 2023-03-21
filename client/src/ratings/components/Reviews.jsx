/* eslint-disable react/prop-types */

import React, {useState, useEffect} from "react";
import ReviewTile from "./ReviewTile.jsx"
import NewReview from "./NewReview.jsx"
import MoreReviews from "./MoreReviews.jsx"

const Reviews = ({product, reviews, setReviews}) => {
  // will need to style later

  const [sort, setSort] = useState('Relevant')
  const [order, setOrder] = useState([])
  const [maxReviews, setMaxReviews] = useState(2)

  return (
    <div className="mb-4">
    <h1 className="font-weight:700">Product Reviews</h1>
    {reviews.slice(0, maxReviews).map(review => (
     <ul key={review.review_id}>
     <ReviewTile review={review}></ReviewTile>
     </ul>
    ))}
    <div className="mt-4 flex gap-4">
    <NewReview product={product} setReviews={setReviews}></NewReview>
    <MoreReviews reviews={reviews} maxReviews={maxReviews} setMaxReviews={setMaxReviews}></MoreReviews>
    </div>
    </div>
  )
}

export default Reviews