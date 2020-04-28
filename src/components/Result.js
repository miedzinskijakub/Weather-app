import React from 'react';
import './Result.css';


const Result = (props) => {

    const{err, city, temp, date, country, tempMin, tempMax, weather, icon} = props.weather;
const icons = `http://openweathermap.org/img/wn/${icon}@2x.png`

    let content = null;

    if(!err && city){

        content = (



        <div>
            <h3 class="city">{city}, {country}</h3>
            <h4 class="date">{date}</h4>
            <h1 class="temp">{temp} &#176;C</h1>
            <h3 class="weather">{weather} </h3>
            <img alt="Icon" src={icons}></img>
            <h4 class="tempMin">{tempMin}&#176; / {tempMax}&#176;</h4>
  
        </div>
        )
    }

    return (
        <div className="result">
            {err ? `` :
            content}
        </div>


     );
}

export default Result;