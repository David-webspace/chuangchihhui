import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";


const Graphics_Creation = ({ graphicLink =[] }) => {

  const ScreenWidth = window.innerWidth

  var settingsFour = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  var settingsOne = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  const graphicRender = graphicLink.map((graphicItem, index) => {
    return(
      <div key={index} className='' style={{width:'100px', height:'300px'}}>
        <img src={graphicItem.img} alt="" className='bd-r fw'/>
      </div>
    )
  })

  return (
    <>
      <div className={`mb-b-box ${(1024<=ScreenWidth && ScreenWidth < 1960) ? '' : 'dn'}`}>
        <Slider {...settingsFour}>
          {graphicRender}
        </Slider>
      </div>

      <div className={`mb-b-box ${(375<=ScreenWidth && ScreenWidth < 425) ? '' : 'dn'}  `}>
      <Slider {...settingsOne}>
        {graphicRender}
      </Slider>
      </div>
    
    </>
  )
}

export default Graphics_Creation