import React from 'react'
import "./style.css"
import HomeMovie from './HomeMovie'
import FavMovie from './FavMovie'
import WatchMovie from './WatchMovie'

const Movie = (props) => {
    return (
        <>
            {
                props.data.map((movie, index) => {
                    return (
                        <div className="img-container col col-lg-3 col-md-6 col-12 d-flex justify-content-center mb-5">
                            {
                                (props.from === "home") ?
                                    <HomeMovie
                                        movie={movie}
                                        addFavs={props.addFavs}
                                        addWatchs={props.addWatchs}
                                        favSet={props.favSet}
                                        watchSet={props.watchSet}
                                        remFavs={props.remFavs}
                                        remWatchs={props.remWatchs}
                                        lonely={props.lonely} />
                                    :
                                    (props.from === "favs") ?
                                        <FavMovie
                                            movie={movie}
                                            remFavs={props.remFavs}
                                            lonely={props.lonely}
                                        />
                                        :
                                        <WatchMovie
                                            movie={movie}
                                            remWatchs={props.remWatchs}
                                            lonely={props.lonely}
                                        />
                            }
                        </div>
                    )
                })
            }

        </>
    )
}

export default Movie
