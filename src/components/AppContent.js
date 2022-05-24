import React,{useState} from 'react';
import SearchedData from './SearchedData';

import './AppContent.css';

const AppContent = props => {

    const [station, setStation] = useState('');
    const [currentWeatherInfo, setCurrentWeatherInfo] = useState('');

    const getInputValue = e => {
        const value = e.target.value;
        setStation(value);
    }

    const fetchData = () => {
        console.log("kliknięto")
        try{
            fetch(`https://danepubliczne.imgw.pl/api/data/synop/station/${station}`)
                .then(res=>res.json())
                .then(json=>setCurrentWeatherInfo(json)) 
        }catch(err){
            console.log(`BŁĄD: ${err}`)
        }
    }

    return(
        <div>
            <section className="searchingTips">Wpisz nazwę miejscowości z małej litery, bez polskich znaków i bez spacji! (np. jeleniagora)</section>
            <header>
                <h1>Wpisz nazwę stacji:</h1>
                <div className="inputHolder">
                    <input type="text" onChange={e=>getInputValue(e)}/>
                </div>
                <button onClick={()=>fetchData()}>Znajdź</button>
            </header>
            <SearchedData weather={currentWeatherInfo}/>
        </div>
    )
    
}

export default AppContent;