/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */

/* eslint-disable no-unused-vars */
import React from 'react'
import Home from './Home'
import ReactDOM from 'react-dom';
import Contact from './Contact'
import Services from './Services'
import AutomationPage from './AutomationPage';
import HeavyEquip from './heavyEquip';
import Mhe from './Mhe';
import Platform from './Platform';
import WHDesign from './WHDesign';
import Racking from './Racking';
import Shuttle from './Shuttle'
import Pallet from './Pallet'
import DD from './DD'
import Elevator from './Elevator'
import HVAC from './HVAC';
import Boiler from './Boiler';
import RO from './RO';
import BC from './Batteries';
import Utilities from './Utilities';
import FabWork from './fabWork';
import Aftersales from './Aftersales';
import Spares from './Spares';
import Rental from './Rental';
import About from './about'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from "styled-components";
import { GlobalStyle } from './GlobalStyle'
import Error from './Error';
import GoToTop from "./components/GoToTop";


const App = () => {

  const theme = {
    colors: {
      heading: "rgb(24, 24, 29)",
      text: "rgb(24, 24, 29)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "rgb(249, 249, 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px"
    },
    media: { mobile: "768px", tab: "998px"}
  }

  return (
  <ThemeProvider theme = {theme} >
  <GlobalStyle />
  <GoToTop />
   <BrowserRouter>
    <Header />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/Services" element={<Services />} />
       <Route path="/Contact" element={<Contact />} />
       <Route path="/services/AutomationPage" element={<AutomationPage />} /> 
       <Route path="/services/heavyEquip" element={<HeavyEquip />} />
       <Route path="/services/Mhe" element={<Mhe />} />
       <Route path="/services/Platform" element={<Platform />} />
       <Route path="/services/WHDesign" element={<WHDesign />} /> 
       <Route path="/services/Racking" element={<Racking />} /> 
       <Route path="/services/Shuttle" element={<Shuttle />} />
       <Route path="/services/Pallet" element={<Pallet />} /> 
       <Route path="/services/DD" element={<DD />} /> 
       <Route path="/services/Elevator" element={<Elevator />} /> 
       <Route path="/services/HVAC" element={<HVAC />} /> 
       <Route path="/services/Boiler" element={<Boiler />} /> 
       <Route path="/services/RO" element={<RO />} /> 
       <Route path="/services/Batteries" element={<BC />} /> 
       <Route path="/services/Utilities" element={<Utilities />} /> 
       <Route path="/services/FabWork" element={<FabWork />} /> 
       <Route path="/services/Aftersales" element={<Aftersales />} /> 
       <Route path="/services/Rental" element={<Rental />} /> 
       <Route path="/services/Spares" element={<Spares />} /> 
       <Route path="*" element={<Error />} />
     </Routes>
    <Footer />
   </BrowserRouter>
  </ThemeProvider>
  );
}


export default App
