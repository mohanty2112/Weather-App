import React from "react";

import { Link } from "react-router-dom";
import Myimage from "./Assets/logo.gif";


const Layout = () => {

  // const navigate = useNavigate();
  // const home = () => {
  //   navigate("/", true)  ;
  // };

  // const getweather = () => {
  //   navigate("/getweather", true);
  // };

  // const tempcoverter = () => {
  //   navigate("/tempcoverter", true);
  // };



  return (
  <>
      <header>
        <div class="left-side-header">
            {/* <image src="./Assets/logo.svg" alt="logo"> */}

            <nav>
                <ul>
                    <li> <img
                    aria-hidden
            className="img2"
            src={Myimage}
            alt="Image"
          /></li>
           <li><Link to="/">Wether Forecast App</Link></li>
                    {/* <li><h1 onClick={home}>Wether Forecast App</h1></li> */}
                </ul>
            </nav>
        </div>
        <div class="right-side-header">
            <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/getweather">Get Weather</Link></li>
                  <li><Link to="/tempcoverter">Temperature Converter</Link></li>
                    {/* <li><h1 onClick={home}>Home</h1></li> */}
                    {/* <li><h1 onClick={getweather}>Get Weather</h1></li>
                    <li><h1 onClick={tempcoverter}>Temperature Converter</h1></li> */}
                </ul>
            </nav>

        </div>
    </header>

  </>
  )
};

export default Layout;
