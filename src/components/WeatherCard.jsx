const WeatherCard = ({ mensaje, result, isValidData }) => {

  const convertTemp = temp => (temp - 275.15).toFixed(2);

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
                src={`/src/img/icons/${ result.weather?.[0].main}.png`}
                alt="Icono de clima" 
                className="weather__icon" />
              </div>

              <p className="temperature__name">{(result.weather?.[0].main)}</p>
            </div>

            <div className="weather__features">
              <div className="temperatures">
                <img src="/src/img/icons8-thermometer-50(1).png" alt="Icono de termómetro" className="weather__icon-features" />
                <p>Min: {convertTemp(result.main?.temp_min)}°C</p>
                <p>Max: {convertTemp(result.main?.temp_max)}°C</p>
              </div>

              <div className="humidity">
                <img src="/src/img/icons8-wet-50.png" alt="Icono de termómetro" 
                className="weather__icon-features"
                />
                <p>Humedad: {result.main?.humidity}</p>
              </div>

              <div className="wind">
                <img src="/src/img/icons8-wind-50.png" alt="Icono de termómetro" 
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
              <img src="/src/img/icons8-sad-50.png" alt="Cara triste" />
            </div>
          </div>
        )
      }
      
      <div className="layout"></div>
    </div>
  )
}

export default WeatherCard
