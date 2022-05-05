import React from 'react';
import {useParams, useNavigate} from 'react-router-dom'; 

const ArtistPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1)
    }
    return    <>
    <h1>I display information about { id }!</h1>
    <button onClick={handleClick}>Back</button>
    </>
}

export default ArtistPage;
