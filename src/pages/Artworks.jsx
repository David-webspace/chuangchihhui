import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../css/artworkPage.css';

const ArtworkDetails = ({ artwork }) => {
    return (
        <div className='df fd-c jc-c artworkDetail'>
            <h3 className='mg-b-30'>{artwork.name}</h3>
            <ul className='mg-b-30'>
            {[
                { label: '尺寸', value: artwork.size },
                { label: '媒材', value: artwork.mediums },
                { label: '年份', value: artwork.year }
            ].map(({ label, value }) => (
                <span key={label} className='df'>
                    <li className='mg-b-5'>{label}：</li>
                    <li className='lt-sc'>{value}</li>
                </span>
            ))}
            </ul>
            {/* <Link to='/portfolio/artworks' className='trans-2 button'>同期作品</Link> */}
        </div>
    );
};

const ArtworkImage = ({ img, series, alt }) => (
    <div
        className={`
            df jc-c
            ${series === 'modernStereo' || series === 'earlyStereo' ? 'bd-r-sm bx-sd-sm fh' : ''}
        `}
        style={{
            width:'100%',
            height:'500px',
            backgroundImage:`url(${img})`,
            backgroundSize:"contain",
            backgroundRepeat:"no-repeat",
            backgroundPosition:"center center"
        }}
    >
        {/* <img src={img} alt={alt} className='bd-r-sm bx-sd-sm fh'/> */}
    </div>
);

const ResponsiveArtworkView = ({ artwork, screenWidth }) => {
    const layouts = {
        desktop: {
            condition: screenWidth >= 1024 && screenWidth < 1960,
            containerClass: 'df jc-sb fw mg-b-lg',
            imageWidth: '60%'
        },
        tablet: {
            condition: screenWidth >= 768 && screenWidth < 1024,
            containerClass: 'df jc-sb fw mg-b-lg',
            imageWidth: '100%'
        },
        mobile: {
            condition: screenWidth >= 375 && screenWidth < 768,
            containerClass: 'df fw mg-b-lg fd-c',
            imageWidth: '100%'
        }
    };

    const currentLayout = Object.values(layouts).find(layout => layout.condition);

    if (!currentLayout) return null;

    return (
        <div className={`${currentLayout.containerClass} ${currentLayout.condition ? '' : 'dn'}`}>
            <div style={{width: currentLayout.imageWidth}}>
                <ArtworkImage img={artwork.img} series={artwork.series} alt={artwork.alt}/>
            </div>
            <ArtworkDetails artwork={artwork} />
        </div>
    );
};

const SimilarArtworks = ({ artworks, currentArtworkId }) => {
    const currentArtwork = artworks[currentArtworkId];
    if (!currentArtwork) return null;
    
    // Check if there are no similar artworks
    if (!currentArtwork.similarArt || currentArtwork.similarArt.length === 0) {
        return (
            <div>
                <h3 className='mg-b-30'>相似作品</h3>
                <h4 style={{color:"var(--grey-2)"}}>暫無相似作品</h4>
            </div>
        );
    }

    return (
        <div>
            <h3 className='mg-b-30'>相似作品</h3>
            <div className='similarArtworkContainer'>
                {currentArtwork.similarArt.map((similarId, index) => {
                    
                    const similarArtwork = artworks[similarId - 1];
                    if (!similarArtwork) return null;

                    return (
                        <div key={index} className='mg-b-30 similarArtworkItem' style={{height:'160px'}}>
                            <Link to={`/portfolio/artworks/${similarArtwork.id}`} style={{height:"100%"}}>
                                <img
                                    src={similarArtwork.thumbnail} 
                                    alt={similarArtwork.alt}
                                    className='bx-sd-sm fh imgActive trans-2'
                                    style={{height:"100%"}}
                                />
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const Artworks = ({ artworks = [] }) => {
    const { ArtworkID } = useParams();
    const screenWidth = window.innerWidth;
  
    const currentArtworkId = artworks.findIndex(artwork => artwork.id === parseInt(ArtworkID));
    const currentArtwork = artworks[currentArtworkId];

    // if (!currentArtwork) return <div className='xContainer'>Artwork not found</div>;

    return (
        <div className='pd-xContainer'>
            <ResponsiveArtworkView 
                artwork={currentArtwork} 
                screenWidth={screenWidth} 
            />
            <SimilarArtworks 
                artworks={artworks} 
                currentArtworkId={currentArtworkId} 
            />
        </div>
    );
};

export default Artworks;
