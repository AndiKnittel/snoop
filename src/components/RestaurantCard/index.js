import './styles.css';

const RestaurantCard = ({ restaurantName, img }) => {
  return (
    <div className="restaurantCard">
      <div className="imageContainer">
        <img src={img} alt={restaurantName} />
      </div>
      <h4>{restaurantName}</h4>
    </div>
  );
};

export default RestaurantCard;
