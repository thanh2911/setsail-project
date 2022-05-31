import React from 'react'
import { Link , useLocation} from 'react-router-dom'
import navData from '../../assets/database/navData.json' ;
import Modal , {ModalContent} from '../modal/Modal';
import Logo from '../../assets/img/logo/logo.png' ;
import Text from '../../assets/img/logo/sidearea-img-2.png' ;
import Map from '../../assets/img/map/map.jpg' ;

import './header.css' ;

const ModalSearch = () => {

  return (
    <Modal active={false} id = "modal__search">
      <ModalContent id='box-search'> 
        <input type="text" />
        <button>FIND NOW</button>
      </ModalContent>
    </Modal>  
  )
}

const ModalBars = () => {
  return(
    <Modal active={false} id = "modal__bars" >
      <ModalContent id='box-bars'> 
        <img src={Logo} alt="" className="box-bars__logo" />
        <img src={Text} alt="" className="box-bars__text" />
        <img src={Map} alt="" className="box-bars__map" />
        <span>Lorem ipsum dolor sit amet, consectetuer adipis cing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis theme natoque</span>
        <h2>Find Your Destination</h2>
        <div className="box-bars__input">
          <input type="text" placeholder='Search...'/>
          <button><i className="uil uil-search"></i></button>
        </div>                                 
      </ModalContent>
    </Modal> 
  )
}

const Header = () => {

  const {pathname} = useLocation();
  const active = navData.findIndex(item => item.link===pathname)

  const onpenSearch = () => {
    const modal = document.querySelector('#modal__search');
    modal.classList.toggle('active') ;
  }

  const onpenBars = () => {
      const modal = document.querySelector('#modal__bars');
      modal.classList.toggle('active') ;
  }


  return (
    <div className="header">
        <div className="header-wrapper">
          <div className="logo">
              <Link to='/'>
                <img src={Logo} alt="" />
              </Link>             
          </div>

          <ul className="nav">
              {
                navData.map((item,index) => (
                  <li className="nav__item" key={index}>
                      <Link to={item.link}>
                          <span className={`line-hover ${active===index ? 'active' : ''}`}>
                            {item.display_name}
                          </span>
                      </Link>

                      <ul className="subnav">
                        {
                          item.subnav.map((sub , i ) => (
                            <li className="subnav__item" key={i}>
                              <Link to={sub.sub_link}>
                                <span className='line-hover'> {sub.sub_name}</span>
                              </Link>
                            </li>
                          ))
                        }
                      </ul>
                  </li>
                ))
              }
          </ul>

          <ul className="tools">
            <li className="tools__item">
              <div className="cart">
                <i className="uil uil-shopping-cart"></i>

                <ul className="box-cart">
                      <span>No products in the cart.</span>
                </ul>                           
              </div>
            </li> 
            <li className="tools__item" >
              <div className="search">
                  <i className="uil uil-search" onClick={onpenSearch}></i>               
              </div>  
              <ModalSearch />            
            </li>
            <li className="tools__item">
              <div className="bars" onClick={onpenBars}>
                <i className="uil uil-bars"></i>  
              </div>                                          
              <ModalBars />
                          
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Header