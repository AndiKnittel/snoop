import './styles.css';

const RestaurantCard = ({restaurantName, img}) => {
    return ( 
    <div className="restaurantCard">
        <img src={img} alt={restaurantName} />
        <h4>{restaurantName}</h4>
    </div>
  );
};


export default RestaurantCard;
