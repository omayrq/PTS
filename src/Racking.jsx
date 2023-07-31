/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
// AutomationPage.js
import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import styled from 'styled-components';


const WHDesign = () => {
    return (
    <Wrapper>
        <img src="https://tsscgroup.com/wp-content/uploads/2017/09/Racking-Product-banner-2.jpg" alt=""></img>
        <h1>Warehouse Racking Systems and Shelving Solutions</h1>
        <p>We offer a wide range of warehouse racking systems and shelving solutions to meet your specific needs.</p>
        <p>Our team of experts has the experience and expertise to help you choose the right racking system for your warehouse. We can help you with everything from site selection to layout to installation.</p>
        <p>We understand that every warehouse is different, so we take the time to understand your unique requirements. We will work with you to develop a racking system that is both efficient and cost-effective.</p>
        <p>Here are some of the racking systems we offer:</p>
        <ul>
        <li>Pallet racking</li>
        <li>Cantilever racking</li>
        <li>Drive-in racking</li>
        <li>Selective racking</li>
        </ul>
        <p>Here are some of the shelving solutions we offer:</p>
        <ul>
        <li>Wire shelving</li>
        <li>Slotted angle shelving</li>
        <li>Gravity shelving</li>
        </ul>
        <p>We are committed to providing our customers with the highest quality racking systems and shelving solutions. We are confident that we can help you improve your warehouse efficiency, productivity, and profitability.</p>
        <p>Contact us today to learn more about how we can help you with your warehouse racking needs.</p>
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

export default WHDesign;