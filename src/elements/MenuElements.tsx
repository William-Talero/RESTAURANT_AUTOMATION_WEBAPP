"use client";
import styled from "styled-components";

const MenuTitle = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1.2rem;
  background: linear-gradient(90deg, #5d00ff 0%, #0f002d 100%);
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Form = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 5.7rem;
  margin: 0;

  @media (max-width: 60rem) {
    padding: 0 2rem;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  border: 3px solid #8147f463;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  font-weight: 400;
  color: #000;
  outline: none;
  position: relative;

  &:hover,
  &:focus {
    animation: borderAnimation 1s infinite alternate;
  }

  @keyframes borderAnimation {
    0% {
      border-color: blue;
    }
    100% {
      border-color: red;
    }
  }
`;

export { MenuTitle, Form, Input };
