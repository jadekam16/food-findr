import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// TODO: FIX STYLING LATER
const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Hero = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 2.5em;
`

const Subtitle = styled.p`
  font-size: 1.5em;
`

const Button = styled.button`
  padding: 15px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  background-color: #4CAF50;

  &:hover {
    background-color: #45a049;
  }
`

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleQuizNavigation = () => {
    navigate( '/quiz' );
  }
  return (
    <HomeContainer>
      <Hero>
        <Title>Food Findr</Title>
        <Subtitle>The app that makes decisions easier</Subtitle>
        <Button onClick={handleQuizNavigation}>Ask Food Findr</Button>
      </Hero>
    </HomeContainer>
  )
}

export default HomePage