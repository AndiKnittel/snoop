import { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import SelectedRestaurant from '../SelectedRestaurant';
import RestaurantCard from '../RestaurantCard';
import './styles.css';

const FilteredRestaurants = ({ restaurants, userInfo }) => {
  const [restaurantChoice, SetRestaurantChoice] = useState([]);

  return (
    <>
      <div className="cardContainer">
        {restaurants.map((restaurant, index) => {
          console.log(
            'First Question: LENGTH.method  \
            inside of the Selected-Restaurant \
            Question context will begin here in FilteredRestaurants \
            see: line 22  : ',
            [restaurant]
          );
          return (
            <div key={index} onClick={() => SetRestaurantChoice([restaurant])}>
              <Link to={`/restaurant/${restaurant.name}`}>
                <RestaurantCard
                  restaurantName={restaurant.name}
                  img={restaurant.img[0]}
                  key={index}
                />
              </Link>
            </div>
          );
        })}
      </div>

      <Switch>
        <Route path="/restaurant/:name">
          <SelectedRestaurant
            restaurantChoice={restaurantChoice}
            data={restaurants}
            userInfo={userInfo}
          />
        </Route>

        {/* The default route */}
        <Route path="/">
          <SelectedRestaurant
            restaurantChoice={restaurantChoice}
            data={restaurants}
            userInfo={userInfo}
          />
        </Route>
      </Switch>
    </>
  );
};

export default FilteredRestaurants;
