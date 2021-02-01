import { useState } from 'react';
import './styles.css';

const SelectedRestaurant = ({ data, userInfo, restaurantChoice }) => {
  return (
    <div className="selectedRestaurant">
      <div className="userInfo">{userInfo}</div>
      {restaurantChoice.length ? (
        <>
          <br />
          <h3>Name: {restaurantChoice[0].name}</h3>
          <ul>
            {restaurantChoice[0].tags.map((tag, index) => {
              return <li key={index}>Taste: {tag.name}</li>;
            })}
          </ul>
          <p>About: {restaurantChoice[0].description}</p>
          <div className="address">
            <h6>Address: {restaurantChoice[0].address}</h6>
            <h6>City: {restaurantChoice[0].city.name}</h6>

            <img src={restaurantChoice[0].img[1]} />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default SelectedRestaurant;
