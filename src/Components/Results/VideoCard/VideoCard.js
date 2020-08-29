import React from 'react';
import './VideoCard.css';
import TextTruncate from 'react-text-truncate';
import ThumbUpSharp  from '@material-ui/icons/ThumbUpSharp';

const base_url = "https://image.tmdb.org/t/p/original";

function VideoCard(props) {
    return (
        <div className="videoCard">
            <img 
            src={`${base_url}${props.movie.backdrop_path || props.movie.poster_path}` } 
            alt="movie poster"
            />
            {/* When some description is long we can truncate and add ... for extra */}
            <TextTruncate 
            line={1}
            element="p"
            truncateText="..."
            text={props.movie.overview}
            />
            <h2>{props.movie.title || props.movie.original_name}</h2>
            <p className="videoCard__stats">
                {props.movie.media_type && `${props.movie.media_type} ● `}
                {props.movie.release_date || props.movie.first_air_date} ●            
                <ThumbUpSharp />{" "}
                {props.movie.vote_count}
            </p>
        </div>
    )
}

export default VideoCard;
