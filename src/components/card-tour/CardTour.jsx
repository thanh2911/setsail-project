import React from 'react'
import './card-tour.css'

const CardTour = props => {
  return (

    <div className="card-tour">
        <div className="card-wrapper">
        <div className="card__heading">
            <div className="card__heading--img">
                <img src={props.img} alt="" />
            </div>                    
            <div className="card__heading--box">
                <span><i className="uil uil-calendar-alt"></i> {props.amount}</span>
                <span><i className="uil uil-user"></i> {props.age_limit}+</span>
                <span><i className="uil uil-map-marker"></i> {props.type_tour}</span>
            </div>
        </div>

        <div className="card__text">
                    <h2 className="card__text--heading">{props.name_tour}</h2>
                    <span className="card__text-des">{props.des}</span>
                    <div className="card__text--rate">
                        <span>${props.price}</span>
                        <span><i className="uil uil-star"></i>{props.review}</span>
                        <span>Good</span>
                    </div>
        </div>
        </div>

    </div>
  )
}

export default CardTour