import React from 'react';
import styled from 'styled-components';

const RestaurantGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px 0;
`;

const RestaurantCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const RestaurantName = styled.h3`
  margin: 0 0 10px 0;
  font-size: 1.2em;
  color: #333;
`;

const RestaurantVicinity = styled.p`
  margin: 0;
  color: #666;
  font-size: 0.9em;
`;

const RestaurantRating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const RatingStar = styled.span`
  color: #ffc107;
  margin-right: 5px;
`;

interface RestaurantListProps {
  restaurants: google.maps.places.PlaceResult[];
}

const RestaurantDisplay: React.FC<RestaurantListProps> = ( { restaurants } ) => {
  return (
    <RestaurantGrid>
      {restaurants.map( ( restaurant, index ) => (
        <RestaurantCard key={index}>
          <RestaurantName>{restaurant.name}</RestaurantName>
          <RestaurantVicinity>{restaurant.vicinity}</RestaurantVicinity>
          {restaurant.rating && (
            <RestaurantRating>
              <RatingStar>★</RatingStar>
              {restaurant.rating.toFixed( 1 )}
            </RestaurantRating>
          )}
        </RestaurantCard>
      ) )}
    </RestaurantGrid>
  );
};

export default RestaurantDisplay;