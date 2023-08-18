import styled, { keyframes } from "styled-components";

export const goupfr = keyframes`
  from{ transform: translateY(60rem);opacity:0;}
  to{ transform: translateX(0rem);  opacity:1}
`;

export const goupsc = keyframes`
  from{ transform: translateX(0rem);opacity:1;}
  to{ transform: translateX(-20rem);  opacity:1}
`;

export const Introdmaincontainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & .face {
    border-radius: 50%;
    animation: ${goupsc} ease-in-out 2s;
  }
`;
