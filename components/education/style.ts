import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  & h1 {
    font-size: 60px;
    font-weight: 330;

    margin-left: 5vh;
  }

  & h3 {
    font-size: 30px;
    font-weight: 330;
  }
  & .wrap {
    margin-top: 5vh;
    padding: 20px;
    background-color: white;
    border: 1px solid black;
    box-shadow: 1px 1px 1px 1px gray;
    border-radius: 25px;
    width: 60%;
    height: 70%;
    display: flex;
    flex-direction: column;

    justify-content: center;
  }

  & .wrap_li {
    list-style: none;
    font-size: 13px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  & p {
    font-size: 20px;
  }

  & .wrap_li:not(:last-child) {
    margin-bottom: 3vh;
  }

  & Link:hover {
    font-size: 20px;
  }
`;
