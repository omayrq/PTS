/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
// AutomationPage.js
import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import styled from 'styled-components';


const BC = () => {
  return (
    <Wrapper>
      <img src="https://blog.toyota-forklifts.co.uk/hubfs/Battery%20Banner.png" alt=""></img>
      <h1>Complete Range of Industrial Batteries and Chargers</h1>
        <p>Our comprehensive range of industrial batteries and chargers provides the power you need to keep your business running smoothly.</p>
        <p>Whether you need batteries for forklifts, electric vehicles, or backup power, we have the right solution for you. Our batteries are designed to withstand the rigors of industrial use, and they come with a variety of features to meet your specific requirements.</p>
        <p>We also offer a wide range of chargers to match your battery needs. Our chargers are designed to be efficient and easy to use, and they come with a variety of features to help you extend the life of your batteries.</p>
        <p>If you are looking for industrial batteries and chargers that can meet your needs, then we encourage you to contact us today. We would be happy to discuss your requirements and recommend the best solution for your application.</p>
        <p><strong>Here are some additional details that you can include in your summary:</strong></p>
        <ul>
        <li>Our batteries are manufactured to the highest standards and are backed by our comprehensive warranty.</li>
        <li>We have a team of experienced engineers and technicians who can help you select the right battery and charger for your application.</li>
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

export default BC;
