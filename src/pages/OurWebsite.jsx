import React from 'react';
import styled from 'styled-components';
//import Companies from '../assets/Companies.webp';
import one from '../pages/Images/one.jpeg';

// Styled Components
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
  // flex-direction:row-reverse;

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
    color: #09f0ca;
    font-weight: bold;
  }
`;

const Subtitle = styled.h3`
  margin-top: 20px;
  color: #666;
  font-size: 1.2rem;
`;

const ImageSection = styled.div`
  flex: 1;
  max-width: 100%;
  text-align: center;
  background-color: #09f0ca; 
  border-radius: 15px; 
  padding: 10px; 
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 100%;
  border-radius: 15px;
  border: solid 2px #f9f9f9;
  
`;

// LandInside Component
function OurWebsite() {
  return (
    <MainLandingContainer>
      <ContentContainer>
        <TextSection>
          <Title>
            Achieve More With
          </Title>
          <Title>
            <span>Ready-to-Work</span>
          </Title>
          <Title>
            Interns
          </Title>
          <Subtitle>Shaping tomorrow’s workforce: one internship at a time</Subtitle>
        </TextSection>
        <ImageSection>
          <StyledImage src={one} alt="Internship" />
        </ImageSection>
      </ContentContainer>
    </MainLandingContainer>
  );
}

export default OurWebsite;