/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
// AutomationPage.js
import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import styled from 'styled-components';


const Shuttle = () => {
    return (
    <Wrapper>
        <img src="https://www.gregorypoolelift.com/wp-content/uploads/2022/12/Hero-Pallet-Shuttle-Crop.jpg" alt=""></img>
        <h1>Orbitor and Pallet Shuttle Systems for Racking</h1>
        <p>Orbitor and pallet shuttle systems are a highly efficient and cost-effective way to store and retrieve pallets in a warehouse.</p>
        <p>Orbitor systems use a small, self-propelled vehicle to move pallets along a rail system inside a racking unit. This allows for fast and easy access to any pallet in the unit, regardless of its location. Pallet shuttle systems use a similar concept, but the shuttle vehicle is larger and can move multiple pallets at once.</p>
        <p>Both Orbitor and pallet shuttle systems can significantly improve the efficiency of your warehouse operations. They can reduce the time it takes to retrieve pallets, increase the number of pallets that can be stored in a given space, and improve safety by reducing the need for employees to climb ladders or enter aisles to access pallets.</p>
        <p>If you are looking for a way to improve the efficiency and profitability of your warehouse, Orbitor and pallet shuttle systems are a great option.</p>
        <p><strong>Here are some additional details that you can include in your summary:</strong></p>
        <ul>
        <li>Orbitor and pallet shuttle systems are typically used in high-volume warehouses where speed and efficiency are critical.</li>
        <li>Orbitor systems are a good choice for warehouses with narrow aisles, as the small vehicle can easily maneuver in tight spaces.</li>
        <li>Pallet shuttle systems are a good choice for warehouses with wider aisles, as the larger vehicle can move more pallets at once.</li>
        <li>Both Orbitor and pallet shuttle systems can be integrated with warehouse management software to automate the retrieval of pallets.</li>
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

export default Shuttle;