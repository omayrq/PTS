/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
// AutomationPage.js
import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import styled from 'styled-components';


const HeavyEquip = () => {
    return (
    <Wrapper>
        <img src="https://www.liugong.co.za/wp-content/uploads/2019/03/banner-top-1.jpg" alt=""></img>
        <h1>Heavy Earth Moving Equipment for Construction</h1>
        <p>We provide heavy earth moving equipment for construction projects of all sizes. Our team of experts has the experience and expertise to help you select the right equipment for your needs. We can also provide installation, maintenance, and repair services.</p>
        <ul>
        <li>Excavators: Excavators are versatile machines that can be used for a variety of tasks, including digging, loading, and lifting.</li>
        <li>Bulldozers: Bulldozers are powerful machines that can be used to push and move large amounts of dirt.</li>
        <li>Graders: Graders are used to level and smooth surfaces.</li>
        <li>Loaders: Loaders are used to load and transport materials.</li>
        <li>Trenchers: Trenchers are used to dig trenches.</li>
        </ul>
        <p>We are committed to providing our customers with the highest quality equipment and services. We are confident that we can help you complete your construction project on time and within budget.</p>
        <p>Contact us today to learn more about how we can help you with your heavy earth moving equipment needs.</p>
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

export default HeavyEquip;