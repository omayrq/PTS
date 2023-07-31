
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import { useGlobalContext } from './context';
import Services from './Services';
import Contact from './Contact';
import About from './about';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import styled from "styled-components";
import BarLoader from "react-spinners/BarLoader"

const Home = () => {
  const { updateHomePage } = useGlobalContext();
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    if (!isPageLoaded) {
      updateHomePage();
      setIsPageLoaded(true);
    }
  }, [isPageLoaded, updateHomePage]);

  return (
    
    <>
    <HeroSection />
      <MDBCarousel showIndicators showControls fade>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={1}
          src='https://www.arigs.com/wp-content/uploads/2021/08/Warehouse_solution_banner1_shutterstock_1105968284.jpg'
          alt='...'
        >
          <h1>WE AUTOMIZE YOUR FUTURE</h1>
        </MDBCarouselItem>

        <MDBCarouselItem
          className='w-100 d-block'
          itemId={2}
          src='https://kdreq.com/wp-content/uploads/2011/03/home-banner.jpg   '
          alt='...'
        >
          <h1>WE AUTOMIZE YOUR FUTURE</h1>
        </MDBCarouselItem>

        <MDBCarouselItem
          className='w-100 d-block'
          itemId={3}
          src='https://www.ssents.com/hubfs/dock-and-door-terms.jpeg'
          alt='...'
        >
          <h1>WE AUTOMIZE YOUR FUTURE</h1>
        </MDBCarouselItem>
          <MDBCarouselItem
          className='w-100 d-block'
          itemId={4}
          src='https://dmprefab.com/images/about-us-banner.jpg'
          alt='...'
        >
          <h1>WE AUTOMIZE YOUR FUTURE</h1>  
        </MDBCarouselItem>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={4}
          src='https://cdn.hcforkliftamerica.com/wp-content/uploads/2021/08/Website-Banner-full-line-of-Lithium.png'
          alt='...'
        >
          <h1>WE AUTOMIZE YOUR FUTURE</h1>  
        </MDBCarouselItem>
      </MDBCarousel>

      <Services />
      <Contact />
    </>
  );
};


export default Home;