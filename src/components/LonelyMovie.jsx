import React, { useEffect, useState } from 'react'
import "./style.css"
import DefaultData from "./DefaultData"
import DownloadingIcon from '@mui/icons-material/Downloading';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LoaderPage from './LoaderPage';

const LonelyMovie = (props) => {

    const [data, setData] = useState({ DefaultData });
    const [loading, setLoading] = useState(false);

    const getInfo = async (id) => {
        setLoading(true);
        const url = `http://www.omdbapi.com/?apikey=3bb31b14&i=${id}`;
        const response = await fetch(url);

        const responseJsonData = await response.json();
        setData(responseJsonData)
        setLoading(false);
    }

    useEffect(() => {
        getInfo(props.id);
    }, []);

    return (
        <>
            <div className="background bg-dark">
                {
                    loading === true ? <LoaderPage /> :
                        <>
                            <div className="poster-container flexy mt-lg-5 mt-3">
                                <img src={props.poster} className="movie-quanta-img mb-2" alt="" />
                            </div>
                            <div className="white movie-title mt-3 mb-4 text-center">
                                {data.Title}
                            </div>
                            <div className="flexy mt-3 mb-3">
                                <button className="btn btn-primary me-3">
                                    <span>Download </span>
                                    <DownloadingIcon className="mb-1 ms-1" />
                                </button>
                                <button className="btn btn-success ms-3">
                                    <span>Watch Online</span>
                                    <VisibilityIcon className="mb-1 ms-2" />
                                </button>
                            </div>
                            <div className="row flexy">
                                <div className="white col col-10">
                                    <table className="table white mb-5">
                                        <tr>
                                            <td className="question">Plot : </td>
                                            <td className="answer">{data.Plot}</td>
                                        </tr>
                                        <tr>
                                            <td className="question">Type : </td>
                                            <td className="answer">{data.Type}</td>
                                        </tr>
                                        <tr>
                                            <td className="question">Genre : </td>
                                            <td className="answer">{data.Genre}</td>
                                        </tr>
                                        <tr>
                                            <td className="question">Released : </td>
                                            <td className="answer">{data.Released}</td>
                                        </tr>
                                        <tr>
                                            <td className="question">imdb Rating : </td>
                                            <td className="answer">{data.imdbRating} 🍕</td>
                                        </tr>
                                        <tr>
                                            <td className="question">Runtime : </td>
                                            <td className="answer">{data.Runtime}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </>
                }
            </div>
        </>
    )
}

export default LonelyMovie
