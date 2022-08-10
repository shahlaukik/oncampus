import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const Not_Found = () => {
    return (
        <div className="notfound">
            <div className="notfound-404">
                <h1>404</h1>
            </div>
            <h2> Page Not Found! </h2>
            <p className="info">
                The page you are looking for might have been removed, had its name changed or is temporarily
                unavailable.
            </p>
            <Link to="/dashboard">Back to Homepage</Link>
        </div>
    );
};

export default Not_Found;
