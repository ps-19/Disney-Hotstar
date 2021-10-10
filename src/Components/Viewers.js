import React from 'react';
import styled from "styled-components";

const Viewers = (props) => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video> 
      </Wrap>
      <Wrap>
      <img src="/images/viewers-pixar.png" alt="" />
      </Wrap>
      <Wrap>
      <img src="/images/viewers-starwars.png" alt="" />
      </Wrap>
      <Wrap>
      <img src="/images/viewers-marvel.png" alt="" />
      </Wrap>
      <Wrap>
      <img src="/images/viewers-national.png" alt="" />
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  // @media (max-width: 768px) {
  //   grid-template-columns: repeat(1, minmax(0, 1fr));
  // }
`;

const Wrap = styled.div`

  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  // transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.06);
    border-color: rgba(240,240,240,0.8);
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    z-index: 0;
  }

`;

export default Viewers;
