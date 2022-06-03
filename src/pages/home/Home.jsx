import React , {useEffect} from 'react' ;
import Slider from '../../components/slider/Slider';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay , Pagination } from 'swiper';

import TourData from '../../assets/database/tourData.json';
import CommentData from '../../assets/database/commentData.json';
import UserData from '../../assets/database/userData.json';

import CardComment from '../../components/card-comment/CardComment';
import CardTour from '../../components/card-tour/CardTour';
import CardUser from '../../components/card-user/CardUser';
import ImgModal from '../../assets/img/modal/h-skiing-video-1.jpg'
import Modal , {ModalContent} from '../../components/modal/Modal';
import 'swiper/css';
import './home.css'

const ModalVideo = () => {

  return (

      <Modal active={false} id = "modal-video">
       <ModalContent>
          <iframe src="https://www.youtube.com/embed/RYMGUvDL1To" width="1000px" height="550px" frameBorder="0"></iframe>
       </ModalContent>
      </Modal>
 
  )
}


const Home = () => {

  SwiperCore.use([Autoplay])
  SwiperCore.use([Pagination]);

  const openVideo = () => {
    const modalVideo = document.querySelector('#modal-video') ;
    modalVideo.classList.add('active');
  }

  
  return (
    <div className="home">
      <Slider />

      <div className="tour-list">
        <Swiper
            spaceBetween={25}
            slidesPerView={4}
            initialSlide={1}
            pagination={{
              clickable: true
            }}
            autoplay={{
              delay: 5000,
            }}      

          >
            {
              TourData.map((item , index ) => (
                <SwiperSlide key={index}>
                  <CardTour 
                      img = {item.img}
                      amount = {item.amount}
                      age_limit = {item.age_limit}
                      type_tour = {item.type_tour}
                      name_tour = {item.name_tour}
                      des = {item.des}
                      price = {item.price}
                      review = {item.review}
                    />
                </SwiperSlide>
              ))
            }
        </Swiper>
      </div>

      <div className="section tour-video">
            <div className="section__heading">
              <div className="section__heading-slogan">Try Now</div>
              <div className="section__heading-name">Winter Sports</div>
            </div>
            <div className="tour-video__content">
                <div className="tour-video__content-modal">
                  <img src={ImgModal} alt="" />
                  <div className="tour-video__content-play" onClick={openVideo}>
                    <i className="uil uil-play"></i>
                  </div>
                  <ModalVideo />
                </div>
                
                <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula 
                  eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis sit amet, 
                  consectetuer adipiscing elit Etiam rhoncus. Maecenas tempus, tellus eget
                  </span>

                <button>VIEW MORE</button>
            </div>
      </div>

      <div className="section tour-review">
            <div className="section__heading">
              <div className="section__heading-name txt-white">Top Reviews</div>
              <div className="section__heading-des txt-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum</div>
            </div>

            <div className="tour-review__comment">
              {
                <Swiper
                  spaceBetween={25}
                  slidesPerView={3}
                  initialSlide={1}
                  pagination={{
                    clickable: true
                  }}
                  autoplay={{
                    delay: 5000,
                  }}      

                >
                {
                  CommentData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <CardComment  
                          img = {item.img}
                          title_tour = {item.title_tour}
                          review = {item.review}
                          comment = {item.comment}
                          name = {item.name}
                                  />
                    </SwiperSlide>
                  ))
                }
                </Swiper>
              }
            </div>
              
      </div>

      <div className="section our-achievements">
          <div className="section__heading">
              <div className="section__heading-slogan">Try Now</div>
              <div className="section__heading-name ">Top Reviews</div>
          </div>
          <div className="achievements-user">
              {
               <Swiper
               slidesPerView={4}
               initialSlide={1}
               pagination={{
                 clickable: true
               }}
               autoplay={{
                 delay: 5000,
               }}      
             
             >
             {
               UserData.map((item,index) => (
                 <SwiperSlide key={index}>
                   <CardUser key={index}
                     avatar = {item.avatar} 
                     name = {item.name}
                     des = {item.des}
                     />
                 </SwiperSlide>
               ))
             }
             </Swiper>
              }
          </div>
          <div className="achievements-time">
                <div className="time-item">
                    <h1 className="counter" >450</h1>
                    <span>Tourists</span>
                </div>
                <div className="time-item">
                    <h1 className="counter" >120</h1>
                    <span>Years</span>
                </div>
                <div className="time-item">
                    <h1 className="counter" >283</h1>
                    <span>Cottages</span>
                </div>
                <div className="time-item">
                    <h1 className="counter" >197</h1>
                    <span>Restaurants</span>
                </div>
          </div>
      </div>

    </div>
  )
}



export default Home