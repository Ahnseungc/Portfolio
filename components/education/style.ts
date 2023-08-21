import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  & h1 {
    font-size: 60px;
    font-weight: 330;
    margin-top: 10vh;
    margin-left: 5vh;
  }
  & .wrap {
    background-color: #ff7e36;
    border-radius: 25px;
    width: 60%;
    height: 70%;
    display: flex;
  }
  & .wrap li {
    list-style: none;
    font-size: 13px;
  }
`;
