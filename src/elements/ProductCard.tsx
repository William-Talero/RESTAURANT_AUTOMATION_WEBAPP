"use client";
import styled from "styled-components";
import {
  ICardSection,
  ICardTitle,
  ICardButton,
} from "@/interfaces/ProductCard.interface";
import Image from "next/image";

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 60rem) {
    padding: 2rem;
  }
`;

const Card = styled.div`
  width: 48%;
  height: 17rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  margin: 1%;
  overflow: hidden;

  @media (max-width: 60rem) {
    width: 100%;
    margin: 1rem 0;
    flex-direction: column-reverse;
    height: auto;
  }
`;

const CardSection = styled.div<ICardSection>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  background-color: ${(props) => props.bgColor || "transparent"};
  border-radius: ${(props) => props.radius || "0"};
  box-shadow: ${(props) => props.shadow || "none"};
  overflow: ${(props) => props.overflow || "none"};
  position: relative;

  @media (max-width: 60rem) {
    width: 100%;
    height: ${(props) => props.width || "auto"};
    padding: ${(props) => `calc(${props.padding || "0"}/1.5)`};
  }
`;

const CardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;

  @media (max-width: 60rem) {
    max-height: 10rem;
  }
`;

const CardTitle = styled.div<ICardTitle>`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin: 0;
  background-color: transparent;
  font-size: 1.2rem;
  font-weight: 700;
  //Color que sea un degradado de morado claro a oscuro
  background: ${(props) =>
    props.ia ? "linear-gradient(90deg,#5d00ff 0%, #0f002d 100%)" : "#000"};
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 1.2rem;
`;

const CardDescription = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin: 0;
  background-color: transparent;
  font-size: 0.7rem;
  font-weight: 400;
  color: #000;
`;

const TagsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1.2rem;
`;

const Tag = styled.div`
  width: auto;
  height: auto;
  padding: 0.2rem 0.5rem;
  margin-right: 0.4rem;
  margin-bottom: 0.4rem;
  background-color: #003beb;
  color: #fff;
  font-size: 0.6rem;
  font-weight: 400;
  border-radius: 0.5rem;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 1rem 0;
  margin-bottom: 0rem;
`;

const CardButton = styled.button<ICardButton>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  background-color: ${(props) =>
    props.bgColor == "primary"
      ? "#5d00ff"
      : props.bgColor == "secondary"
      ? "#003beb"
      : props.bgColor || "transparent"};
  color: ${(props) => props.color || "#fff"};
  font-size: ${(props) => props.fontSize || ".8rem !important"};
  font-weight: ${(props) => props.fontWeight || "400"};
  border-radius: ${(props) => props.radius || "0"};
  border: ${(props) => props.border || "none"};
  box-shadow: ${(props) => props.shadow || "none"};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.bgColor == "primary"
        ? "#4b00ce"
        : props.bgColor == "secondary"
        ? "#0031c2"
        : props.bgColorHover || "transparent"};
    color: ${(props) => props.colorHover || "#fff"};
    box-shadow: ${(props) => props.shadowHover || "none"};
  }
`;


export {
  CardContainer,
  Card,
  CardSection,
  CardImage,
  CardTitle,
  CardDescription,
  TagsContainer,
  Tag,
  ButtonContainer,
  CardButton,
};
