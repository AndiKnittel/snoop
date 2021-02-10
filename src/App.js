import './App.css';
import { useEffect, useState } from 'react';
import Search from './components/Search';
import FilteredRestaurants from './components/FilteredRestaurants';
import axios from 'axios';

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [userInfo, setUserInfo] = useState('');

  useEffect(() => {
     Valcheck_APItrigger( {city: ' ', cid: '', type:' ', tid:'' });
     setUserInfo('Select City and Location above');
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  // Valcheck_APItrigger will test if both Values are available for the API
  // AND update some additional User-Information
  let Valcheck_APItrigger = (object) => {
    const {cid, city, tid, type} = object;

    // CHECK IF  BOTH VALUES ARE AVAILABLE
    if (tid && cid) {
      setUserInfo(
        `Okay happy eating in ${city} with ${type} Food! `
      );
      const cidResult = cid + '/'; // values must be separated bz a slash
      triggerAPI([cidResult, tid]); // console.log('we will SET both Values (we must do  it for the API to work, and we can!')
      // console.log('cidResult, tid ', cidResult, tid  )
    }
    // CHECK IF  AT LEAST ONE VALUE IS AVAILABLE
    if (!cid || !tid) {
      const typeResult = type !== 'Type' ? type : '';
      const cityResult = city !== 'City' ? city : '';
      const typeOrCityResult = city !== 'City' ? 'Type' : 'City';
      setUserInfo(`Okay cool, ${typeResult} ${cityResult}! Now Choose your ${typeOrCityResult}!`);
      triggerAPI(['', '']); //console.log( 'we trigger API with no values. We must SET both Values to Empty here, because the API-request requires EITHER both values OR NONE')
    }
  };

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
      <Search passUserAPItrigger={Valcheck_APItrigger} />
      <div className="mainContainer">
        {restaurants.length ? (
          <FilteredRestaurants userInfo={userInfo} restaurants={restaurants} />
        ) : null}
      </div>
    </div>
  );
}
export default App;
