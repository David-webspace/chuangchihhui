import { Link } from 'react-router-dom'
import artworks from '../../datas/artworks.json'
import { useTranslation } from 'react-i18next';
import '../../i18n';
import '../../css/artworkPeriod.css';

const Classics = () => {

  const ScreenWidth = window.innerWidth
  const { t, i18n } = useTranslation();

  const imgRender = (img_Id) => {
    const artwork = artworks[img_Id -= 1];
    if (!artwork) return null;

    return(
      <div style={{position:"relative"}} className='artworkPeriodItem'>
        <Link to={`/portfolio/artworks/${artwork.id}`} style={{height:"100%"}}>
          <img
            src={artworks[img_Id].thumbnail} alt="" 
            className='bx-sd-sm imgActive'
            style={{width:"100%", height:"100%"}}
          />
          <div className='thumbnailMask'>
            <div className=''>
              <h5 style={{marginBottom:'14.56px'}}>{i18n.language === 'en' && artwork.enName ? artwork.enName : artwork.name}</h5>
              <h5 style={{marginBottom:'14.56px'}}>{artwork.size} {i18n.language === 'en' && artwork.enMediums ? artwork.enMediums : artwork.mediums}</h5>
              <h5>{artwork.year}</h5>
            </div>
          </div>
        </Link>
      </div>
    )
  }

  return (
    <div className={`pd-xContainer`}>
      <h3 className='periodTitle' style={{marginBottom:'160px'}}>{t('各時期經典')}</h3>
      <div className='df jc-sb fl-wp'>
        {imgRender(82)}
        {imgRender(7)}
        {imgRender(40)}
        {imgRender(8)}
        {imgRender(86)}
        {imgRender(90)}
        {imgRender(39)}
        {imgRender(37)}
        {imgRender(25)}
        {imgRender(48)}
        {imgRender(65)}
        {imgRender(91)}
        {imgRender(113)}
        {imgRender(28)}
        {imgRender(115)}
        {imgRender(97)}
        {imgRender(117)}
        {imgRender(118)}
        {imgRender(96)}
        {imgRender(4)}
      </div>
    </div>
  )
}

export default Classics