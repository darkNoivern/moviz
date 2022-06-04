import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
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

const FavMovie = (props) => {

    const remFavs = (movie) => {
        props.remFavs(movie)
    }

    const callSet = (movie) =>{
        props.lonely(movie);
    }
    
    return (
        <>
            <img onCLick={()=>{callSet(props.movie)}} src={props.movie.Poster} class="movie-img" alt="..." />
            <div className="overlay">
                <div className="movie-details mt-2 mb-2 text-center">
                    {props.movie.Title} ( {props.movie.Year} )
                </div>
                <div className="add-rem-buttons mb-1 d-flex justify-content-evenly align-items-center">
                    <Link exact to="/quanta">
                        <SelectButton className="open-btn" onClick={() => { callSet(props.movie) }}>
                            <FileOpenIcon />
                        </SelectButton>
                    </Link>
                    <DelButton className="btn-rem" onClick={() => { remFavs(props.movie) }}>
                        Remove from Favlist
                        <CrossEyes>
                            <CancelIcon />
                        </CrossEyes>
                    </DelButton>
                </div>
            </div>
        </>
    )
}

export default FavMovie
