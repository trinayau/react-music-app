import React from 'react';
import {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import Artists from './components/Artists';
import './App.css';
import axios from 'axios';



function App() {

const CLIENT_ID = 'b5a05f4e21b040c5827ba7d0847006c0'; // Your client id
var client_secret = '18d4260955b243af8ab0c65a82179f15'; // Your secret
const REDIRECT_URI = "http://localhost:8080"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"
const [token, setToken] = useState("")
const [searchKey, setSearchKey] = useState("")
const [artists, setArtists] = useState([])

// useEffect(() => {
//   const hash = window.location.hash
//   let token = window.localStorage.getItem("token")

//   if (!token && hash) {
//       token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

//       window.location.hash = ""
//       window.localStorage.setItem("token", token)
//   }

//   setToken(token)

// }, [])

// const logout = () => {
//   setToken("")
//   window.localStorage.removeItem("token")
// }

// const searchArtists = (e) => {
//   e.preventDefault()
//   async function loadArtists() {
//   const {data} = await axios.get("https://api.spotify.com/v1/search", {
//       headers: {
//           Authorization: `Bearer ${token}`
//       },
//       params: {
//           q: searchKey,
//           type: "artist"
//       }
//   })
// }

//   setArtists(data.artists.items)
// }

// const renderArtists = () => {
//   return artists.map(artist => (
//       <div key={artist.id}>
//           {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
//           {artist.name}
//       </div>
//   ))
// }

  return (
    <>
      <Navbar />
      <h1>Favourite Artists</h1>
      <Artists/>
      {/* <Artists title="Artists" artists={artists}/> */}
      {/* {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    : <button onClick={logout}>Logout</button>}

<form onSubmit={searchArtists}>
    <input type="text" onChange={e => setSearchKey(e.target.value)}/>
    <button type={"submit"}>Search</button>
</form> */}
    </>
  );

  // {renderArtists()}

}

export default App;
