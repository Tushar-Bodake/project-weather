import Searchbox from "./Searchbox";
import Infobox from "./Infobox";
import { useState } from "react";

export default function Weatherapp(){

    const [weathernfo, setWeathernfo]=useState({
        city: " ",
        feels_like : 0,
        temp : 0,
        humidity : 0,
        temp_min : 0,   
        temp_max : 0,
        weather: " "
    });
    let updateInfo=(newInfo)=>{
        setWeathernfo(newInfo);
    };
    return(
        <div className="weather-app">
        <h1 className="weather-title">Weather App</h1>

        <Searchbox updateInfo={updateInfo}/>
        <Infobox info={weathernfo}/>

        </div>
    );
}