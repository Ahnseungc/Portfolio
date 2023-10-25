import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  & h1 {
    font-size: 60px;
    font-weight: 330;
    color: #5477ad;
    text-align: end;
    margin-right: 10vh;
    margin-top: 5vh;
  }

  & h3 {
    color: #5477ad;
    font-weight: 700;
    font-size: 30px;
  }
  & .wrap {
    margin-top: 5vh;
    padding: 20px;
    background-color: white;
    border: 1px solid black;
    /* box-shadow: 1px 1px 1px 1px gray; */
    border-radius: 25px;
    width: 60%;
    height: 70%;
    justify-content: center;
  }

  & .introd {
    display: flex;
    font: "font1";
    text-align: start;
    margin-right: 10vw;
    font-weight: 500;
    line-height: 1.5;
    margin-left: 1vh;
    padding: 2px;
    align-items: center;

    & .face {
      border-radius: 50%;
    }
  }

  & .wrap_ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .wrap_li {
    list-style: none;
    font-size: 13px;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  & .wrap_li h3 {
    margin-bottom: 3.5vh;
  }
  & .wrap_li p:not(:last-child) {
    margin-bottom: 5vh;
  }
  & .wrap_li .link {
    margin-bottom: 5vh;
  }

  & p {
    font-size: 20px;
  }

  & Link:hover {
    font-size: 20px;
  }
`;
