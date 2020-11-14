import styled from 'styled-components';
import image from '../../assets/image/cv-me.jpeg';


export const StyledImg = styled.div `
  background-color: #fff;
  height: 300px;
  width:300px;
  margin: 0 auto;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  transform: rotate(-2.5deg);
  /* width: 100px;
  height: 100px; */
  position: relative;
  border: 6px solid #fff;
  margin-bottom: 40px;

  &::after {
    content: "";
    position: absolute;
    background-image: url(${image});
    background-size: cover;
    border-radius: 4px;
    top: 0;
    left: 0px;
    bottom: 0px;
    right: 0px;

  }

  @media only screen and (min-width: 600px) {
    grid-column: 1/4;
    margin-bottom: 0px;
  }

`


