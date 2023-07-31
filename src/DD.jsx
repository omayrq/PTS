/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
// AutomationPage.js
import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import styled from 'styled-components';


const DD = () => {
    return (
    <Wrapper>
        <img src="https://welchequipment.com/wp-content/uploads/2019/10/dock-and-door-background.jpg" alt=""></img>
        <h1>Automatic Shutter Doors and Docks</h1>
        <p>Automatic shutter doors and docks are a versatile and efficient solution for warehouse loading and unloading.</p>
        <p>Automatic shutter doors provide a secure and weatherproof barrier between your warehouse and the outside world. They can be opened and closed quickly and easily, making them ideal for high-volume loading and unloading operations. Automatic docks provide a level platform for loading and unloading vehicles, and they can be equipped with features such as conveyor belts and ramps to facilitate the movement of goods.</p>
        <p>Both automatic shutter doors and docks can be customized to meet the specific needs of your warehouse. For example, you can choose doors and docks with different sizes, heights, and features. You can also choose doors and docks that are compatible with your existing warehouse automation systems.</p>
        <p>If you are looking for a secure, efficient, and versatile solution for warehouse loading and unloading, then automatic shutter doors and docks are a great option.</p>
        <p><strong>Here are some additional details that you can include in your summary:</strong></p>
        <ul>
        <li>Automatic shutter doors and docks can help to improve security by providing a physical barrier between your warehouse and the outside world.</li>
        <li>They can also help to improve efficiency by reducing the time it takes to load and unload vehicles.</li>
        <li>Automatic shutter doors and docks can also help to improve safety by reducing the risk of accidents associated with manual loading and unloading operations.</li>
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

export default DD;