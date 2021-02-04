import { useState } from 'react';
import './styles.css';

const SelectedRestaurant = ({ data, userInfo, restaurantChoice }) => {
  // console.log('restaurantChoice: ', restaurantChoice);
  return (
    <div className="selectedRestaurant">
      <div className="userInfo">{userInfo}</div>
      {restaurantChoice ? (
        <>
          <br />
          <h3>Name: {restaurantChoice.name}</h3>
          <ul>
            {restaurantChoice.tags.map((tag, index) => {
              return <li key={index}>Taste: {tag.name}</li>;
            })}
          </ul>
          <p>About: {restaurantChoice.description}</p>
          <div className="address">
            <h6>Address: {restaurantChoice.address}</h6>
            <h6>City: {restaurantChoice.city.name}</h6>

            <img src={restaurantChoice.img[1]} />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default SelectedRestaurant;
