import { Link } from 'react-router-dom'
import artworks from '../../datas/artworks.json'
import { useTranslation } from 'react-i18next';
import '../../i18n';
import '../../css/artworkPeriod.css';

const NoXiangFeild = () => {

  const ScreenWidth = window.innerWidth;
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
      <h3 className='periodTitle' style={{marginBottom:'160px'}}>{t('尋找內心的名牌')}</h3>
      <div className='df jc-sb fl-wp'>
        {imgRender(50)}
        {imgRender(55)}
        {imgRender(54)}
        {imgRender(58)}
        {imgRender(12)}
        {imgRender(83)}
        {imgRender(57)}
        {imgRender(56)}
        {imgRender(11)}
        {imgRender(9)}
        {imgRender(60)}
        {imgRender(59)}
      </div>
    </div>
  )
}

export default NoXiangFeild