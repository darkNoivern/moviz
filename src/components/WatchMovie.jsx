import React from 'react'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button, IconButton } from '@mui/material';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import "./style.css";

const SelectButton = styled(IconButton)({
    color: '#ffffff',
});

const DelButton = styled(Button)({
    color: '#ffffff',
});

const CrossEyes = styled(IconButton)({
    color: '#ffffff',
});

const WatchMovie = (props) => {

    const remWatchs = (movie) => {
        props.remWatchs(movie)
    }

    const callSet = (movie) => {
        props.lonely(movie);
    }

    return (
        <>
            <img onCLick={() => { callSet(props.movie) }} src={props.movie.Poster} class="movie-img" alt="..." />
            <div className="overlay">
                <div className="movie-details mt-2 text-center mb-2">
                    {props.movie.Title} ( {props.movie.Year} )
                </div>
                <div className="add-rem-buttons mb-1 d-flex justify-content-evenly align-items-center">
                    <Link exact to="/quanta">
                        <SelectButton className="open-btn" onClick={() => { callSet(props.movie) }}>
                            <FileOpenIcon />
                        </SelectButton>
                    </Link>
                    <DelButton className="btn-rem" onClick={() => { remWatchs(props.movie) }}>
                        Remove from Watchlist
                        <CrossEyes>
                            <VisibilityOffIcon />
                        </CrossEyes>
                    </DelButton>
                </div>
            </div>
        </>
    )
}

export default WatchMovie
