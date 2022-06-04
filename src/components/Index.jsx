import React,{ useEffect, useState } from 'react'
import Navbar from "./Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Favourites from './Favourites';
import WatchList from './WatchList';
import Error from './Error';
import Data from './Data';
import LonelyMovie from './LonelyMovie';

const Index = () => {

    const [search,setSearch] = useState('batman');
    const [data,setData] = useState(Data.Search);

    const [poster,setPoster] = useState("https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg");
    const [id,setId] = useState('tt0372784');

    const getSearch = (movieName) => {
        setSearch(movieName)
    }
    
    const getMovies = async (search) => {
        const url = `http://www.omdbapi.com/?apikey=3bb31b14&s=${search}`;
        const response = await fetch(url);
        const responseJsonData = await response.json();
        setData(responseJsonData.Search);   
    }

    useEffect(()=>{
        getMovies(search);
    },[search]);

    const [favourites,setFavourites] = useState([]);
    const [watchlist,setWatchlist] = useState([]);
    const [favArr,setFavArr] = useState([]);
    const [watchArr,setWatchArr] = useState([]);

    const addFavs = (movie) => {
        let newList = [...favourites,movie];
        setFavourites(newList);
        let newArr = [...favArr,movie.imdbID];
        setFavArr(newArr);
    }

    const remFavs = (movie) => {
        let newList = favourites.filter((items)=>{
            return items.imdbID!==movie.imdbID;
        })
        setFavourites(newList);
        let newArr = favArr.filter((items)=>{
            return items!==movie.imdbID;
        })
        setFavArr(newArr);
    }
    
    const addWatchs = (movie) => {
        const newList = [...watchlist,movie];
        setWatchlist(newList);
        const newArr = [...watchArr,movie.imdbID];
        setWatchArr(newArr)
    }

    const remWatchs = (movie) => {
        let newList = watchlist.filter((items)=>{
            return items.imdbID!==movie.imdbID;
        })
        setWatchlist(newList);
        let newArr = watchArr.filter((items)=>{
            return items!==movie.imdbID;
        })
        setWatchArr(newArr);
    }

    const lonely = (movie) => {
        console.log(movie);
        setPoster(movie.Poster);
        setId(movie.imdbID);
        // console.log(movie.imdbID);
    }

    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home
                        movieName={search}
                        setMovieName={getSearch} 
                        data={data}
                        addFavs={addFavs} 
                        addWatchs={addWatchs} 
                        favSet={favArr} 
                        watchSet={watchArr} 
                        remFavs={remFavs} 
                        remWatchs={remWatchs}
                        lonely={lonely}
                    />} />
                    <Route exact path="/favourites" element={<Favourites 
                        list={favourites} 
                        remFavs={remFavs} 
                        lonely={lonely}
                    />} />
                    <Route exact path="/watchlist" element={<WatchList 
                        list={watchlist} 
                        remWatchs={remWatchs}
                        lonely={lonely} 
                    />} />
                    <Route exact path="/quanta" element={<LonelyMovie
                        poster={poster}
                        id={id}
                    />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
        </>
    )
}

export default Index
