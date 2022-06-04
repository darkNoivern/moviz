import React from 'react'
import NoMovies from './NoMovies';
import Movie from './Movie';

const WatchList = (props) => {
    return (
        <>
        <div className="banner mt-lg-5 mt-3 mb-5 flexy">
                WatchList 👀
            </div>
            <div className="movies-display mt-lg-5 mt-3 flexy">
                <div className="row movie-list-row">
                    {
                        props.list.length !== 0 ? 
                            <Movie 
                            from="watchs" 
                            remWatchs={props.remWatchs}
                            lonely={props.lonely}
                            data={props.list} />
                            :
                            <NoMovies />
                    }
                </div>
            </div> 
        </>
    )
}

export default WatchList
