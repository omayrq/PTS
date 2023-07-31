/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { Button } from "../Styles/button";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=923152637357&text&type=phone_number&app_absent=0";

  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div className="contact-short-btn">
            <Button onClick={() => window.open(whatsappLink, '_blank')}>
            <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-icon-png-image_6315990.png" className="WAname" alt="WhatsApp"/>
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* footer section  */}

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <img src="./images/logo1.jpg" alt="logo" className='logo' />
            <p className="fa-center">First Step toward <br></br> innovation</p>
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          {/* 3rs column  */}
          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <a
                  href="https://www.youtube.com/@technicalhub6617"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube className="icons" />
                </a>
              </div>
            </div>
          </div>

          {/* 4th column  */}
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+92 315 263 7357</h3>
          </div>
        </div>

        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} Paragon Technical Solution. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Adjust the number of columns as needed */
    gap: 1rem; /* Adjust the gap size as needed */
  }

  .logo {
    border-radius:80px 80px 5px 5px;
  }

  .WAname{
    width: 15%;
    height: auto;
  }

  input[type=email] {
    width: 85%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  input[type=submit] {
    width: 50%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Adjust the number of columns as needed */
    gap: 2rem; /* Adjust the gap size as needed */
  }

  .footer-social--icons {
    display: flex;
    align-items: center; /* Align icons vertically */
    gap: 2rem;
  }

  .footer-social--icons div {
    padding: 1rem;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px; /* Adjust the width as needed */
    height: 40px; /* Adjust the height as needed */
  }

  .icons {
    color: ${({ theme }) => theme.colors.white};
    font-size: 2.4rem;
    position: relative;
    cursor: pointer;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-bottom--section {
      margin-top: 4rem; /* Set the margin between the footer and footer bottom section */
      margin-bottom: 2rem; /* Set the margin between the footer bottom section and next element */
      padding-top: 7rem; /* Decrease the top padding of the footer bottom section */
      padding-bottom: 4rem; /* Decrease the bottom padding of the footer bottom section */

      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }

      .container {
        display: grid;
        grid-template-columns: 1fr auto; /* Left column takes 1 fraction of available space, right column auto */
        align-items: center; /* Vertically center align the content */
        gap: 2rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

export default Footer;
