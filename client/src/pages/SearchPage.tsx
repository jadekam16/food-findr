import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import RestaurantDisplay from '../components/RestaurantDisplay';

const SearchContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5em;
`;

const MapContainer = styled.div`
  height: 400px;
  width: 100%;
  margin-top: 20px;
`;

const API_KEY = 'AIzaSyA-zbbBobwDMVRUJvU7cClohvgYzznr7Yk';
const libraries: ( "places" )[] = [ "places" ];

const SearchPage: React.FC = () => {
  const [ userLocation, setUserLocation ] = useState<google.maps.LatLngLiteral | null>( null );
  const [ restaurants, setRestaurants ] = useState<google.maps.places.PlaceResult[]>( [] );
  const [ map, setMap ] = useState<google.maps.Map | null>( null );

  // Google Maps API Loader: Uses the useJsApiLoader hook to load the Google Maps JavaScript API.
  const { isLoaded } = useJsApiLoader( {
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
    libraries: libraries,
  } );

  // Map Load Callback: Defines a callback function to set the map object in state when the map loads.
  const onMapLoad = useCallback( ( map: google.maps.Map ) => {
    setMap( map );
  }, [] );

  // Get User Location: 
  //    Uses the browser's geolocation API to get the user's current location.
  //    Sets the user's location in state if successful.
  useEffect( () => {
    if ( navigator.geolocation ) {
      navigator.geolocation.getCurrentPosition(
        ( position ) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation( pos );
        },
        () => {
          console.error( "Error: The Geolocation service failed." );
        }
      );
    } else {
      console.error( "Error: Your browser doesn't support geolocation." );
    }
  }, [] );

  // Search for Nearby Restaurants
  //    This effect runs when the map object and user location are available.
  //    It uses the Google Places Service to search for restaurants within 1000 meters of the user's location.
  //    Sets the found restaurants in state.
  useEffect( () => {
    if ( map && userLocation ) {
      const service = new google.maps.places.PlacesService( map );
      const request = {
        location: userLocation,
        radius: 1000, // Search within 1000 meters
        type: 'restaurant'
      };

      service.nearbySearch( request, ( results, status ) => {
        if ( status === google.maps.places.PlacesServiceStatus.OK && results ) {
          setRestaurants( results );
        }
      } );
    }
  }, [ map, userLocation ] );

  // Loading State
  if ( !isLoaded ) return <div>Loading...</div>;

  return (
    <SearchContainer>
      <Title>Search for Nearby Restaurants</Title>
      <MapContainer>
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={userLocation || { lat: 0, lng: 0 }}
          zoom={14}
          onLoad={onMapLoad}
        >
          {userLocation && <Marker position={userLocation} />}
          {restaurants.map( ( restaurant, index ) => (
            <Marker
              key={index}
              position={restaurant.geometry?.location as google.maps.LatLng}
              title={restaurant.name}
            />
          ) )}
        </GoogleMap>
      </MapContainer>
      <RestaurantDisplay restaurants={restaurants} />
    </SearchContainer>
  );
};

export default SearchPage;