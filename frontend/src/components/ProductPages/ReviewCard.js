import React from 'react'
import userImg from '../../images/user.png'
import ReactStars from "react-rating-stars-component";
const ReviewCard = ({reviews}) => {
    const options = {
        edit: false,
        activeColor: "tomato",
        color: "rgba(20,20,20,0.2)",
        value: reviews.rating,
        isHalf: true,
        size: window.innerWidth < 600 ? 15 : 20,
      };

  return (
    <>
      <div className="review-card m-4  px-2  border-2 w-full h-auto  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
        <div className='flex items-center space-x-4'>
            <div className="user0logo">
        <img width={30} height ={30} src={userImg} alt="" />
            </div>
            <div className="name">
        <p>{reviews.name}</p>
            </div>
        </div>
        <span><ReactStars {...options} /></span>
        <p>{reviews.comment.length > 100 ? reviews.comment.slice(0,100) + "..." : reviews.comment}</p>
        {/* <p>{reviews.comment}</p> */}
      </div>
    </>
  )
}

export default ReviewCard
