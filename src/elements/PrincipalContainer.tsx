'use client';
import styled from "styled-components";

const Container = styled.div`
  height: 100svh;
  width: 100vw;
  background-color: #fff;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Content = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export { Container, Content };