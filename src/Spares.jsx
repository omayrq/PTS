/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
// AutomationPage.js
import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import styled from 'styled-components';


const Spares = () => {
  return (
    <Wrapper>
      <img src="https://imotor-cms-uploads.s3.ap-southeast-2.amazonaws.com/ZavZaHLi5vZ38N99QqbvV6RQ" alt=""></img>
      <h1>Leading Supplier of Machinery and Equipment Spare Parts</h1>
        <p>We are a leading supplier of machinery and equipment spare parts, with a wide range of products to meet the needs of businesses of all sizes.</p>
        <p>We offer a comprehensive range of spare parts, including:</p>
        <ul>
        <li><strong>Original equipment manufacturer (OEM) parts:</strong> We stock a wide range of OEM parts, so you can be sure that you are getting the genuine parts for your machinery.</li>
        <li><strong>Aftermarket parts:</strong> We also offer a range of aftermarket parts, which are a cost-effective alternative to OEM parts.</li>
        <li><strong>Custom-made parts:</strong> We can also manufacture custom-made parts to meet your specific needs.</li>
        </ul>
        <p>We have a team of experienced engineers who can help you identify the right spare parts for your machinery. We also offer a fast and efficient delivery service, so you can get the parts you need when you need them.</p>
        <p>If you are looking for a reliable and trustworthy supplier of machinery and equipment spare parts, then we encourage you to contact us today. We would be happy to discuss your needs and recommend the best solution for your business.</p>
        <p><strong>Here are some additional details that you can include in your summary:</strong></p>
        <ul>
        <li>We have a long history of supplying machinery and equipment spare parts to our customers.</li>
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

export default Spares;
