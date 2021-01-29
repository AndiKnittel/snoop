import RestaurantCard from '../RestaurantCard';
import './styles.css';
const FilteredRestaurants = () => {
  return (
    <div className="cardContainer">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
};

export default FilteredRestaurants;
