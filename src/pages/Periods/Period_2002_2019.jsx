import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";

const Period_2002_2019 = ({ artworks = [] }) => {

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

  var settingsSlideThree = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500
  };


  const imgRender = (img_Id, row) => {

    const artwork = artworks[img_Id -= 1];
    if (!artwork) return null;

    return(
      <div 
        className={`mg-b-300`}
        style={{
          marginBottom:`
            ${artwork.id===34 ? '30px' :
              artwork.id===36 ? '30px' :
              artwork.id===37 ? '30px' : '180px'}
        `}}
      >
        <Link to={`/portfolio/artworks/${artwork.name}`} className={{}}>
          <img
            src={artwork.img} alt={artwork.name} 
            className='bx-sd-sm imgActive trans-2 mg-b-50'
            style={{
              height: 
              row === 1 ? '300px' :
              row === 2 ? '480px' :
              row === 3 ? '480px' :
              row === 4 ? '480px' :
              row === 5 ? '480px' :
              row === 6 ? '360px' : '',
            }
          }
          />
        </Link>
        <div className={`${
          artwork.id===34 ? 'dn' :
          artwork.id===35 ? 'dn' :
          artwork.id===37 ? 'dn' : ''
        }`}>
          <h5 style={{marginBottom:'14.56px'}}>{artwork.name}</h5>
          <h5>{artwork.size} {artwork.mediums} {artwork.year}</h5>
        </div>
      </div>
    )
  }

  
  return (

    <>
      <div className={`fw ${(1024<=ScreenWidth && ScreenWidth < 1960) ? '' : 'dn'} `}>

        <h2 className='txt-aln-c periodTitle' style={{marginBottom:'200px'}}>2002-2019</h2>

        <div className='df jc-sb'>
          {imgRender(48, 1)}
          {imgRender(6, 1)}
          {imgRender(27, 1)}
        </div>
        <div className='df jc-sa'>
          {imgRender(5, 2)}
          {imgRender(4, 2)}
        </div>
        <div className='df jc-sa'>
          {imgRender(28, 3)}
          {imgRender(29, 3)}
          {imgRender(30, 3)}
        </div>
        <div className='df jc-c'>
          {imgRender(31,4)}
        </div>
        <div className='df jc-sa'>
          {imgRender(32, 5)}
          {imgRender(33, 5)}
        </div>
        <div className='df jc-c'>
          <div style={{width:'66%'}}>
            <div className='df jc-sb'>
              {imgRender(34, 6)}
              {imgRender(35, 6)}
            </div>
            <div className='df jc-sb'>
              {imgRender(36, 6)}
              {imgRender(37, 6)}
            </div>
          </div>
        </div>
      </div>

      <div className={`fw ${(768<=ScreenWidth && ScreenWidth < 1024) ? '' : 'dn'} `}>

        <h2 className='txt-aln-c periodTitle' style={{marginBottom:'200px'}}>2002-2019</h2>

        <div className='df jc-sb'>
          {imgRender(48, 1)}
          {imgRender(6, 1)}
          {imgRender(27, 1)}
        </div>
        <div className='df jc-sa'>
          {imgRender(5, 2)}
          {imgRender(4, 2)}
        </div>
        <div className='df jc-sa'>
          {imgRender(28, 3)}
          {imgRender(29, 3)}
          {imgRender(30, 3)}
        </div>
        <div className='df jc-c'>
          {imgRender(31,4)}
        </div>
        <div className='df jc-sa'>
          {imgRender(32, 5)}
          {imgRender(33, 5)}
        </div>
        <div className='df jc-c'>
          <div style={{width:'66%'}}>
            <div className='df jc-sb'>
              {imgRender(34, 6)}
              {imgRender(36, 6)}
            </div>
            <div className='df jc-sb'>
              {imgRender(35, 6)}
              {imgRender(37, 6)}
            </div>
          </div>
        </div>
      </div>

      <div className={`fw ${(425<=ScreenWidth && ScreenWidth < 768) ? '' : 'dn'} `}>

        <h2 className='txt-aln-c periodTitle' style={{marginBottom:'200px'}}>2002-2019</h2>

        <div className='df jc-sb'>
          {imgRender(48, 1)}
          {imgRender(6, 1)}
          {imgRender(27, 1)}
        </div>
        <div className='df jc-sa'>
          {imgRender(5, 2)}
          {imgRender(4, 2)}
        </div>
        <div className='df jc-sa'>
          {imgRender(28, 3)}
          {imgRender(29, 3)}
          {imgRender(30, 3)}
        </div>
        <div className='df jc-c'>
          {imgRender(31,4)}
        </div>
        <div className='df jc-sa'>
          {imgRender(32, 5)}
          {imgRender(33, 5)}
        </div>
        <div className='df jc-c'>
          <div style={{width:'66%'}}>
            <div className='df jc-sb'>
              {imgRender(34, 6)}
              {imgRender(36, 6)}
            </div>
            <div className='df jc-sb'>
              {imgRender(35, 6)}
              {imgRender(37, 6)}
            </div>
          </div>
        </div>
      </div>

      <div className={`fw ${(375<=ScreenWidth && ScreenWidth < 425) ? '' : 'dn'} `}>

        <h2 className='txt-aln-c periodTitle' style={{marginBottom:'200px'}}>2002-2019</h2>

        <div className=''>
          <Slider {...settingsSlideOne}>
            {imgRender(48, 1)}
            {imgRender(6, 1)}
            {imgRender(27, 1)}
          </Slider>
        </div>
        <div className=''>
          <Slider {...settingsSlideOne}>
            {imgRender(5, 2)}
            {imgRender(4, 2)}
          </Slider>
        </div>
        <div className=''>
          <Slider {...settingsSlideThree}>
            {imgRender(28, 3)}
            {imgRender(29, 3)}
            {imgRender(30, 3)}
          </Slider>
        </div>
        <div className='df jc-c'>
          {imgRender(31,4)}
        </div>
        <div className=''>
          <Slider {...settingsSlideOne}>
            {imgRender(32, 5)}
            {imgRender(33, 5)}
          </Slider>
        </div>
        <div className=''>
          <Slider {...settingsSlideOne}>
            {imgRender(34, 6)}
            {imgRender(36, 6)}
            {imgRender(35, 6)}
            {imgRender(37, 6)}
          </Slider>
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

export default Period_2002_2019