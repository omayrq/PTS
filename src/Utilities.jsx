/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
// AutomationPage.js
import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import styled from 'styled-components';


const Utilities = () => {
  return (
    <Wrapper>
      <img src="https://azcatec.com/wp-content/uploads/2022/01/ingenieria-electrica-1.jpg" alt=""></img>
      <h1>Industrial Utilities Including Electric and Mechanical Appliances</h1>
        <p>We provide a wide range of industrial utilities, including electric and mechanical appliances, to help businesses operate efficiently and safely.</p>
        <p>Our products and services include:</p>
        <ul>
        <li><strong>Electrical appliances:</strong> We offer a wide range of electrical appliances, including motors, generators, transformers, and switchgear. Our products are designed to meet the needs of a variety of industries, including manufacturing, construction, and transportation.</li>
        <li><strong>Mechanical appliances:</strong> We also offer a wide range of mechanical appliances, including pumps, compressors, fans, and conveyors. Our products are designed to help businesses move materials, generate power, and control fluids.</li>
        <li><strong>Services:</strong> In addition to our products, we also offer a variety of services, including installation, maintenance, and repair. Our team of experienced technicians can help you choose the right products for your needs and ensure that they are installed and maintained properly.</li>
        </ul>
        <p>We understand that the uptime of your business is critical, so we offer 24/7 customer support. We are committed to providing you with the products and services you need to operate efficiently and safely.</p>
        <p><strong>Here are some additional details that you can include in your summary:</strong></p>
        <ul>
        <li>Our products are manufactured to the highest standards and are backed by our comprehensive warranty.</li>
        <li>We have a team of experienced engineers and technicians who can help you select the right products and services for your needs.</li>
        <li>We offer a full range of after-sales services, including installation, maintenance, and repair.</li>
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

export default Utilities;
