/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
// AutomationPage.js
import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import styled from 'styled-components';


const Rental = () => {
  return (
    <Wrapper>
      <img src="https://argaarabia.com/wp-content/uploads/2016/05/1.jpg" alt=""></img>
      <h1>Comprehensive Machinery Rental Service</h1>
        <p>Our comprehensive machinery rental service can help you get the equipment you need, when you need it, without having to invest in your own.</p>
        <p>We offer a wide range of machinery for rent, including:</p>
        <ul>
        <li><strong>Construction equipment:</strong> We have a wide variety of construction equipment available for rent, including excavators, bulldozers, dump trucks, and more.</li>
        <li><strong>Industrial equipment:</strong> We also have a wide variety of industrial equipment available for rent, including forklifts, cranes, and conveyors.</li>
        <li><strong>Office equipment:</strong> We even have office equipment available for rent, such as copiers, printers, and fax machines.</li>
        </ul>
        <p>No matter what your needs are, we have the machinery you need to get the job done. We offer competitive rates and flexible rental terms, so you can find the perfect solution for your business.</p>
        <p>We also offer a variety of value-added services, such as delivery, setup, and training. We want to make sure that you have the equipment you need to be successful, so we take care of all the details for you.</p>
        <p>If you are looking for a reliable and affordable machinery rental service, then we encourage you to contact us today. We would be happy to discuss your needs and recommend the perfect solution for your business.</p>
        <p><strong>Here are some additional details that you can include in your summary:</strong></p>
        <ul>
        <li>We have a long history of providing machinery rental services to our customers.</li>
        <li>We are ISO 9001:2015 certified, which means that we have a rigorous quality management system in place.</li>
        <li>We are committed to providing our customers with the best possible value for their money.</li>
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

export default Rental;
