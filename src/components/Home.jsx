import React from 'react'
import "./style.css"
import Movie from './Movie';
import NoMovies from './NoMovies';

const Home = (props) => {

    const searchMovie = (event) => {
        props.setMovieName(event.target.value);
    } 

    const searchMoviesBtn = () => {
        props.setMovieName(document.querySelector(".form-control").value);
    }

    return (
        <>
            <div className="background bg-dark">

                <div className="search-section me-4 ms-4 pt-lg-5 pt-3 pb-lg-5 pb-3 mb-lg-0 mb-4 flexy">
                    <input onChange={searchMovie} value={props.movieName} type="text" className="form-control me-2" placeholder="Search Movie ...." />
                    <button onClick={searchMoviesBtn} className="btn btn-success">Search</button>
                </div>
                <div className="movies-display mt-lg-5 mt-3 flexy">
                    <div className="row movie-list-row">
                    {
                        props.data!==undefined ? 
                        <Movie from="home" 
                            data={props.data} 
                            addFavs={props.addFavs} 
                            addWatchs={props.addWatchs} 
                            favSet={props.favSet} 
                            watchSet={props.watchSet} 
                            remFavs={props.remFavs}
                            remWatchs={props.remWatchs}
                            lonely={props.lonely} />
                        :
                        <NoMovies />
                    }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
