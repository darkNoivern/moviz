import React from 'react'
import NoMovies from './NoMovies';
import Movie from './Movie';

const Favourites = (props) => {
    return (
        <>
            <div className="banner mt-lg-5 mt-3 mb-5 flexy">
                Favourites 💖
            </div>
            <div className="movies-display mt-lg-5 mt-3 flexy">
                <div className="row movie-list-row">
                    {
                        (props.list.length !== 0) ?
                            <Movie
                                from="favs"
                                data={props.list}
                                remFavs={props.remFavs} 
                                lonely={props.lonely}
                            />
                            :
                            <NoMovies />
                    }
                </div>
            </div>
        </>
    )
}

export default Favourites
