import React from 'react';
import styled from 'styled-components';
import Firstpageimg from '../pages/Images/Firstpageimg.png';

const MainLandingContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 50px;
  background-color: #f9f9f9;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const TextSection = styled.div`
  max-width: 100%;
  padding: 60px;
`;

const Title = styled.h1`
  font-size: 2rem;
  line-height: 1.5;
  color: #333;

  span {
    color: red;
    font-weight: bold;
  }
`;

const Subtitle = styled.h3`
  margin-top: 20px;
  color: #666;
  font-size: 1.2rem;
`;

const ButtonGroup = styled.div`
  margin-top: 30px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &.btn-hire {
    background-color: #ff6f00;
    color: white;

    &:hover {
      background-color: #e65b00;
    }
  }

  &.btn-partner {
    background-color: #ffffff;
    color: #333;
    border: 2px solid #333;

    &:hover {
      background-color: #f0f0f0;
    }
  }

  &.btn-apply {
    background-color: #00bfa6;
    color: white;

    &:hover {
      background-color: #008f78;
    }
  }
`;

const ImageSection = styled.div`
  flex: 1;
  max-width: 100%;
  text-align: center;
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 100%;
  border-radius: 15px;
  border: solid 2px #f9f9f9;
`;

// MainLanding Component
function Home() {
  return (
    <MainLandingContainer>
      <ContentContainer>
        <TextSection>
          <Title>
            The only platform that
          </Title>
          <Title>
            <span>guarantees</span> real-world work
          </Title>
          <Title>
            experience across the globe
          </Title>
          <Subtitle>Shaping tomorrow’s workforce: one internship at a time</Subtitle>
          <ButtonGroup>
            <Button className="btn-hire">Companies: Hire</Button>
            <Button className="btn-partner">Educators: Partner</Button>
            <Button className="btn-apply">Interns: Apply</Button>
          </ButtonGroup>
        </TextSection>
        <ImageSection>
          <StyledImage src={Firstpageimg} alt="Internship" />
        </ImageSection>
      </ContentContainer>
    </MainLandingContainer>
  );
}

export default Home;
