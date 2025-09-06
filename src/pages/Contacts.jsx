import React from 'react'
import '../i18n'
import { IoLocationSharp, IoLogoInstagram, IoLogoFacebook, IoLogoYoutube } from "react-icons/io5";
import '../css/contacts.css'
import { useTranslation } from 'react-i18next'

const Contacts = () => {

  const { t, i18n } = useTranslation()
  const ScreenWidth = window.innerWidth

  const locationLink = 'https://maps.app.goo.gl/A4tttWxRBfXKYTRf8'
  const instagramLink = 'https://www.instagram.com/sawago88/'
  const facebookLink = 'https://www.facebook.com/chc888'
  const youtubeLink = 'https://youtu.be/aSooyTSjAh8?si=kG7R3wzFHLUqbYqg'


  return (
    <div className='df Container'>
      {/* <div
        style={{
          position:"absolute",
          top:"0",
          left:"0",
          width:"30%",
          padding:"80px 0 30px",
          height:"100vh"
      }}>
        <img src="https://live.staticflickr.com/65535/54335803969_1ed681be69_w.jpg" alt="" style={{height:"100%"}}/>
      </div> */}
      <div className='contactTxtContainer'>
        <div>
          <h1 className='fw-b' style={{marginBottom:'20px'}}>{t('聯繫我們')}</h1>
          <h1 className='fw-b' style={{marginBottom:'80px'}}>{t('歡迎合作邀約')}</h1>
          <div style={{marginBottom:'80px'}}>
            <h3 className='mg-b-20'>{t('聯絡窗口：楊素敏小姐')}</h3>
            <h3 className='mg-b-20'>{t('聯絡電話：０９１１８６８６４９')}</h3>
            <h3 className='mg-b-20'>{t('工作室地址：新竹市東區學府路１９號')}</h3>
            <h3 className='mg-b-20'>{t('Email：yamifilm@gmail.com')}</h3>
          </div>
        </div>

        {/* Social Media */}
        <>
          <div className={`${(1024<=ScreenWidth && ScreenWidth < 1960) ? '' : 'dn'}`}>
            <ul className='df'>
              <a href={locationLink} className='mediaLink' target='_blank'><li><IoLocationSharp size={20}/></li></a>
              <a href={instagramLink} className='mediaLink' target='_blank'><li><IoLogoInstagram size={20}/></li></a>
              <a href={facebookLink} className='mediaLink' target='_blank'><li><IoLogoFacebook size={20}/></li></a>
              <a href={youtubeLink} className='mediaLink' target='_blank'><li><IoLogoYoutube size={20}/></li></a>
            </ul>
          </div>

          <div className={`${(768<=ScreenWidth && ScreenWidth < 1024) ? '' : 'dn'}`}>
            <ul className='df txt-aln-c'>
              <a href='https://maps.app.goo.gl/A4tttWxRBfXKYTRf8' style={{width:'100%'}} className='mediaLink mg-r-30 mg-b-20 db' target='_blank'><li>{t('地址')}</li></a>
              <a href='https://www.instagram.com/sawago88/' style={{width:'100%'}} className='mediaLink mg-r-30 mg-b-20 db' target='_blank'><li>{t('IG')}</li></a>
              <a href='https://www.facebook.com/chc888' style={{width:'100%'}} className='mediaLink mg-r-30 mg-b-20 db' target='_blank'><li>{t('FB')}</li></a>
              <a href='https://youtu.be/aSooyTSjAh8?si=kG7R3wzFHLUqbYqg' style={{width:'100%'}} className='mediaLink mg-r-30 mg-b-20 db' target='_blank'><li>{t('紀錄片')}</li></a>
            </ul>
          </div>

          <div className={`${(425<=ScreenWidth && ScreenWidth < 768) ? '' : 'dn'}`}>
            <ul className='txt-aln-c'>
              <a href='https://maps.app.goo.gl/A4tttWxRBfXKYTRf8' style={{width:'100%'}} className='mediaLink mg-b-20 db' target='_blank'><li>{t('地址')}</li></a>
              <a href='https://www.instagram.com/sawago88/' style={{width:'100%'}} className='mediaLink mg-b-20 db' target='_blank'><li>{t('IG')}</li></a>
              <a href='https://www.facebook.com/chc888' style={{width:'100%'}} className='mediaLink mg-b-20 db' target='_blank'><li>{t('FB')}</li></a>
              <a href='https://youtu.be/aSooyTSjAh8?si=kG7R3wzFHLUqbYqg' style={{width:'100%'}} className='mediaLink mg-b-20 db' target='_blank'><li>{t('紀錄片')}</li></a>
            </ul>
          </div>

          <div className={`${(375<=ScreenWidth && ScreenWidth < 425) ? '' : 'dn'}`}>
            <ul className='txt-aln-c'>
              <a href='https://maps.app.goo.gl/A4tttWxRBfXKYTRf8' style={{width:'100%'}} className='mediaLink mg-b-20 db' target='_blank'><li>{t('地址')}</li></a>
              <a href='https://www.instagram.com/sawago88/' style={{width:'100%'}} className='mediaLink mg-b-20 db' target='_blank'><li>{t('IG')}</li></a>
              <a href='https://www.facebook.com/chc888' style={{width:'100%'}} className='mediaLink mg-b-20 db' target='_blank'><li>{t('FB')}</li></a>
              <a href='https://youtu.be/aSooyTSjAh8?si=kG7R3wzFHLUqbYqg' style={{width:'100%'}} className='mediaLink mg-b-20 db' target='_blank'><li>{t('紀錄片')}</li></a>
            </ul>
          </div>
        </>
      </div>

    </div>
  )
}

export default Contacts