import React from "react"
import Box from "../styledComponents/Box"
import "./Today.css"

const Today = ({ city, temperature, icon }) => {

    let image = ""
    let tempe = temperature
    let tempeShort = tempe.toString().substring(0, 2);

    function getIcon() {
        if (icon.length > 0) {
            image = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
        }
    }

    getIcon()

    return (
        <Box className="todayBox">
            <h2>Weather in {city}</h2>
            <h3>{tempeShort} °C</h3>
            <img src={image} />
        </Box>
    )
}

export default Today