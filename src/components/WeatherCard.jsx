import { useState, useEffect } from 'react';

import sadIcon from '../img/icons8-sad-50.png'
import thermo from '../img/icons8-thermometer-50(1).png';
import windPic from '../img/icons8-wind-50.png';
import wetPic from '../img/icons8-wet-50.png';

import brokenClouds from '../img/icons/broken clouds.png';
import clear from '../img/icons/clear.png';
import clouds from '../img/icons/clouds.png';
import mist from '../img/icons/mist.png';
import rain from '../img/icons/rain.png';
import scatteredClouds from '../img/icons/scattered clouds.png';
import showerRain from '../img/icons/shower rain.png';
import snow from '../img/icons/snow.png';
import thunderstorm from '../img/icons/Thunderstorm.png';

const WeatherCard = ({ mensaje, result, isValidData }) => {

  const convertTemp = temp => (temp - 275.15).toFixed(2);

  const [ image, setImage ] = useState('');

  useEffect( () => {
      switch( result.weather?.[0].main ) {
        case 'Clear':
          setImage( clear );
          break;
        case 'Clouds':
          setImage( clouds );
          break;
        case 'Mist':
          setImage( mist );
          break;
        case 'Broken':
          setImage( brokenClouds );
          break;
        case 'Rain':
          setImage( rain );
          break;
        case 'ScatteredClouds':
          setImage( scatteredClouds)
          break;
        case 'ShowerRain':
          setImage( showerRain );
          break;
        case 'Snow':
          setImage( snow );
          break;
        case 'Thunderstorm':
          setImage( thunderstorm );
          break;
      }
  }, [])


  return (
    <div className="weather__container">

      { isValidData ? 
        (
          <div className="weather__card">
            <div className="weather__header">
              <h2>{ result.name } / {result.sys?.country}</h2>
              <p className="weather__rain">Posibilidad de lluvia: <span>{ result.clouds?.all}%</span></p>
            </div>

            <div className="temperatureBox">
              <p className="temperature">{convertTemp(result.main?.temp)}°C</p>

              <div className="weather__iconBox">
                <img 
                src={image}
                alt="Icono de clima" 
                className="weather__icon" />
              </div>

              <p className="temperature__name">{(result.weather?.[0].main)}</p>
            </div>

            <div className="weather__features">
              <div className="temperatures">
                <img src={ thermo } alt="Icono de termómetro" className="weather__icon-features" />
                <p>Min: {convertTemp(result.main?.temp_min)}°C</p>
                <p>Max: {convertTemp(result.main?.temp_max)}°C</p>
              </div>

              <div className="humidity">
                <img src={ wetPic } alt="Icono de termómetro" 
                className="weather__icon-features"
                />
                <p>Humedad: {result.main?.humidity}</p>
              </div>

              <div className="wind">
                <img src={windPic} alt="Icono de termómetro" 
                className="weather__icon-features"
                />
                <p>Viento: {result.wind?.speed} m/s</p>
              </div>
            </div>
          </div>
        ) : 
        (   
          <div className="weather__card">
            <div className="weather__error">
              <p>{ mensaje }</p>
              <img src={sadIcon} alt="Cara triste" />
            </div>
          </div>
        )
      }
      
      <div className="layout"></div>
    </div>
  )
}

export default WeatherCard
