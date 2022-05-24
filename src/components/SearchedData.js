import React from 'react';

import './SearchedData.css';

const SearchedData = props =>{

        return(
            <div className="SearchedData-container">
                <div className="SearchedData-content">
                    <div className="header">
                        <div className="weather-info">{props.weather.stacja}</div>
                        <div className="weather-info"><span>Z dnia:</span> {props.weather.data_pomiaru}</div>
                    </div>
                    <div>
                        <div className="weather-info"><span>Temperatura:</span> {props.weather.temperatura}°C</div>
                        <div className="weather-info"><span>Prędkość wiatru:</span> {props.weather.predkosc_wiatru} km/h</div>
                        <div className="weather-info"><span>Kierunek wiatru:</span> {props.weather.kierunek_wiatru}°</div>
                        <div className="weather-info"><span>Wilgotność względna:</span> {props.weather.wilgotnosc_wzgledna} %</div>
                        <div className="weather-info"><span>Suma opadu:</span> {props.weather.suma_opadu} mm</div>
                        <div className="weather-info"><span>Ciśnienie:</span> {props.weather.cisnienie} hPa</div>
                    </div>
                </div>
            </div>
        )
    
}

export default SearchedData;