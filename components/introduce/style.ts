import styled, { keyframes } from "styled-components";

export const updown = keyframes`
  0% {margin-top: 0px;}
	100% {margin-top: 6vh;}
`;

export const goupfr = keyframes`
  from{ transform: translateY(60rem);opacity:0;}
  to{ transform: translateX(0rem);  opacity:1}
`;

export const goupsc = keyframes`
  from{ transform: translateX(0rem);opacity:1;}
  to{ transform: translateX(-1rem);  opacity:1}
`;

export const Introdmaincontainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(84, 119, 173);

  & .face {
    border-radius: 50%;
  }

  & .go {
    transform: translate(0, -10vh);
    transition: 1s ease-in-out;
  }

  & p {
    background-color: white;
    border: 1px solid black;
    border-radius: 25px;
    padding: 5%;
    font-size: 20px;
    line-height: 50px;
    font-weight: 350;
  }
  & .DownArrow {
    opacity: 0.5;

    top: 90vh;
    animation: ${updown} infinite 1.5s;
    position: fixed;
  }

  & .intordbox {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;
