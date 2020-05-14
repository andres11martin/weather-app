import React from "react"
import Future from "./Future"
import "./DaysBar.css"

const DaysBar = ({ icon1, icon2, icon3, icon4, icon5, temperature1, temperature2, temperature3, temperature4, temperature5 }) => {

    let sourceIcon1 = ""
    let sourceIcon3 = ""
    let sourceIcon4 = ""
    let sourceIcon2 = ""
    let sourceIcon5 = ""

    function getIcons() {
        sourceIcon1 = "https://openweathermap.org/img/wn/" + icon1.slice(0, -1) + "d@2x.png"
        sourceIcon2 = "https://openweathermap.org/img/wn/" + icon2.slice(0, -1) + "d@2x.png"
        sourceIcon3 = "https://openweathermap.org/img/wn/" + icon3.slice(0, -1) + "d@2x.png"
        sourceIcon4 = "https://openweathermap.org/img/wn/" + icon4.slice(0, -1) + "d@2x.png"
        sourceIcon5 = "https://openweathermap.org/img/wn/" + icon5.slice(0, -1) + "d@2x.png"
    }
    getIcons()

    let weekday1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',][new Date().getDay() + 1]
    let weekday2 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',][new Date().getDay() + 2]
    let weekday3 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',][new Date().getDay() + 3]
    let weekday4 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',][new Date().getDay() + 4]
    let weekday5 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',][new Date().getDay() + 5]


    return (
        <div className="daysBar">
            <Future temperature={temperature1} src={sourceIcon1} date={weekday1} />
            <Future temperature={temperature3} src={sourceIcon3} date={weekday2} />
            <Future temperature={temperature2} src={sourceIcon2} date={weekday3} />
            <Future temperature={temperature4} src={sourceIcon4} date={weekday4} />
            <Future temperature={temperature5} src={sourceIcon5} date={weekday5} />
        </div>
    )
}

export default DaysBar