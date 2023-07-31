/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
// AutomationPage.js
import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import styled from 'styled-components';


const Pallet = () => {
    return (
    <Wrapper>
        <img src="https://www.icnplast.com/uploads/201713083/ImgScroll/ba201706261809586914058.jpg" alt=""></img>
        <h1>Steel and Plastic Pallets for Racking</h1>
        <p>Steel and plastic pallets are a versatile and durable solution for warehouse racking.</p>
        <p>Steel pallets are strong and can withstand heavy loads, making them ideal for storing heavy items. They are also rust-resistant, making them a good choice for warehouses in humid or corrosive environments.</p>
        <p>Plastic pallets are lightweight and easy to move, making them a good choice for warehouses with narrow aisles. They are also resistant to chemicals and moisture, making them a good choice for storing food and other sensitive items.</p>
        <p>Both steel and plastic pallets can be customized to meet the specific needs of your warehouse. For example, you can choose pallets with different load capacities, heights, and dimensions. You can also choose pallets with features such as anti-slip surfaces or raised edges.</p>
        <p>If you are looking for a durable and versatile solution for warehouse racking, then steel and plastic pallets are a great option.</p>
        <p><strong>Here are some additional details that you can include in your summary:</strong></p>
        <ul>
        <li>Steel pallets are typically more expensive than plastic pallets, but they are also more durable.</li>
        <li>Plastic pallets are typically lighter than steel pallets, making them easier to move.</li>
        <li>Both steel and plastic pallets can be recycled, making them a sustainable option.</li>
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

export default Pallet;