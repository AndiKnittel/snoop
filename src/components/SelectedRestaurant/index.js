import './styles.css';
const SelectedRestaurant = ({
  img,
  name,
  address,
  city,
  description,
  tags,
}) => {
  return (
    <div className="selectedRestaurant">
      <img src="https://picsum.photos/1500/1000"></img>

      <h3>Name: {name}</h3>
      <h5>Tags: {tags}</h5>
      <p>About: {description}</p>
      <div className="address">
        <h6>Address: {address}</h6>
        <h6>City: {city}</h6>
      </div>
    </div>
  );
};

export default SelectedRestaurant;
