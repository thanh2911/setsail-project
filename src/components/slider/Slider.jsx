import React , {useEffect} from 'react' ;
import './slider.css' ;
import sliderData from '../../assets/database/sliderData.json'

const Slider = () => {

    useEffect(() => {
        const sliderItems = document.querySelectorAll('.slider__item');
        const btnPrev = document.querySelector('.prev-slider');
        const btnNext = document.querySelector('.next-slider');
        const lengthSlider = sliderItems.length;
        let index = 0;

        btnNext.onclick = () => {
            handleSilder(1);
        }
        
        btnPrev.onclick = () => {
            handleSilder(-1);
        }
        

        const handleSilder = (n) => {
            if(n===1) {
                index++;
                if(index >= lengthSlider) {
                    index = 0 ;
                }
        
                slider_add_remove(index);
            }
        
            else {
                index--;
                if(index < 0) {
                    index = lengthSlider-1 ;
                }
        
                slider_add_remove(index);
            }
        }

        const slider_add_remove = function(index) {
            sliderItems.forEach((item,i) => {
                if(i===index){
                    item.classList.add('open')     
                }
                else
                item.classList.remove('open')
            })
        }
        
        const autoSilder = () => {
            setInterval(() => {
                handleSilder(1);
            
            }, 6000);
        }
        autoSilder();

}, [])
    

  return (
    <div className='slider'>
        <div className="slider-wrapper">
            {
                sliderData.map((item , index) => (
                    <div className={`slider__item ${index===0 ? 'open' : ''}` }
                        key={index} >
                        <img src={item.background} alt="" />
                        <div className="slider__item-text">
                            <div className="slider__item-slogan">{item.slogan}</div>
                            <div className="slider__item-title">{item.title}</div>
                            <div className="slider__item-des">{item.des}</div>
                        </div>
                    </div>
                ))
            }
            <div className="prev-slider" ><i className="uil uil-angle-left"></i></div>
            <div className="next-slider" ><i className="uil uil-angle-right"></i></div>
        </div>
        
    </div>
   
  )
}

export default Slider