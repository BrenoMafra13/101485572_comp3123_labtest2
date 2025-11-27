import { useState, useEffect } from "react"
import Weather from "./Weather"
import "./App.css"

function App() {
  const [city, setCity] = useState("")
  const [data, setData] = useState(null)

  useEffect(() => {
    if (city.length > 0) {
      localStorage.setItem("lastCity", city)
    }
  }, [city])

  function search() {
    if (city.length === 0) {
      return
    }

    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" + process.env.REACT_APP_WEATHER_KEY + "&units=metric"
    )
      .then((res) => res.json())
      .then((info) => {
        if (info.cod === 200) {
          setData(info)
        }
      })
  }

  return (
    <div className="mainWrapper">
    <div className="weatherPanel">
      <div>
        <h1>Student Name: Breno Lopes Mafra</h1>
        <h1>Student ID: 101485572</h1>
      </div>
        <h1 className="headerName">Breno Weather App</h1>

        <div className="searchLine">
          <input
            className="cityField"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Search"
          />
          <button className="searchButton" onClick={search}>Search</button>
        </div>

        {!data && (
          <p className="startMessage">Type a city name</p>
        )}

        {data && <Weather info={data} />}
      </div>
    </div>
  )
}

export default App
