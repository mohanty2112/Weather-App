// import logo from './logo.svg';
import "./App.css";

import Home from "./components/Home";
import NotFound from "./components/NotFound";
import TempConverter from "./components/TempConverter";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Getweather from "./components/Getweather";


// import updateData from "./reducer/Reducer";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";

function App() {
  // const [loginState, setLoginState] = useState(false);
  

  return (
    <>
      <div>
        <Layout></Layout>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="*" element={<NotFound />} />
          <Route path="/tempcoverter" element={<TempConverter />} />
          <Route path="/getweather" element={<Getweather></Getweather>}/>
        </Routes>

    
      </div>
    </>
  );
}

export default App;
