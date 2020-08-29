import React from 'react'
import './Nav.css';
import requests from '../../Request/requests';

function Nav(props) {
    return (
        <div className="nav">
            <h2
            onClick={ ()=> props.setSelectedGenre(requests.fetchTrending)}
            >Trending</h2> 
            <h2
            onClick={ ()=> props.setSelectedGenre(requests.fetchTopRated)}
            >Top Rated</h2> 
            <h2
            onClick={ ()=> props.setSelectedGenre(requests.fetchActionMovies)}
            >Action</h2> 
            <h2 
            onClick={ ()=> props.setSelectedGenre(requests.fetchComedyMovies)}
            >Comedy</h2> 
            <h2
            onClick={ ()=> props.setSelectedGenre(requests.fetchHorrorMovies)}
            >Horror</h2> 
            <h2
            onClick={ ()=> props.setSelectedGenre(requests.fetchRomanceMovies)}
            >Romance</h2> 
            <h2
            onClick={ ()=> props.setSelectedGenre(requests.fetchMystery)}
            >Mystery</h2> 
            <h2
            onClick={ ()=> props.setSelectedGenre(requests.fetchSciFi)}
            >Sci-Fi</h2> 
            <h2
            onClick={ ()=> props.setSelectedGenre(requests.fetchWestern)}
            >Western</h2> 
            <h2
            onClick={ ()=> props.setSelectedGenre(requests.fetchAnimation)}
            >Animation</h2> 
            <h2
            onClick={ ()=> props.setSelectedGenre(requests.fetchTV)}
            >TV Movie</h2> 
        </div>
    )
}

export default Nav
