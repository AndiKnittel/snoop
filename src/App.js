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
      <Search />
      {restaurants.length ? <FilteredRestaurants restaurants={restaurants} /> : null}
      <SelectedRestaurant />
    </div>
  );
}

export default App;

 