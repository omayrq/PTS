/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, {useContext} from 'react';
import styled from 'styled-components';
import { Button } from '../Styles/button';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../context';

const HeroSection = () => {
  const { name, image, tagline, content, missionH, mission } = useGlobalContext();

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">{tagline}</p>
          <h1 className="hero-heading">{name}</h1>
          <p className="hero-para">
            {content}
          </p>

          {/* Render company mission only on the about page */}
          {missionH && mission && (
            <>
              <h1 className="hero-heading">{missionH}</h1>
              <p className="hero-para">{mission}</p>
            </>
          )}

          {/* Render button only on the home page */}
          {window.location.pathname === "/" && (
            <Button className="btn hireme-btn">
              <NavLink to="/Contact">Hire us</NavLink>
            </Button>
          )}
        </div>

        <div className="section-hero-image">
          <picture>
            <img src={image} alt="hero image" className="hero-img" />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};


const Wrapper = styled.section`
  padding: 9rem 0;

  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  .section-hero-data {
    flex-basis: 50%;
    max-width: 50%;
  }

  .section-hero-image {
    flex-basis: 50%;
    max-width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn {
    max-width: 16rem;

    &:hover {
      background-color: rgb(98 84 243);
      color: #fff;
    }
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 120%;
  }
`;

export default HeroSection;
