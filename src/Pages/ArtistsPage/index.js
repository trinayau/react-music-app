import React from 'react';
import {Outlet} from 'react-router-dom';
import {Artists} from '../../components'
const ArtistsPage = () => {
    return    <>
    <h1>Artists Of The Week</h1>
    <Outlet/>
    <Artists/>
 
    </>
}

export default ArtistsPage;
