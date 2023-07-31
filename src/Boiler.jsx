/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
// AutomationPage.js
import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import styled from 'styled-components';


const Boiler = () => {
  return (
    <Wrapper>
      <img src="https://steamboilers.co.uk/wp-content/uploads/2021/01/UT-H_banner.jpg" alt=""></img>
      <h1>Industrial Boiler Systems</h1>
        <p>Our industrial boiler systems provide a reliable and efficient source of heat for your business.</p>
        <p>Whether you need to heat your factory, power your production equipment, or provide hot water for your employees, we have a boiler system that can meet your needs. Our systems are designed to be durable and long-lasting, and they come with a variety of features to meet your specific requirements.</p>
        <p>We offer a wide range of industrial boiler systems, including:</p>
        <ul>
        <li>Firetube boilers</li>
        <li>Watertube boilers</li>
        <li>Packaged boilers</li>
        <li>Custom boilers</li>
        </ul>
        <p>We also offer a variety of customization options, so you can tailor your system to your exact needs. For example, we can customize the size, capacity, and features of your system to meet your specific requirements.</p>
        <p>If you are looking for an industrial boiler system that can meet your needs, then we encourage you to contact us today. We would be happy to discuss your requirements and recommend the best system for your application.</p>
        <p><strong>Here are some additional details that you can include in your summary:</strong></p>
        <ul>
        <li>Our boilers are manufactured to the highest standards and are backed by our comprehensive warranty.</li>
        <li>We have a team of experienced engineers and technicians who can help you select the right system for your application and install it properly.</li>
        <li>We offer a full range of after-sales services, including maintenance, repair, and modernization.</li>
        </ul>
      <h3>--------------------</h3>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: relative;
  text-align: center;
  color: black;
  background-color:#F0F0F0;
  margin-top: 30px;

  h1 {
    margin-top: 20px;
  }

  img {
    width: 100%;
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

export default Boiler;
