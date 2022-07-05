const Form = ({
  city,
  setCity,
  country,
  setCountry,
  setIsValidData,
  consulteAPI,
  setMensaje
}) => {


  const handleSubmit = e => {

    e.preventDefault();

    if ( [city, country].includes('') ) {
      setMensaje('Hay campos vacíos');
      setIsValidData( false );
      return;
    }

    setIsValidData( true );
    consulteAPI();

  }

  return (
    <div className="form">

      <header className="form__header">
        <div className="iconBox">
          <img src="/src/img/icons8-haze-48.png" alt="Weather icon" className="header__icon" />
        </div>
        <p className="header__text">Weather<span>app</span></p>
      </header>

      <div className="form__description">
        <h1>Weather & Forecast Application</h1>
        <p>Usa weather application y obten la información del clima día con día en cualquier lugar en el que te encuentres. ¡Es <strong>gratis</strong> y para todo el mundo!</p>
      </div>

      <form
        onSubmit={ handleSubmit }
      >
        <div className="form__field">
          <label htmlFor="city">Tu ciudad</label>
          <input 
            value={ city }
            onChange = { e => setCity( e.target.value )}
            type="text" 
            id="city" 
            placeholder="Ingresa tu ciudad"/>
        </div>

        <div className="form__field">
          <label htmlFor="">Tu país</label>
          <select
            value={ country }
            onChange = { e => setCountry( e.target.value )}
          >
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="PE">Perú</option>
          </select>
        </div>

        <input type="submit" className="form__submit" value="Obtener el clima"/>
      </form>

      {/* ICONS */}
      <img src="/src/img/icons8-autumn-48.png" alt="Weather icon" className="icon icon--1"/>
      <img src="/src/img/icons/clouds.png" alt="Weather icon" className="icon icon--2"/>
      <img src="/src/img/icons8-spring-48.png" alt="Weather icon" className="icon icon--3"/>
      <img src="/src/img/icons8-winter-48.png" alt="Weather icon" className="icon icon--4"/>
    </div>
  )
}

export default Form