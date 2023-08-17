import styled from "styled-components";

export const Project = styled.div<{ num: number }>`
  width: 40vh;
  height: 35vh;
  border-radius: 0.5rem;
  background: #14bb8a;
  transform: perspective(500px) rotateY(40deg);
  opacity: 0.5;
  position: absolute;
  left: ${(props) => `${props.num * 30 + 30}vh`};
  &:hover {
    transform: perspective(500px) rotateY(40deg) translateZ(5rem);
    transition: 1s ease-in-out;
  }
`;

export const Header = styled.div`
  width: 100%;
  background-color: blue;
  border-radius: 0.5rem 0.5rem 0 0;
`;

export const Body = styled.div``;
