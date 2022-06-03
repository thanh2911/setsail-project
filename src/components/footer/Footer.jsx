import React from 'react'
import logo from '../../assets/img/logo/logo.png'
import './footer.css'


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer__item">
            <div className='footer__info'>
            <img src={logo} alt="" />
            <span className="footer__info-des">
              Lorem ipsum dolor sit ametco nsec te tuer adipiscing elitae
            </span>
            <div className="footer__info-email"> 
                <div>setsail@example.com</div>
            </div>
            <div className="footer__info-phone"> 
                <div>1 562 867 5309</div>
            </div>
            <div className="footer__info-map"> 
                <div>Broadway & Morris St, New York</div>
            </div>
            </div>
        </div>
        <div className="footer__item">
            <div className="footer__posts">
              <h3>Our Recent Posts</h3>
              <div className="footer__post">
                  <span className="footer__posts-name">
                    Visit Thailand, Bali And China
                  </span>
                  <div  className="footer__posts-day">
                    September 7, 2016
                  </div>
              </div>
              <div className="footer__post">
                  <span className="footer__posts-name">
                    The Sound Of Our Jungle
                  </span>
                  <div className="footer__posts-day">
                    September 7, 2016
                  </div>
              </div>
              <div className="footer__post">
                  <span className="footer__posts-name">
                    New Year, New Resolutions!
                  </span>
                  <div className="footer__posts-day">
                    September 7, 2016
                  </div>
              </div>

            </div>
        </div>
        <div className="footer__item">
          <div className="footer__subscribe">
            <h3>Subscribe to our Newsletter</h3>
            <span>
            Etiam rhoncus. Maecenas temp us, tellus eget condimentum rho
          </span>

          <div className="footer__subscribe-input">
            <i className="uil uil-user-square"></i>
            <input type="text"placeholder='Name'/>
          </div>
          <div className="footer__subscribe-input">
            <i className="uil uil-envelope-minus"></i>
            <input type="text"  placeholder='Email'/>
          </div>
          
          <button className="footer__subscribe-btn">SUBSCRIBE</button>
          </div>

        </div>
        <div className="footer__item">
            <div className="footer__instagram">
                <h3>Our Instagram</h3>
                <span>Aliquam lorem ante, dapibus inviver raqui feugiat a, tellus. Phasellus null</span>
                <div className="footer__instagram-img">

              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer