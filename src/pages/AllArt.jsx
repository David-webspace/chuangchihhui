import React from 'react'
import Allart from '../datas/artworks.json'

const AllArt = () => {

    const artRender = Allart.map((art, index) => {
        return(
            <div style={{width:"15%"}} key={index}>
                <img src={art.img} alt="" style={{width:"100%"}}/>
                <div>
                    <h5>{art.name}</h5>
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