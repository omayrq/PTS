/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
// AutomationPage.js
import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import styled from 'styled-components';


const Elevator = () => {
    return (
    <Wrapper>
        <img src="https://img.freepik.com/free-vector/elevator-door-set-with-realistic-images-automatic-doors-with-buttons-panel-screens-with-digits-vector-illustration_1284-71002.jpg?w=2000" alt=""></img>
        <h1>Industrial Complete Range of Elevators</h1>
        <p>Our industrial elevators offer a complete range of solutions for your lifting and transportation needs.</p>
        <p>Whether you need to move people, goods, or materials, we have an elevator that can meet your specific requirements. Our elevators are designed for demanding industrial environments and can withstand the rigors of heavy use. They are also equipped with the latest safety features to protect your employees and assets.</p>
        <p>We offer a wide range of elevator options, including:</p>
        <ul>
        <li>Passenger elevators</li>
        <li>Freight elevators</li>
        <li>Material handling elevators</li>
        <li>High-speed elevators</li>
        <li>Mine hoists</li>
        <li>Incline elevators</li>
        </ul>
        <p>We also offer a variety of customization options, so you can tailor your elevator to your exact needs. For example, we can customize the size, capacity, speed, and features of your elevator to meet your specific requirements.</p>
        <p>If you are looking for an industrial elevator that can meet your needs, then we encourage you to contact us today. We would be happy to discuss your requirements and recommend the best elevator for your application.</p>
        <p><strong>Here are some additional details that you can include in your summary:</strong></p>
        <ul>
        <li>Our elevators are manufactured to the highest standards and are backed by our comprehensive warranty.</li>
        <li>We have a team of experienced engineers and technicians who can help you select the right elevator for your application and install it properly.</li>
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

export default Elevator;