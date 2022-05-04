import React from 'react';

const Artists = ({artists, title}) => {
    return(
        <div className='artist-list'>
    <h2>{title}</h2>
    {artists.map((artist) => (
        <div className="artist-preview" key={artist.id}>
                    <h2>{ artist.name }</h2>
                    <p>Favourite songs: { artist.songs }</p>
                    <p>Artist is from: {artist.location}</p>
                    <img src={window.location.origin + artist.img} alt="artist cover"/>
                </div>
    ))
    }    
    </div>
    );
}

export default Artists;
