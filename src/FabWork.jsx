/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
// AutomationPage.js
import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import styled from 'styled-components';


const FabWork = () => {
  return (
    <Wrapper>
      <img src="https://www.chem-ecol.com/wp-content/uploads/2015/11/metal-fabrication-banner.jpg" alt=""></img>
      <h1>Complete Industrial Fabrication Work</h1>
        <p>We offer a complete range of industrial fabrication services, from design and engineering to manufacturing and installation.</p>
        <p>Our team of experienced engineers and technicians can help you bring your vision to life, no matter how complex. We have a wide range of capabilities, including:</p>
        <ul>
        <li><strong>Metal fabrication:</strong> We can fabricate metal parts and assemblies using a variety of processes, including welding, machining, and forming.</li>
        <li><strong>Plastic fabrication:</strong> We can fabricate plastic parts and assemblies using a variety of processes, including injection molding, CNC machining, and vacuum forming.</li>
        <li><strong>Composite fabrication:</strong> We can fabricate composite parts and assemblies using a variety of processes, including pultrusion, filament winding, and hand layup.</li>
        <li><strong>Assembly:</strong> We can assemble your fabricated parts into finished products, using a variety of methods, including manual assembly, robotic assembly, and automated assembly.</li>
        </ul>
        <p>We also offer a variety of value-added services, including:</p>
        <ul>
        <li><strong>CAD design and drafting:</strong></li>
        <li><strong>3D printing:</strong></li>
        <li><strong>Prototyping:</strong></li>
        <li><strong>Testing and inspection:</strong></li>
        <li><strong>Quality assurance:</strong></li>
        </ul>
        <p>We are committed to providing our customers with the highest quality products and services. We work with our customers to understand their needs and deliver solutions that meet their exact requirements.</p>
        <p>If you are looking for a reliable and experienced partner for your industrial fabrication needs, then we encourage you to contact us today. We would be happy to discuss your project and recommend the best solution for your needs.</p>
        <p><strong>Here are some additional details that you can include in your summary:</strong></p>
        <ul>
        <li>We are ISO 9001:2015 certified, which means that we have a rigorous quality management system in place.</li>
        <li>We have a long history of delivering high-quality products and services to our customers.</li>
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

export default FabWork;
