import React from 'react'
import Preface from '../components/Preface'
import preface_text from '../datas/preface_text.json'

const Events = () => {
  const ScreenWidth = window.innerWidth

  return (
    <div className='pd-xContainer'>
        {/* <Preface listings={preface_text}/> */}

        <div className={`${(1024<=ScreenWidth && ScreenWidth < 1960) ? '' : 'dn'}`}>
          {/* <ul className='df'>
              <a href='https://maps.app.goo.gl/A4tttWxRBfXKYTRf8' className='outerLink mg-r-30' target='_blank'><li>地址</li></a>
              <a href='https://www.instagram.com/sawago88/' className='outerLink mg-r-30' target='_blank'><li>IG</li></a>
              <a href='https://www.facebook.com/chc888' className='outerLink mg-r-30' target='_blank'><li>FB</li></a>
              <a href='https://youtu.be/aSooyTSjAh8?si=kG7R3wzFHLUqbYqg' className='outerLink mg-r-30' target='_blank'><li>紀錄片</li></a>
          </ul> */}
          <h2>Coming Soon!</h2>
        </div>
    </div>
  )
}

export default Events