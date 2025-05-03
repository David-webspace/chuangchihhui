import { Link } from 'react-router-dom'
import artworks from '../../datas/artworks.json'
import { useTranslation } from 'react-i18next';
import '../../i18n';
const ModernStereo = () => {

  const ScreenWidth = window.innerWidth
  const { t, i18n } = useTranslation();

  const imgRender = (img_Id) => {
    const artwork = artworks[img_Id -= 1];
    if (!artwork) return null;

    return(
      <div style={{width:"22%", marginBottom:"100px", position:"relative"}}>
        <Link to={`/portfolio/artworks/${artwork.id}`} style={{height:"100%"}}>
          <img
            src={artworks[img_Id].thumbnail} alt="" 
            className='bx-sd-sm imgActive'
            style={{width:"100%", height:"100%"}}
          />
          <div className='thumbnailMask'>
            <div className=''>
              <h5 style={{marginBottom:'14.56px'}}>{artwork.name}</h5>
              <h5>{artwork.size}</h5>
              <h5> {artwork.mediums}</h5>
              <h5> {artwork.year}</h5>
            </div>
          </div>
        </Link>
      </div>
    )
  }

  

  return (
    <div className={`${(1024<=ScreenWidth && ScreenWidth < 1960) ? '' : 'dn'} pd-xContainer`}>
      <h3 className='periodTitle' style={{marginBottom:'160px'}}>{t('近代立體')}</h3>
      <div className='df jc-sb fl-wp'>
        {imgRender(119)}
        {imgRender(120)}
        {imgRender(121)}
        {imgRender(122)}
        {imgRender(123)}
        {imgRender(124)}
        {imgRender(125)}
        {imgRender(126)}
        {imgRender(127)}
        {imgRender(128)}
        {imgRender(129)}
        {imgRender(130)}
        {imgRender(131)}
        {imgRender(132)}
        {imgRender(133)}
        {imgRender(134)}
        {imgRender(135)}
        {imgRender(136)}
        {imgRender(137)}
        {imgRender(138)}
        {imgRender(139)}
        {imgRender(140)}
        {imgRender(141)}
        {imgRender(142)}
      </div>
    </div>
  )
}

export default ModernStereo