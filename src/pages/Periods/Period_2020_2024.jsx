import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";

const Period_2020_2024 = ({ artworks = [] }) => {

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

  const { ArtworkName } = useParams

  const imgRender = (img_Id, row) => {

    const artwork = artworks[img_Id -= 1];
    if (!artwork) return null;

    return(
      <div 
        className={`mg-b-300`}
        style={{marginBottom:'180px'}}
      >
        <Link to={`/portfolio/artworks/${artwork.name}`} className={{}}>
          <img
            src={artwork.img} alt={artwork.name} 
            className='bx-sd-sm imgActive trans-2 mg-b-50'
            style={{
              height: 
                row === 1 ? '' :
                row === 2 ? '' :
                row === 3 ? '480px' :
                row === 4 ? '450px' :
                row === 5 ? '480px' :
                row === 6 ? '480px' :
                (375<=ScreenWidth && ScreenWidth < 425) && row === 7 ? '400px' : '600px',
              width:
                row === 1 ? '100%' : 
                row === 2 ? '100%' : ''
            }
          }
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
      <div className={`fw ${(1024<=ScreenWidth && ScreenWidth < 1960) ? '' : 'dn'} `}>
        <h3 className='txt-aln-c periodTitle' style={{marginBottom:'200px'}}>2020-2024</h3>

        <div className='df jc-c'>
          {imgRender(38, 1)}
        </div>
        <div className='df jc-c'>
          {imgRender(39, 2)}
        </div>
        <div className='df jc-sb'>
          {imgRender(7, 3)}
          {imgRender(40, 3)}
        </div>
        <div className='df jc-c'>
          {imgRender(41,4)}
        </div>
        <div className='df jc-sb' style={{padding:'auto 200px'}}>
          {imgRender(42, 5)}
          {imgRender(43, 5)}
        </div>
        <div className='df jc-sb'>
          {imgRender(8, 6)}
          {imgRender(44, 6)}
        </div>
        <div className='df jc-c'>
          {imgRender(45, 7)}
        </div>
      </div>

      <div className={`fw ${(768<=ScreenWidth && ScreenWidth < 1024) ? '' : 'dn'} `}>
        <h3 className='txt-aln-c periodTitle' style={{marginBottom:'200px'}}>2020-2024</h3>

        <div className='df jc-c'>
          {imgRender(38, 1)}
        </div>
        <div className='df jc-c'>
          {imgRender(39, 2)}
        </div>
        <div className='df jc-sb'>
          {imgRender(7, 3)}
          {imgRender(40, 3)}
        </div>
        <div className='df jc-c'>
          {imgRender(41,4)}
        </div>
        <div className='df jc-sb'>
          {imgRender(42, 5)}
          {imgRender(43, 5)}
        </div>
        <div className='df jc-sb'>
          {imgRender(8, 6)}
          {imgRender(44, 6)}
        </div>
        <div className='df jc-c'>
          {imgRender(45, 7)}
        </div>
      </div>

      <div className={`fw ${(425<=ScreenWidth && ScreenWidth < 768) ? '' : 'dn'} `}>
        <h3 className='txt-aln-c periodTitle' style={{marginBottom:'200px'}}>2020-2024</h3>

        <div className='df jc-c'>
          {imgRender(38, 1)}
        </div>
        <div className='df jc-c'>
          {imgRender(39, 2)}
        </div>
        <div className='df jc-sb'>
          {imgRender(7, 3)}
          {imgRender(40, 3)}
        </div>
        <div className='df jc-c'>
          {imgRender(41,4)}
        </div>
        <div className='df jc-sb'>
          {imgRender(42, 5)}
          {imgRender(43, 5)}
        </div>
        <div className='df jc-sb'>
          {imgRender(8, 6)}
          {imgRender(44, 6)}
        </div>
        <div className='df jc-c'>
          {imgRender(45, 7)}
        </div>
      </div>

      <div className={`fw ${(375<=ScreenWidth && ScreenWidth < 425) ? '' : 'dn'} `}>
        <h3 className='txt-aln-c periodTitle' style={{marginBottom:'200px'}}>2020-2024</h3>

        <div className='df jc-c'>
          {imgRender(38, 1)}
        </div>
        <div className='df jc-c'>
          {imgRender(39, 2)}
        </div>
        <div className=''>
          <Slider {...settingsSlideOne}>
            {imgRender(7, 3)}
            {imgRender(40, 3)}
          </Slider>
        </div>
        <div className='df jc-c'>
          {imgRender(41,4)}
        </div>
        <div className=''>
          <Slider {...settingsSlideOne}>
            {imgRender(42, 5)}
            {imgRender(43, 5)}
          </Slider>
        </div>
        <div className=''>
          <Slider {...settingsSlideOne}>
            {imgRender(8, 6)}
            {imgRender(44, 6)}
          </Slider>
        </div>
        <div className='df jc-c'>
          {imgRender(45, 7)}
        </div>
      </div>

      <div className='df jc-c mg-b-300'>
        <Link to='/portfolio' className='NavLink trans-2'>
          <h4>歷代經典總覽</h4>
        </Link>
      </div>
    
    </>

  )
}

export default Period_2020_2024