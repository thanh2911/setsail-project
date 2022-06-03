import React from 'react'
import './card-user.css'

const CardUser = props => {
  return (
    <div className="card-user">
    <img src={props.avatar} alt="" />

    <div className="card-user__info">
        <div className="user-name">{props.name}</div>
        <div className="user-des">{props.des}</div>
        <div className="user-social">
                <i className="uil uil-twitter"></i>
                <i className="uil uil-facebook-f"></i>
                <i className="uil uil-youtube"></i>
                <i className="uil uil-instagram-alt"></i>
        </div>
    </div>
</div>
  )
}

export default CardUser