import React from 'react';
import {useState} from 'react'
import Navbar from './components/Navbar'
import Artists from './components/Artists';
import './App.css';


function App() {
  const [artists, setArtists] = useState([
    { name: 'Powfu', songs: 'Snowflake', location: 'Vancouver', img: '/assets/images/powfu.jpeg', id: 1 },
    { name: 'Sarcastic Sound', songs: 'Laugh', location: 'Toronto', img: '/assets/images/linkin.jpeg', id: 2},
    { name: 'Linkin Park', songs: 'Numb', location: 'California', img: '/assets/images/sarcastic.jpeg', id: 3 }
]);
  return (
    <>
      <Navbar />
      <h1>Favourite Artists</h1>
      <Artists artists={artists} title="Artists"/>

    </>
  );
}

export default App;
