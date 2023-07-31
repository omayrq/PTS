/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
// AutomationPage.js
import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import styled from 'styled-components';


const AutomationPage = () => {
  return (
    <Wrapper>
      <img src="https://www.winmate.com/Image/Solutionimg/solutionsimg_Factory_Automation_banner.jpg" alt=""></img>
      <h1>We Provide Complete Automation Services</h1>
      <p>Our team of experts has the experience and expertise to help you automate your manufacturing, warehousing, and other processes. We can design, install, and maintain custom automation solutions that meet your specific needs.</p>
      <ul>
        <li>Design and engineering: We work with you to understand your needs and develop a custom automation solution that is tailored to your specific requirements.</li>
        <li>Installation: We install your automation solution quickly and efficiently, ensuring that it is up and running in no time.</li>
        <li>Maintenance: We provide ongoing maintenance and support for your automation solution, ensuring that it continues to perform at its best.</li>
      </ul>
      <p>We are committed to providing our customers with the highest quality automation services. We are confident that we can help you improve your productivity, efficiency, and profitability.</p>
      <p>Contact us today to learn more about how we can help you automate your business.</p>
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

export default AutomationPage;
