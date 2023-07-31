/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
// AutomationPage.js
import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import styled from 'styled-components';


const Mhe = () => {
    return (
    <Wrapper>
        <img src="https://stack-group.com/assets/images/banner_rental.jpg" alt=""></img>
        <h1>A Wide Range of Material Handling Equipment</h1>
        <p>We offer a wide range of material handling equipment to meet your specific needs. Our team of experts has the experience and expertise to help you select the right equipment for your operations. We can also provide installation, maintenance, and repair services.</p>
        <ul>
        <li>Industrial trucks: A variety of industrial trucks, including forklifts, pallet jacks, and order pickers.</li>
        <li>Conveyor systems: Conveyor systems for moving materials in a variety of ways.</li>
        <li>Storage and racking systems: Storage and racking systems for storing materials efficiently.</li>
        <li>Automated material handling systems: Automated material handling systems for high-volume applications.</li>
        </ul>
        <p>We are committed to providing our customers with the highest quality equipment and services. We are confident that we can help you improve your efficiency, productivity, and profitability.</p>
        <p>Contact us today to learn more about how we can help you with your material handling needs.</p>
        <h3>--------------------</h3>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: relative;
  text-align: center;
  color: black;
  background-color: 	#F0F0F0;
  margin-top: 30px;

  img {
    width: 100%;
  }

  h1 {
    margin-top: 20px;
  }

  h3 {
    color: 	#F0F0F0;
  }
  ul {
    font-size: 18px
  }
  p {
    font-size: 24px
  }

  
`

export default Mhe;