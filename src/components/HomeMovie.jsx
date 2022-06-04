import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { IconButton } from '@mui/material';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import "./style.css";

const SelectButton = styled(IconButton)({
    color: '#ffffff',
});

const HomeMovie = (props) => {

    let fav = props.favSet.includes(props.movie.imdbID);
    let watch = props.watchSet.includes(props.movie.imdbID);

    const addWatchs = (movie) => {
        props.addWatchs(movie);
    }

    const remWatchs = (movie) => {
        props.remWatchs(movie);
    }

    const addFavs = (movie) => {
        props.addFavs(movie);
    }
    const remFavs = (movie) => {
        props.remFavs(movie);
    }

    const callSet = (movie) => {
        props.lonely(movie);
    }

    return (
        <>

            <img src={props.movie.Poster} class="movie-img" alt="..." />
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
                    {
                        watch === true ?
                            <IconButton
                                color="primary"
                                onClick={() => { remWatchs(props.movie) }}>
                                <VisibilityIcon />
                            </IconButton>
                            :
                            <SelectButton
                                onClick={() => { addWatchs(props.movie) }}>
                                <VisibilityIcon />
                            </SelectButton>
                    }
                    {
                        fav === true ?
                            <IconButton
                                color="error"
                                onClick={() => { remFavs(props.movie) }}>
                                <FavoriteIcon />
                            </IconButton>
                            :
                            <SelectButton
                                onClick={() => { addFavs(props.movie) }}>
                                <FavoriteIcon />
                            </SelectButton>
                    }

                </div>
            </div>
        </>
    )
}

export default HomeMovie
