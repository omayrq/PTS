/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js';
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js';
import styled from "styled-components";
import { Button } from './Styles/button';
import { NavLink } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader"

const firebaseConfig = {
  apiKey: "AIzaSyANOkupeI8MQQFVv66-8nCTt4wxwpv-MQg",
  authDomain: "cart-api-7eccb.firebaseapp.com",
  projectId: "cart-api-7eccb",
  storageBucket: "cart-api-7eccb.appspot.com",
  messagingSenderId: "718883464604",
  appId: "1:718883464604:web:077979695ff2860e291459",
  measurementId: "G-WXWSR2LX8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const cartCollectionRef = collection(db, 'Cart API');

const Services = () => {
  const [expandedCartId, setExpandedCartId] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDocuments();
  }, []);

  async function fetchDocuments() {
    try {
      const querySnapshot = await getDocs(cartCollectionRef);
      const cartItemsData = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setCartItems(cartItemsData);
      setLoading(false);
      console.log('Documents fetched successfully.');
    } catch (error) {
      console.error('Error fetching documents: ', error);
      setLoading(false);
    }
  }

  const toggleCartExpansion = (cartId) => {
    setExpandedCartId((prevId) => (prevId === cartId ? null : cartId));
  };

  return (
    <Wrapper className="section">
      <h2 className='common-heading'><strong>Our Services</strong></h2>
      <div className='container grid'>
        {loading && ( // Conditionally render the loader inside the container when loading is true
          <div className="loading-container">
            <BarLoader
              loading={loading}
              size={80}
              color="blue"
              height={5}
              width={500}
            />
          </div>
        )}
        {!loading &&
          cartItems.map((curElem) => {
          const { id, title, image, description } = curElem;
          const isExpanded = expandedCartId === id;

          const truncatedDescription = isExpanded
            ? description
            : description.slice(0, 100) + "...";

          return (
            <div key={id} className='card'>
              <figure>
                <img src={image} alt={title} />
              </figure>
              <div className='card-data'>
                <h3><strong>{title}</strong></h3>
                {isExpanded ? (
                  <>
                    <p>{description}</p>
                    <Button onClick={() => toggleCartExpansion(id)}>Read less</Button>
                  </>
                ) : (
                  <>
                    <p className='truncated'>{truncatedDescription}</p>
                    <Button onClick={() => toggleCartExpansion(id)}>Read more</Button>
                  </>
                )}
                <NavLink to="/Services"></NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
    margin: 50px auto;
  }

  .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-left: 350px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 1.5rem 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
    }

    .truncated {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* Adjust this value to control the number of lines displayed */
      -webkit-box-orient: vertical;
    }
    
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4rem;

      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }
    }
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }

    &:hover::after {
      width: 100%;
    }

    &:hover img {
      transform: scale(1.1);
    }

    img {
      max-width: 90%;
      margin-top: 1.0rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Services;
