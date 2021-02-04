import './App.css';
import { useEffect, useState } from 'react';
import Search from './components/Search';
import FilteredRestaurants from './components/FilteredRestaurants';
import axios from 'axios';

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [userInfo, setUserInfo] = useState('');

  let checkStatus = (
    cityIdValue,
    cityNameValue,
    typeIdValue,
    typeNameValue
  ) => {
    // CHECK IF  BOTH VALUES ARE AVAILABLE
    if (typeIdValue && cityIdValue) {
      setUserInfo(
        `Okay happy eating in ${cityNameValue} with ${typeNameValue} Food! `
      );
    }
    // CHECK IF  AT LEAST ONE VALUE IS AVAILABLE
    if (!cityIdValue || !typeIdValue) {
      const type = typeNameValue !== 'Type' ? typeNameValue : '';
      const city = cityNameValue !== 'City' ? cityNameValue : '';
      const typeOrCity = cityNameValue !== 'City' ? 'Type' : 'City';
      setUserInfo(`Okay cool, ${type} ${city}! Now Choose your ${typeOrCity}!`);

      // we must SET both Values to Empty here, because the API-request requires EITHER both values OR NONE
      cityIdValue = '';
      typeIdValue = '';
    }

    return [cityIdValue + '/', typeIdValue];
  };

  //  all 4 Values are comming from the Search Component
  const startSearch = (
    cityIdValue,
    cityNameValue,
    typeIdValue,
    typeNameValue
  ) => {
    triggerAPI(
      checkStatus(cityIdValue, cityNameValue, typeIdValue, typeNameValue)
    );
  };

  useEffect(() => {
    //
    startSearch('', '', '', '');
    setUserInfo('Select City and Location above');
  }, []);

  const triggerAPI = async ([cityInfo, typeInfo]) => {
    await axios
      .get(
        `https://${process.env.REACT_APP_API}/restaurant/${cityInfo}${typeInfo}`
      )
      .then(res => {
        setRestaurants(res.data.data);
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="App">
      <header>Snoop Noop</header>
      <Search resetSearch={startSearch} />
      <div className="mainContainer">
        {restaurants.length ? (
          <FilteredRestaurants userInfo={userInfo} restaurants={restaurants} />
        ) : null}
      </div>
    </div>
  );
}
export default App;
