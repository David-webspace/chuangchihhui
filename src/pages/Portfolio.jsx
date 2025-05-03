import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";

const Portfolio = ({ artworks = [] }) => {
  
  const ScreenWidth = window.innerWidth

  var settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5500
  };


  const periods = [
    "1986-2001", "2002-2019", "2020-2024", "無相之境"
  ]

  const [ periodId, setPeriodId ] = useState ('');

  const handlePeriod = (p) => {
    setPeriodId(p);
  }

  // Rendering the Img by Artwork Periods
  const artworksRender = ( startTime, endTime, cater ) => {

    return(

      <>
        <div className={`
          df fw jc-sb
          ${(1024<=ScreenWidth && ScreenWidth < 1960) ? '' : 'dn'}  
        `}>

          {artworks.map((artwork, index) => {
            if((artwork.classics)){
              if((artwork.year >= startTime && artwork.year < endTime) && (!cater) && (artwork.catergory!="無相之境")){
                return(
                  <div key={index}>
                    <div style={{height:'275px',marginBottom:'40px'}}>
                      <Link to={`/portfolio/artworks/${artwork.name}`}>
                        <img src={artwork.img} alt="" className='fh bd-r-sm bx-sd-sm'/>
                        {/* <div>
                          <img src={artwork.img} alt="" className='fh bd-r-sm bx-sd-sm'/>
                        </div> */}
                      </Link>
                    </div>
                    <div className=''>
                      <h5 style={{marginBottom:'14.56px'}}>{artwork.name}</h5>
                      <h5 style={{marginBottom:'14.56px'}}>{artwork.size} {artwork.mediums} {artwork.year}</h5>
                    </div>
                  </div>
                )
              }
              else if((artwork.catergory=="無相之境") && cater ){
                return(
                  <div key={index}>
                    <div style={{height:'360px',marginBottom:'80px'}}>
                      <Link to={`/portfolio/artworks/${artwork.id}`}>
                        <img src={artwork.img} alt="" className='fh bd-r-sm bx-sd-sm'/>
                      </Link>
                    </div>
                    <div className=''>
                      <h5 style={{marginBottom:'14.56px'}}>{artwork.name}</h5>
                      <h5 style={{marginBottom:'14.56px'}}>{artwork.size} {artwork.mediums} {artwork.year}</h5>
                    </div>
                  </div>
                )
              }
            }
            return null;
          })}

        </div>

        <div className={`
          df fw jc-sb
          ${(768<=ScreenWidth && ScreenWidth < 1024) ? '' : 'dn'}  
        `}>

          {artworks.map((artwork, index) => {
            if((artwork.classics)){
              if((artwork.year >= startTime && artwork.year < endTime) && (!cater) && (artwork.catergory!="無相之境")){
                return(
                  <div key={index}>
                    <div style={{height:'400px',marginBottom:'40px'}}>
                      <Link to={`/portfolio/artworks/${artwork.id}`}>
                        <img src={artwork.img} alt="" className='fh bd-r-sm bx-sd-sm'/>
                      </Link>
                    </div>
                    <div className=''>
                      <h5 style={{marginBottom:'14.56px'}}>{artwork.name}</h5>
                      <h5 style={{marginBottom:'14.56px'}}>{artwork.size}{artwork.mediums}{artwork.year}</h5>
                    </div>
                  </div>
                )
              }
              else if((artwork.catergory=="無相之境") && cater ){
                return(
                  <div key={index}>
                    <div style={{height:'400px',marginBottom:'80px'}}>
                      <Link to={`/portfolio/artworks/${artwork.id}`}>
                        <img src={artwork.img} alt="" className='fh bd-r-sm bx-sd-sm'/>
                      </Link>
                    </div>
                    <div className=''>
                      <h5 style={{marginBottom:'14.56px'}}>{artwork.name}</h5>
                      <h5 style={{marginBottom:'14.56px'}}>{artwork.size}{artwork.mediums}{artwork.year}</h5>
                    </div>
                  </div>
                )
              }
            }
            return null;
          })}

        </div>

        <div className={`
          df fw jc-sb
          ${(425<=ScreenWidth && ScreenWidth < 768) ? '' : 'dn'}  
        `}>

          {artworks.map((artwork, index) => {
            if((artwork.classics)){
              if((artwork.year >= startTime && artwork.year < endTime) && (!cater) && (artwork.catergory!="無相之境")){
                return(
                  <div key={index}>
                    <div style={{height:'400px',marginBottom:'40px'}}>
                      <Link to={`/portfolio/artworks/${artwork.id}`}>
                        <img src={artwork.img} alt="" className='fh bd-r-sm bx-sd-sm'/>
                      </Link>
                    </div>
                    <div className=''>
                      <h5 style={{marginBottom:'14.56px'}}>{artwork.name}</h5>
                      <h5 style={{marginBottom:'14.56px'}}>{artwork.size}{artwork.mediums}{artwork.year}</h5>
                    </div>
                  </div>
                )
              }
              else if((artwork.catergory=="無相之境") && cater ){
                return(
                  <div key={index}>
                    <div style={{height:'400px',marginBottom:'80px'}}>
                      <Link to={`/portfolio/artworks/${artwork.id}`}>
                        <img src={artwork.img} alt="" className='fh bd-r-sm bx-sd-sm'/>
                      </Link>
                    </div>
                    <div className=''>
                      <h5 style={{marginBottom:'14.56px'}}>{artwork.name}</h5>
                      <h5 style={{marginBottom:'14.56px'}}>{artwork.size}{artwork.mediums}{artwork.year}</h5>
                    </div>
                  </div>
                )
              }
            }
            return null;
          })}

        </div>

        <div className={`${(375<=ScreenWidth && ScreenWidth < 425) ? '' : 'dn'}`}>

          <Slider {...settings}>
            {artworks.map((artwork, index) => {
              if((artwork.classics)){
                if((artwork.year >= startTime && artwork.year < endTime) && (!cater) && (artwork.catergory!="無相之境")){
                  return(
                    <div key={index}>
                      <div style={{height:'400px',marginBottom:'40px'}}>
                        <Link to={`/portfolio/artworks/${artwork.id}`}>
                          <img src={artwork.img} alt="" className='fh bd-r-sm bx-sd-sm'/>
                        </Link>
                      </div>
                      <div className=''>
                        <h5 style={{marginBottom:'14.56px'}}>{artwork.name}</h5>
                        <h5 style={{marginBottom:'14.56px'}}>{artwork.size}{artwork.mediums}{artwork.year}</h5>
                      </div>
                    </div>
                  )
                }
                else if((artwork.catergory=="無相之境") && cater ){
                  return(
                    <div key={index}>
                      <div style={{height:'400px',marginBottom:'80px'}}>
                        <Link to={`/portfolio/artworks/${artwork.id}`}>
                          <img src={artwork.img} alt="" className='fh bd-r-sm bx-sd-sm'/>
                        </Link>
                      </div>
                      <div className=''>
                        <h5 style={{marginBottom:'14.56px'}}>{artwork.name}</h5>
                        <h5 style={{marginBottom:'14.56px'}}>{artwork.size}{artwork.mediums}{artwork.year}</h5>
                      </div>
                    </div>
                  )
                }
              }
              return null;
            })}
          </Slider>



        </div>
      
      
      </>

      
    )
  }

  return (
    <div>
      <h2 className='mg-b-30'>歷代平面經典總覽</h2>

      {/* 1986-2001 */}
      <div style={{marginBottom:'200px'}}>
        <Link to={`periods/${periods[0]}`} onClick={() => handlePeriod(periods[0])}>
          <h5 style={{marginBottom:'14.56px'}} className='mg-b-30 fw-b clr-black'>{periods[0]}</h5>
        </Link>
        {artworksRender(1986, 2001, false)}
      </div>

      {/* 2002-2019 */}
      <div style={{marginBottom:'200px'}}>
        <Link to={`periods/${periods[1]}`} onClick={() => handlePeriod(periods[1])}>
          <h5 style={{marginBottom:'14.56px'}} className='mg-b-30 fw-b clr-black'>{periods[1]}</h5>
        </Link>
        {artworksRender(2002, 2019, false)}
      </div>

      {/* 2020-2024 */}
      <div style={{marginBottom:'200px'}}>
        <Link to={`periods/${periods[2]}`} onClick={() => handlePeriod(periods[2])}>
          <h5 style={{marginBottom:'14.56px'}} className='mg-b-30 fw-b clr-black'>{periods[2]}</h5>
        </Link>
        {artworksRender(2020, 2024, false)}
      </div>

      {/* 無相之境 */}
      <div style={{marginBottom:'200px'}}>
        <Link to={`periods/${periods[3]}`} onClick={() => handlePeriod(periods[3])}>
          <h5 style={{marginBottom:'14.56px'}} className='mg-b-30 fw-b clr-black'>{periods[3]}</h5>
        </Link>
        {artworksRender(0, 0, true)}
      </div>
    </div>
  )
}

export default Portfolio