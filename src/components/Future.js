import React from 'react';
import Box from "../styledComponents/Box";
import "./Future.css"

export default function Future({ temperature, src, date }) {

    let tempe = temperature
    let tempeShort = tempe.toString().substring(0, 2);

    return (
        <Box className="future">
            <h4>{date} </h4>
            <img className="smallIcons" src={src} />
            <h4>{tempeShort} °C </h4>
        </Box>
    )
}