import React from "react";
import * as ReactBootStrap from "react-bootstrap"
import "./Loading.css"

const Loading = () => {
    return (
        <div className="loading">
            <ReactBootStrap.Spinner animation="border" variant="warning" />
            <h2>Where are you?</h2>
        </div>
    )
}

export default Loading