import RestaurantCard from '../RestaurantCard';
import './styles.css';

const FilteredRestaurants = ({restaurants}) => {
    return <div className="cardContainer">
        {
            restaurants.map((restaurant, index) => (
                <RestaurantCard 
                    restaurantName={restaurant.name}
                    img={restaurant.img[0]}
                    key={index}
                />
            ))
        }    
    </div>
  );
};

export default FilteredRestaurants;
