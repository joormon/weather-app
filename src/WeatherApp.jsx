import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./WeatherApp.css"
import { useState } from "react";
export default function WeatherApp(){
    
    const [weatherInfo, setWeatherInfo]=useState({});

    const updateInfo=(result)=>{
        setWeatherInfo(result);
    }

    return (
        <div className="WeatherApp">
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox weatherInfo={weatherInfo}/>
        </div>
    )
}