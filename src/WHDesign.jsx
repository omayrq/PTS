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
        <img src="https://www.netsuite.com/portal/assets/img/business-articles/inventory-management/bnr-warehouse-automation.jpg" alt=""></img>
        <h1>Complete Warehouse Design and Solution Services</h1>
        <p>We offer complete warehouse design and solution services to businesses of all sizes. Our team of experts has the experience and expertise to help you design, build, and maintain a warehouse that meets your specific needs. We can help you with everything from site selection to layout to material handling equipment.</p>
        <p>We understand that every warehouse is different, so we take the time to understand your unique requirements. We will work with you to develop a warehouse design that is both efficient and cost-effective.</p>
        <p>In addition to design, we also offer a wide range of warehouse solution services, including:</p>
        <ul>
        <li>Warehouse construction: We can help you build a new warehouse from the ground up, or we can renovate an existing warehouse to meet your needs.</li>
        <li>Warehouse equipment: We can help you select and install the right material handling equipment for your warehouse.</li>
        <li>Warehouse management software: We can help you choose and implement the right warehouse management software to optimize your operations.</li>
        </ul>
        <p>We are committed to providing our customers with the highest quality warehouse design and solution services. We are confident that we can help you improve your warehouse efficiency, productivity, and profitability.</p>
        <p>Contact us today to learn more about how we can help you with your warehouse needs.</p>
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