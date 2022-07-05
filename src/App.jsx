import axios  from "axios";
import { useState, useEffect } from "react"
import Form from "./components/Form"
import WeatherCard from "./components/WeatherCard";

const App = () => {

  const [ city, setCity ] = useState('');
  const [ country, setCountry ] = useState('');
  const [ mensaje, setMensaje ] = useState('');
  const [ isValidData, setIsValidData ] = useState( false );
  const [ result, setResult ] = useState({});
  const [ spinner, setSpinner ] = useState( false );

  const consulteAPI = () => {
    const keyAPI = "80daa5ded675dff9bed2710275434aff";

    setResult({});
    setSpinner( true );

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${ keyAPI }`)
      .then( resp => {

        console.log( resp );
        
        if ( resp.status === 200 ) {
          setIsValidData( true );
          setSpinner( false );
          setResult( resp.data )
        }
        
      })
      .catch( () => {
        setSpinner( false );
        setIsValidData( false );
        setMensaje('No se encotró la ciudad');
      });

  };


  return (
    <div className="container">
      <div className="weather">
        <Form 
          setMensaje = { setMensaje }
          city = { city }
          setCity = { setCity }
          country = { country }
          setCountry = { setCountry }
          setIsValidData = { setIsValidData }
          consulteAPI = { consulteAPI }
        />

        { spinner ? (
          <div className="sk-folding-cube">
            <div className="sk-cube1 sk-cube"></div>
            <div className="sk-cube2 sk-cube"></div>
            <div className="sk-cube4 sk-cube"></div>
            <div className="sk-cube3 sk-cube"></div>
          </div>
        ) : (         
          <WeatherCard 
            mensaje = { mensaje }
            result = { result}
            isValidData = { isValidData }
          />
        )}

      </div>
    </div>
  )
}

export default App
