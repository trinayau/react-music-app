import React, { useState } from 'react';

const Artists = ({title}) => {
    const [artists, setArtists] = useState([
        { name: 'Powfu', songs: 'Snowflake', location: 'Vancouver', img: '/assets/images/powfu.jpeg', id: 1 },
        { name: 'Sarcastic Sound', songs: 'Laugh', location: 'Toronto', img: '/assets/images/sarcastic.jpeg', id: 2},
        { name: 'Linkin Park', songs: 'Numb', location: 'California', img: '/assets/images/linkin.jpeg', id: 3 }
    ]);

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
