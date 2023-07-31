/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
// AutomationPage.js
import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import styled from 'styled-components';


const Aftersales = () => {
  return (
    <Wrapper>
      <img src="https://fnbequipment.com.my/media/wysiwyg/fnb/Pages/After-Sales-Service-Web-Banner-min.jpg" alt=""></img>
      <h1>Comprehensive Aftersales Services for All Machinery and Equipment</h1>
        <p>Our team of experienced engineers and technicians can help you keep your machinery and equipment running smoothly and efficiently. We offer a wide range of services, including:</p>
        <ul>
        <li><strong>Preventive maintenance:</strong> We can help you develop a preventive maintenance plan that will help you avoid costly breakdowns.</li>
        <li><strong>Repair:</strong> We can repair your machinery and equipment quickly and efficiently.</li>
        <li><strong>Refurbishment:</strong> We can refurbish your machinery and equipment to extend its lifespan.</li>
        <li><strong>Training:</strong> We can provide training to your staff on how to operate and maintain your machinery and equipment.</li>
        </ul>
        <p>We are committed to providing our customers with the highest quality aftersales services. We work with our customers to understand their needs and deliver solutions that meet their exact requirements.</p>
        <p>If you are looking for a reliable and experienced partner for your aftersales needs, then we encourage you to contact us today. We would be happy to discuss your requirements and recommend the best solution for your needs.</p>
        <p><strong>Here are some additional details that you can include in your summary:</strong></p>
        <ul>
        <li>We have a long history of providing aftersales services to our customers.</li>
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

export default Aftersales;
