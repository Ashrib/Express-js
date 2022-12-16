import './App.css';
import axios from "axios";
import { useState} from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
let baseUrl = ""
if (window.location.href.split(":")[0] === "http") {
  baseUrl = "http://localhost:3000";
  
}

function App() {
  const [cityName, setCityName] = useState("");
  const [allCheck, setAllcheck] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  
  const submitHandler = (e)=>{
    e.preventDefault();
    // console.log(cityName)
    axios.get(`${baseUrl}/weather/${cityName}`)
    .then(response => {
      console.log("response: ", response.data);
      setWeatherData(response.data)

  })
  .catch(err => {
      console.log("error: ", err);
  })
  console.log("WeatherData ",weatherData)
    {(cityName.length <1) ? setAllcheck(false) : setAllcheck(true)}
  }

  return (
    <div className="App" >
      <div className="app-head">Weather Update</div>
      <div className="app-body">
        <div className="user-inp">
          <div>
            <form onSubmit={submitHandler}>
              <input type="text" placeholder='Enter your city name'
               onChange={(e)=>{setCityName(e.target.value)}}/>
              <button type='submit'>go</button>
            </form>
          </div>
        </div>
        {(allCheck)? 
          <div className="data-container">
            <div className="data-box">
              <h3>{cityName}</h3>
            </div>
          </div>
        : 
        null}
        
      </div>
    </div>
  );
}

export default App;
