import React from 'react'
import { useParams } from 'react-router-dom'
import Period_1986_2001 from './Periods/Period_1986_2001'
import Period_2002_2019 from './Periods/Period_2002_2019'
import Period_2020_2024 from './Periods/Period_2020_2024'

const ArtworkPeriods = ({ artworks = []}) => {

  const { Period } = useParams();

  const imgRender = () =>{
    if(Period === '1986-2001'){
      return(
        <div>
          <Period_1986_2001 artworks={artworks}/>
        </div>
      )
    }
    else if(Period === '2001-2019'){
      return(
        <div>
          <Period_2002_2019 artworks={artworks}/>
        </div>
      )
    }
    else if(Period === '2020-2024'){
      return(
        <div>
          <Period_2020_2024 artworks={artworks}/>
        </div>
      )
    }
  }

  return(
    imgRender()
  )
  
}

export default ArtworkPeriods