import './styles.css';
const RestaurantCard = ({restaurantName, img}) => {
    return <div className="restaurantCard">
        <img src={img} alt={restaurantName} />
        <h3>{restaurantName}</h3>
    </div>
}

export default RestaurantCard;