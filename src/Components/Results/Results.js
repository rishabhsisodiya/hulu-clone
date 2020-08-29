import React, { useState, useEffect } from 'react';
import './Results.css';
import VideoCard from './VideoCard/VideoCard';
import axios from '../../Request/axios';

function Results(props) {
    const [movies, setMovies] = useState([]);

    useEffect(() =>{
        async function fetchData(){
            const response = await axios.get(props.selectedGenre);
            setMovies(response.data.results);
            return response;
        }
        fetchData();
        // Remember to pass props.selectedGenre otherwise it will not render the component  on changing genre
    },[props.selectedGenre]);
return (
    <div className="results">
        {/* add key to videocard as you are rendering a list of component */}
        {movies.map(movie => ( 
        <VideoCard key={movie.id} movie={movie} />
        ))}
    </div>
);
}

export default Results;
