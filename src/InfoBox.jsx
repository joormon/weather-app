import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function InfoBox({weatherInfo}) 
{
    const URL_cloudy="https://images.unsplash.com/photo-1591552265137-99c59d9f4927?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const URL_rainy="https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const URL_sunny="https://images.unsplash.com/photo-1622278647429-71bc97e904e8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return (
        <Card sx={{ maxWidth: 200 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={URL_rainy}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {weatherInfo.city}
                    </Typography>
                    <Typography component="div" variant="body2" sx={{ color: 'text.secondary' }}>
                       <div><p>{weatherInfo.weather}</p></div>
                       <div><p>{weatherInfo.temp}</p></div>
                       <div><p>{weatherInfo.temp_max}</p></div>
                       <div><p>{weatherInfo.temp_min}</p></div>
                    </Typography>
                </CardContent>
        </Card>
    );
}