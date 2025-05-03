import React, { useEffect, useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import '../css/opening.css'
import { Link } from 'react-router-dom';

const Opening = () => {

    const ScreenWidth = window.innerWidth

    return (
        <div
            className='openingContainer'
        >
            
            <div className='sloganContainer'>
                <h1
                    className='mg-b-10 fw'
                    style={{fontWeight:"500"}}
                >
                    CHUANG CHIH HUI
                </h1>
                <div>
                    <p>Surrealist Artist</p>
                    <p>Painting x Sculpture x Bronze x Mixed Media</p>
                </div>
            </div>

            {/* Explore Button */}
            <Link to={'/#homeExplore'} className='exploreContainer'>
                <div
                    className='exploreBtn'
                    style={{display:`${ScreenWidth<425 ? 'none' : ''}`}}
                >
                    <h4 style={{fontWeight:"400", marginRight:"40px"}}>EXPLORE</h4>
                    <FaChevronDown size={20} style={{fontWeight:"200"}}/>
                </div>
            </Link>

            {/* Background Opening Image  */}
            <div className="OpeningBG">
                <div
                    style={{
                        width:"100%",
                        height:"100%",
                        transition:"all 1s ease-in-out"
                    }}>
                </div>
            </div>
        </div>
    )
}

export default Opening