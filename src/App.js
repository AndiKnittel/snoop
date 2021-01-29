import './App.css';
import {useEffect, useState} from 'react';  
import Search from './components/Search';
import SelectedRestaurant from './components/SelectedRestaurant';
import FilteredRestaurants from './components/FilteredRestaurants';
import axios from 'axios';
  
function App() {

const [restaurants, setRestaurants] = useState([]);
const [city, setCity] = useState('');
const [type, setType] = useState('');
 
const passType = (id, name) => {
	console.log('Type-ID is: ', id, 'Type-Name is: ', name );
}  
const passCity = (id, name) => {
	console.log('City-ID is: ', id, 'City-Name is: ', name );
}   
 
useEffect(() => {

	axios.get('https://secret-cove-78238.herokuapp.com/restaurant')
	.then((res) => { 
		setRestaurants(res.data.data)
	})
	.catch((err) => {
		console.error(err); 	
	}) 
},[]) 

  return (
    <div className="App">
      <header>Snoop Noop</header>
      <Search type={type} passType={passType} passCity={passCity}  />
      <div className="mainContainer">
        {restaurants.length ? <FilteredRestaurants restaurants={restaurants} /> : null}
        <SelectedRestaurant />
      </div>
    </div>
  );
}

export default App;

 