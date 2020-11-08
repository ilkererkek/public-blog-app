import React from 'react'
import {Link} from 'react-router-dom';
export const NotFound = () => {
    return (
        <div>
            <h1>
                404
            </h1>
            <h2>We Couldn't find page you're looking for.</h2>
            <Link to="/" className="btn btn-submit">Return to Home</Link>
        </div>
    )
}
