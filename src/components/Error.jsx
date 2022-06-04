import React from 'react'
import { useNavigate } from 'react-router';
import "./style.css";

const Error = () => {

    const navigate = useNavigate();
    return (
        <>
            <div className="error-background flexy">
                <div>

                    <div className="banner text-center mb-3">
                        Error 404
                    </div>
                    <div className="flexy">
                        <button
                            className="btn btn-lg btn-warning"
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            Get Back
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error
