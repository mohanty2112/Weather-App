import Myimage from "./Assets/dexter.png";
import React, { useState } from "react";


function Getweather(  ) {
  // e.preventDefault();

  const [initialFormValues] = useState({
    EnterCity: "",
  });

  function CheckWeather(e) {
if(e.keyCode===13) {
  e.preventDefault();
}
    
  
  
    let userDate = document.getElementById("EnterCity").value;
let cityID = userDate.toLowerCase()

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityID +
      "&appid=0f585a4a0236ba57daf0f5691204306a"
  )
    .then(function (resp) {
      return resp.json();
    }) // Convert data to json
    .then(function (data) {
      console.log(data);

      function showMsg(msg) {
        // let a=(e)=>{
        //   e.preventDefault()
        // }
        // msg.preventDefault()
        let msgDiv = document.getElementById("msg");
        msgDiv.innerText = msg;

      }
     
      if(data.cod=== "404" || userDate ==="") {
        showMsg(`Enter valid city`);
      
    } else {
      showMsg(`Weather details of City: ${data.name}, ${data.sys.country}
      Current Temperature: ${Math.floor((data.main.temp-273.15) * 100)/100} °C
      Temperature Range: ${Math.floor((data.main.temp_max-273.15) * 100)/100} °C to ${Math.floor((data.main.temp_min-273.15) * 100)/100} °C
      Humidity: ${data.main.humidity} 
      Pollution: ${data.weather[0].description}`);
    }
    })
    .catch(function () {
      // catch any errors
    });
}
  
  return (
    <>
      <main>
        <section0 class="Gsection-lhs">
          <p className="weatherText">Let's find weather in my city</p>
          <img
          aria-hidden
            className="img1"
            src={Myimage}
            alt="Image"
          />
        </section0>
        <section1 class="Gsection-ctr"></section1>
        <section2 class="Gsection-rhs">
          <form initialValues={initialFormValues}>
            <form className="form">
              <div>
                <input onChange={CheckWeather}
                  className="input-field"
                  type="string"
                  name="EnterCity"
                  placeholder="Enter City"
                  size="65"
                  id="EnterCity"
                  onKeyDown={CheckWeather}
                ></input>
              </div>
            </form>
          </form>
          {/* <button class="submit-btn" onClick={CheckWeather}>Submit</button> */}
          <div class="result" id="msg"></div>
          {/* <div className="App">
            <p>Weather Detail of City:</p>
            <p>This is test</p>
          </div> */}
        </section2>
      </main>
    </>
  );
}

export default Getweather;
