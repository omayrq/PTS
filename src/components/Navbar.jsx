/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgCloseR } from "react-icons/cg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const Nav = styled.nav`
    /* Your custom navbar styles here */
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    background-color: #fff;
    border-radius: 10px 10px;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
    
    .navbar-list {
      display: flex;
      gap: 4.8rem;

      li {
        list-style: none;
        position: relative;
        padding: 0;

        .navbar-link {
          &:link,
          &:visited {
            text-decoration: none;
            font-size: 1.8rem;
            text-transform: uppercase;
            font-weight: bold;
            color: black;
            transition: color 0.3s linear;

          }

          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }

        .navbar-link.active {
          color: ${({ theme }) => theme.colors.helper};
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          display: flex;
          flex-direction: column;
          background-color: #fff;
          box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
          padding: 0;
          min-width: 200px;
          z-index: 999;
          opacity: 0;
          border: 1px solid #ccc;
          pointer-events: none;
          transition: opacity 0.3s ease;
          

          li {
            position: relative;
            padding: 0;
            border-bottom: 1px solid #ccc;
            margin: 10px; 

            &:last-child {
              border-bottom: none;
              width: 100%;
              
            }

            .navbar-link {
              font-size: 1.4rem;
              padding: 0.5rem;
            }
          }
        }

        &:hover {
          .dropdown-menu {
            display: block;
            opacity: 1;
            pointer-events: auto;
            width: 100%;
          }
        }
      }
    }

    .mobile-navbar-btn {
      display: none;
      

      .close-outline {
        display: none;
      }
    }

    .mobile-navbar-btn[name="close-outline"] {
      display: none;
    }

    @media (max-width: 768px) {
      .mobile-navbar-btn {
        display: inline-block;
      }

      .navbar-list {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: #fff;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
        padding: 1rem 2rem;
        width: 100%;
        z-index: 999;
      }

      .active .navbar-list {
        display: flex;
      }
    }
  `;

  return (
    <Nav className="nav-shad">
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
        <ul className="navbar-list">
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/"
              activeClassName="active"
              exact
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/about"
              activeClassName="active"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
            className="navbar-link" 
            onClick={() => setOpenMenu(false)}
            to="/services">Services</NavLink>
            <ul className="dropdown-menu">
              <li>
                <NavLink
                  className="navbar-link"
                  onClick={() => setOpenMenu(false)}
                  to="/services/AutomationPage"
                >
                  Automation
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navbar-link"
                  onClick={() => setOpenMenu(false)}
                  to="/services/heavyEquip"
                >
                  Heavy Equipments
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navbar-link"
                  onClick={() => setOpenMenu(false)}
                  to="/services/Mhe"
                >
                  MHE's
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navbar-link"
                  onClick={() => setOpenMenu(false)}
                  to="/services/Platform"
                >
                  Aerial Work Machine
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navbar-link"
                  onClick={() => setOpenMenu(false)}
                  to="/services/WHDesign"
                >
                  Warehouse Design
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navbar-link"
                  onClick={() => setOpenMenu(false)}
                  to="/services/Racking"
                >
                  Racking System
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navbar-link"
                  onClick={() => setOpenMenu(false)}
                  to="/services/Shuttle"
                >
                  Pallet Shuttle
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navbar-link"
                  onClick={() => setOpenMenu(false)}
                  to="/services/Pallet"
                >
                  Rack Pallets
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navbar-link"
                  onClick={() => setOpenMenu(false)}
                  to="/services/DD"
                >
                  Auto-Dock & Doors
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navbar-link"
                  onClick={() => setOpenMenu(false)}
                  to="/services/Elevator"
                >
                  Elevators
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navbar-link"
                  onClick={() => setOpenMenu(false)}
                  to="/services/HVAC"
                >
                  Chillers / HVAC
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navbar-link"
                  onClick={() => setOpenMenu(false)}
                  to="/services/Boiler"
                >
                  Boilers
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navbar-link"
                  onClick={() => setOpenMenu(false)}
                  to="/services/RO"
                > 
                  RO Plant
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navbar-link"
                  onClick={() => setOpenMenu(false)}
                  to="/services/Batteries"
                >
                  Batteries
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navbar-link"
                  onClick={() => setOpenMenu(false)}
                  to="/services/Utilities"
                >
                  Industrial Utilities
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navbar-link"
                  onClick={() => setOpenMenu(false)}
                  to="/services/FabWork"
                >
                  Fabrication Work
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navbar-link"
                  onClick={() => setOpenMenu(false)}
                  to="/services/Aftersales"
                >
                  Aftersales Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navbar-link"
                  onClick={() => setOpenMenu(false)}
                  to="/services/Rental"
                >
                  Rental Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navbar-link"
                  onClick={() => setOpenMenu(false)}
                  to="/services/Spares"
                >
                  Spare Part
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/contact"
              activeClassName="active"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        {/* //nav icon */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setOpenMenu(true)}
          />
          <CgCloseR
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
