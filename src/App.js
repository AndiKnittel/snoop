import './App.css';
import {useEffect, useState} from 'react';  
import Search from './components/Search';
import SelectedRestaurant from './components/SelectedRestaurant';
import FilteredRestaurants from './components/FilteredRestaurants';
import axios from 'axios';
  
function App() {

const [restaurants, setRestaurants] = useState([]);
const [searchKeywords, setSearchKeywords] = useState({});

const resetSearch = (cityId, typeId) => {
  const keywords = {
    cityId: cityId,
    typeId: typeId
  }
  setSearchKeywords(keywords);
}

useEffect(() => {
  axios.get(`https://secret-cove-78238.herokuapp.com/restaurant/${searchKeywords.cityId}/${searchKeywords.typeId} `)
  .then(res => {
    setRestaurants(res.data.data)
  })
  .catch(err => console.error(err))
}, [searchKeywords])
 
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
      <Search resetSearch={resetSearch}  />
      <div className="mainContainer">
        {restaurants.length ? <FilteredRestaurants restaurants={restaurants} /> : null}
        <SelectedRestaurant />
      </div>
    </div>
  );
}

export default App;

 