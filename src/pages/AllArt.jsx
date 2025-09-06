import React from 'react'
import allArt from '../datas/artworks.json'
import { useTranslation } from 'react-i18next';

const AllArt = () => {
    const { i18n } = useTranslation();

    const artRender = allArt.map((art, index) => {
        return(
            <div style={{width:"15%"}} key={index}>
                <img src={art.img} alt="" style={{width:"100%"}}/>
                <div>
                    <h5>{i18n.language === 'en' && art.enName ? art.enName : art.name}</h5>
                    <h5>{art.size}   {art.mediums} {art.year}</h5>
                </div>
            </div>
        )
    })

    return (
        <div className='df jc-sb fl-wp'>
            {artRender}
        </div>
    )
}

export default AllArt