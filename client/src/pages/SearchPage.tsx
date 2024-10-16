import React from 'react'
import styled from 'styled-components'

const SearchContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Title = styled.h1`
  font-size: 2.5em;
`

const SearchPage: React.FC = () => {
  return (
    <SearchContainer>
      <Title>Search for Restaurants</Title>
    </SearchContainer>
  )
}

export default SearchPage