/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './context';


const About = () => {

const {updateAboutPage} = useGlobalContext();

useEffect(() => {
  updateAboutPage();
}, []);

  return <HeroSection />;
}

export default About