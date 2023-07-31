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
        <img src="https://www.plklift.com/uploads/202219932/ImgScroll/ba202208251058529017771.jpg" alt=""></img>
        <h1>A Range of Aerial Working Platforms</h1>
        <p>Aerial working platforms are a vital part of many industries, and we offer a wide range of AWPs to meet your specific needs.</p>
        <ul>
        <li>Scissor lifts: Scissor lifts are a versatile type of AWP that can be used for a variety of tasks, such as painting, roofing, and electrical work.</li>
        <li>Boom lifts: Boom lifts are ideal for reaching high areas, and they can be used for a variety of tasks, such as construction, maintenance, and repairs.</li>
        <li>Telescopic lifts: Telescopic lifts are a good choice for tasks that require a long reach, such as lighting, surveying, and window cleaning.</li>
        </ul>
        <p>We also offer a variety of other AWPs, such as articulating lifts, trailer-mounted lifts, and truck-mounted lifts. We can help you choose the right AWP for your needs, and we offer installation, maintenance, and repair services.</p>
        <p>We are committed to providing our customers with the highest quality AWPs and services. We are confident that we can help you improve your safety, productivity, and profitability.</p>
        <p>Contact us today to learn more about our aerial working platforms and how we can help you.</p>
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