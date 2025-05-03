import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";

const Period_1986_2001 = ({ artworks = [] }) => {

  const ScreenWidth = window.innerWidth

  var settingsSlideOne = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500
  };

  var settingsSlideTwo = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500
  };


  const imgRender = (img_Id, row) => {

    const artwork = artworks[img_Id -= 1];
    if (!artwork) return null;

    return(
      <div className='mg-b-300'>
        <Link to={`/portfolio/artworks/${artwork.name}`} style={{marginBottom:'300px'}}>
          <img
            src={artworks[img_Id].img} alt="" 
            className='bx-sd-sm imgActive trans-2 mg-b-50'
            style={{
              height: 
                row === 1 ? '450px' :
                row === 2 ? '400px' :
                row === 3 ? '220px' :
                row === 4 ? '280px' :
                (1250<=ScreenWidth && ScreenWidth < 1440) && row === 4 ? '220px' :
                (1024<=ScreenWidth && ScreenWidth < 1250) && row === 4 ? '160px' :
                row === 5 ? '360px' :
                (768<=ScreenWidth && ScreenWidth < 1024) && row === 3 ? '200px' :
                (375<=ScreenWidth && ScreenWidth < 425) && row === 6 ? '300px' : '360px',
              width:
                (375<=ScreenWidth && ScreenWidth < 425) && row === 2 ? '100%' : 
                (375<=ScreenWidth && ScreenWidth < 425) && row === 3 ? '100%' : 
                (375<=ScreenWidth && ScreenWidth < 425) && row === 4 ? '100%' : ''
            }}
          />
        </Link>
        <div className=''>
          <h5 style={{marginBottom:'14.56px'}}>{artwork.name}</h5>
          <h5>{artwork.size} {artwork.mediums} {artwork.year}</h5>
        </div>
      </div>
    )
  }

  
  return (

    <>
      <div className={`${(1024<=ScreenWidth && ScreenWidth < 1960) ? '' : 'dn'} `}>
      
        <h3 className='txt-aln-c periodTitle' style={{marginBottom:'200px'}}>1986-2001</h3>

        <div className='df jc-c'>
          {imgRender(14, 1)}
        </div>
        <div className='df jc-sa'>
          {imgRender(15, 2)}
          {imgRender(16, 2)}
        </div>
        <div className='df jc-sb'>
          {imgRender(17, 3)}
          {imgRender(2, 3)}
          {imgRender(3, 3)}
        </div>
        <div className='df jc-sb'>
          {imgRender(1,4)}
          {imgRender(18,4)}
          {imgRender(19,4)}
          {imgRender(20,4)}
        </div>
        <div className='df jc-sa'>
          {imgRender(21, 5)}
          {imgRender(22, 5)}
          {imgRender(23, 5)}
          {imgRender(24, 5)}
        </div>
        <div className='df jc-c'>
          {imgRender(25, 6)}
        </div>
      </div>

      <div className={`${(768<=ScreenWidth && ScreenWidth < 1024) ? '' : 'dn'} `}>

        <h2 className='txt-aln-c periodTitle' style={{marginBottom:'200px'}}>1986-2001</h2>

        <div className='df jc-c'>
          {imgRender(14, 1)}
        </div>
        <div className='df jc-sa'>
          {imgRender(15, 2)}
          {imgRender(16, 2)}
        </div>
        <div className='df jc-sb'>
          {imgRender(17, 3)}
          {imgRender(2, 3)}
          {imgRender(3, 3)}
        </div>
        <div className='df jc-sb'>
          {imgRender(1,4)}
          {imgRender(18,4)}
          {imgRender(19,4)}
          {imgRender(20,4)}
        </div>
        <div className='df jc-sa'>
          {imgRender(21, 5)}
          {imgRender(22, 5)}
          {imgRender(23, 5)}
          {imgRender(24, 5)}
        </div>
        <div className='df jc-c'>
          {imgRender(25, 6)}
        </div>
      </div>

      <div className={`${(425<=ScreenWidth && ScreenWidth < 768) ? '' : 'dn'} `}>

        <h2 className='txt-aln-c periodTitle' style={{marginBottom:'200px'}}>1986-2001</h2>

        <div className='df jc-c'>
          {imgRender(14, 1)}
        </div>
        <div className='df jc-sa'>
          {imgRender(15, 2)}
          {imgRender(16, 2)}
        </div>
        <div className='df jc-sb'>
          {imgRender(17, 3)}
          {imgRender(2, 3)}
          {imgRender(3, 3)}
        </div>
        <div className='df jc-sb'>
          {imgRender(1,4)}
          {imgRender(18,4)}
          {imgRender(19,4)}
          {imgRender(20,4)}
        </div>
        <div className='df jc-sa'>
          {imgRender(21, 5)}
          {imgRender(22, 5)}
          {imgRender(23, 5)}
          {imgRender(24, 5)}
        </div>
        <div className='df jc-c'>
          {imgRender(25, 6)}
        </div>
      </div>

      <div className={`${(375<=ScreenWidth && ScreenWidth < 425) ? '' : 'dn'} `}>
        <h2 className='txt-aln-c periodTitle' style={{marginBottom:'200px'}}>1986-2001</h2>

        <div className='df jc-c'>
          {imgRender(14, 1)}
        </div>
        <div className=''>
          <Slider {...settingsSlideOne}>
            {imgRender(15, 2)}
            {imgRender(16, 2)}
          </Slider>
        </div>
        <div className=''>
          <Slider {...settingsSlideOne}>
            {imgRender(17, 3)}
            {imgRender(2, 3)}
            {imgRender(3, 3)}
          </Slider>
        </div>
        <div className=''>
          <Slider {...settingsSlideOne}>
            {imgRender(1,4)}
            {imgRender(18,4)}
            {imgRender(19,4)}
            {imgRender(20,4)}
          </Slider>
        </div>
        <div className=''>
          <Slider {...settingsSlideTwo}>
            {imgRender(21, 5)}
            {imgRender(22, 5)}
            {imgRender(23, 5)}
            {imgRender(24, 5)}
          </Slider>
        </div>
        <div className='df jc-c'>
          {imgRender(25, 6)}
        </div>
      </div>

      <div className='df jc-c mg-b-300'>
        <Link to='/portfolio' className='NavLink trans-2'>
          <h3>歷代經典總覽</h3>
        </Link>
      </div>
    
    </>

  )
}

export default Period_1986_2001