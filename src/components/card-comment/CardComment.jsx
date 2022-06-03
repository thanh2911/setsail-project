import React, { useState } from 'react'
import './card-comment.css' 

const CardComment = props => {
 
    const star= <i className="uil uil-star"></i>

    const stars = [
        {  star },{  star },{  star },{  star },{  star }
    ]


  return (
    <div className="comment__item">
        <div className="comment__item-img">
            <img src={props.img} alt="" />
        </div>

        <div className="comment__item-user">
            <div className="comment__item-title">{props.title_tour}</div>
            <div className="comment__item-rate">
            {
                stars.splice(0,props.review).map((item, index)  => (
                    <span key={index}>
                        {item.star}
                    </span>
                ))
            }
            </div>
            <div className="comment__item-comment">{props.comment}</div>

            <div className="comment__item-name">{props.name}</div>
    </div>
</div>
  )
}

export default CardComment