import styled from "styled-components";

export const Project = styled.div<{ num: number }>`
  width: 60vh;
  height: 35vh;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  transform: perspective(500px) rotateY(40deg);

  position: absolute;

  left: ${(props) => `${props.num * 10}vh`};

  &:hover {
    /* transform: perspective(500px) rotateY(40deg) translateZ(5rem);
     */
    transform: translate(0, -30vh);
    transition: 1s ease-in-out;
    /* transition: 0.5s ease-in-out; */
  }
`;

export const Header = styled.div`
  height: 5%;
  opacity: 0.5;
  width: 100%;
  display: flex;
  background-color: white;
  border-top: 0.5px solid;
  border-left: 0.5px solid;
  border-right: 0.5px solid;
  border-radius: 0.5rem 0.5rem 0 0;

  justify-content: space-between;
  align-items: center;
  font-weight: 360;
  font-size: 7px;
  padding-left: 5px;
  margin: 0;

  & .circle1 {
    border-radius: 50%;
    background-color: red;
    width: 1.2vh;
    height: 1.2vh;
    margin-right: 1vh;
  }
  & .circle2 {
    border-radius: 50%;
    background-color: orange;
    width: 1.2vh;
    height: 1.2vh;
    margin-right: 1vh;
  }
  & .circle3 {
    border-radius: 50%;
    background-color: green;
    width: 1.2vh;
    height: 1.2vh;
  }
  & .circle_room {
    display: flex;
    margin: 0;
  }
`;

export const Body = styled.div`
  width: 100%;
  height: 95%;
  opacity: 0.8;
  border-radius: 0 0 0.5rem 0.5rem;
  /* border-right: 0.5px solid;
  border-left: 0.5px solid; */
  & .project {
    border-radius: 0 0 0.5rem 0.5rem;
  }
`;
