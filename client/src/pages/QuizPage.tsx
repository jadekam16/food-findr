import React from 'react'
import styled from 'styled-components';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Title = styled.h1`
  font-size: 2.5em;
`

const QuizPage: React.FC = () => {
  return (
    <HomeContainer>
      <Title>Choose A Restaurant</Title>
    </HomeContainer>
  )
}

export default QuizPage