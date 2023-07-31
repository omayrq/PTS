/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar';
import styled from 'styled-components';

const Header = () => {
  return (
  <MainHeader>
    <NavLink to='/'>
        <img src="./images/logo1.jpg" alt="logo" className='logo' />
    </NavLink> 
    <Navbar />
  </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  // background-color: ${({ theme }) => theme.colors.bg};
  background-image: url('https://t3.ftcdn.net/jpg/02/69/52/10/360_F_269521083_ZVDMVCnbQziVFyWZKSVr8Mc2CTE5alq0.jpg');
  display: flex;
  justify-content: space-between;
  align-items: center;
  
.logo {
  height: auto;
  max-width: 75%;
  
}
`;


export default Header