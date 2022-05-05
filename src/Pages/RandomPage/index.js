import React, {useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom'; 
const RandomPage = () => {
    const options = [
        "Powfu", 
        "Linkin Park",
         "Sarcastic Sound",
        "Ed Sheeran", 
        "Ariana Grande", 
        "Justin Bieber", 
        "Beyonce", 
        "Dua Lipa",
        "Kulpa", 
        "Joli",
        "Ays", 
        "Blu",
        "The Weeknd",
        "Keshi"
    ];
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1)
    }
    const [currentOption, setCurrentOption] = useState(options[1])
    function randomiseOption() {
        const newOption = options[Math.floor(Math.random() * options.length)];
        setCurrentOption(newOption);
    }

    return    <div class="random">
    <h1>Random Artist Suggestions</h1>
    <p>Click the button below to get a random artist to listen to:</p>
    <h2>{currentOption}</h2>
    <button onClick={randomiseOption}>Randomise!</button><br/>
    <button onClick={handleClick}>Back</button>
    </div>
}

export default RandomPage;
