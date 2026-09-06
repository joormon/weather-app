import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import {  useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    // Access Vite environment variables using import.meta.env
    const apiUrl = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;
    const apiUrlW = import.meta.env.VITE_WEATHER_URL;

    const cache_expiration = 2 * 60 * 60 * 1000;//cache data available for two hours

    let getWeatherInfo = async () => {
        
        const formattedCity = city.trim().toLowerCase();
        if (!formattedCity) return null;
        console.log(formattedCity);
        const cacheKey =`weather_${formattedCity}`;
        const cacheTimeKey=`weather_${formattedCity}_time`;
        const now = Date.now();


        //CACHE HIT
        const cachedData = localStorage.getItem(cacheKey);
        const cachedTime = localStorage.getItem(cacheTimeKey);


        if (cachedData && cachedTime) {
            const isExpired = now - Number(cachedTime) > cache_expiration;
            if (!isExpired) {
                console.log(`[CACHE HIT] Returning saved data for "${city}". (0 API calls spent)`);
                let parsedData = JSON.parse(cachedData); 
                return parsedData;
            }
        }

        //CACHE MISS

        try {
            console.log(`[CACHE MISS] Fetching fresh data from API for "${city}"...`);
            let response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}`);
            let jsonResp = await response.json();

            if (!jsonResp || jsonResp.length === 0) {
                console.log("city not found");
                return null;
            }

            //console.log(jsonResp);
            let lat = jsonResp[0].lat;
            let lon = jsonResp[0].lon;
            let weatherResp = await fetch(`${apiUrlW}?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
            let weatherJson = await weatherResp.json();
            // console.log(weatherJson);
            let result = {
                city: city,
                weather: weatherJson.weather[0].main,
                temp: weatherJson.main.temp,
                temp_max: weatherJson.main.temp_max,
                temp_min: weatherJson.main.temp_min
            };

            localStorage.setItem(cacheKey, JSON.stringify(result));
            localStorage.setItem(cacheTimeKey, now.toString());

            return result;

        } catch (err) {
            console.error("weather data cannot be fetched:", err);
        }

    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        let info = await getWeatherInfo();
        if(info)
        {
            updateInfo(info);
        }
        console.log(info);

    };

    return (<div>
        <h3>Search city</h3>
        <form onSubmit={handleSubmit}>
            <TextField id="City Name" label="City Name" variant="outlined" value={city} onChange={handleChange} />
            <br></br>
            <br></br>
            <Button variant="contained" type="submit" startIcon={<SearchIcon />}>
                Search
            </Button>
        </form>
    </div>)
}