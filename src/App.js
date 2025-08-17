import { useState } from "react"
import APIKEY from "./key";


export default function App() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState();
  let getData = (event) =>{

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`)
      .then((response) => response.json())
      .then((data) => {

     
        
        // eslint-disable-next-line eqeqeq
        if(data.cod=='404' ){
          setWeather(undefined);

        }else{

          setWeather(data);
        }
          

          })
  
          event.preventDefault();
          setCity('');
        
    }
  return (
    <div className="w-[100%] h-[100vh] bg-[#4aacb1]">
      <div className="mx-w-[1320px] mx-auto items-center justify-center flex flex-col h-[100vh]">
        <h1 className="text-[40px] font-bold py-12 text-white ">Simple Whether App</h1>

        <form onSubmit={getData}>
          <input required type="text" value={city} onChange={(e) =>setCity(e.target.value)} className="w-[300px] h-[40px] pl-3" placeholder="city name"/><button className="bg bg-green-700 text-white text-[20px] w-[300px] h-[40px]  text-bold" >Submit</button>

        </form>
        <div className="w-[400px] mx-auto bg-white shadow-lg mt-[40px] p-[25px]">

          {weather!== undefined
          ?
          <>
          <h3 className="font-bold text-[30px]">{weather.name} , <span className="bg-yellow-200">{weather.sys.country}</span> </h3>
          <h2 className="font-bold text-[40px]">{weather.main.temp}&deg;C</h2>
          <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="icon"></img>
          <p> {weather.weather[0].description}</p>
          </>
          : "No Data Found"


          }

          

        </div>
        
      </div>
    </div>
  

  )
}