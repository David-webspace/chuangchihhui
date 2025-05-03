import { Link } from 'react-router-dom'
// import thumbnails from '../../datas/thumbnails.json'
import artworks from '../../datas/artworks.json'
import { useTranslation } from 'react-i18next';
import '../../i18n';
const MuseumNational = () => {

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
              <h5>{artwork.size} {artwork.mediums} {artwork.year}</h5>
            </div>
          </div>
        </Link>
      </div>
    )
  }

  return (
    <div className={`${(1024<=ScreenWidth && ScreenWidth < 1960) ? '' : 'dn'} pd-xContainer`}>
      <h3 className='periodTitle' style={{marginBottom:'160px'}}>{t('國美館時期')}</h3>
      <div className='df jc-sb fl-wp'>
        {imgRender(24)}
        {imgRender(23)}
        {imgRender(22)}
        {imgRender(21)}
        {imgRender(14)}
        {imgRender(81)}
        {imgRender(79)}
        {imgRender(78)}
        {imgRender(80)}
        {imgRender(68)}
        {imgRender(69)}
        {imgRender(70)}
      </div>
    </div>
  )
}

export default MuseumNational