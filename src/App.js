import './App.css';
import Search from './components/Search';
import SelectedRestaurant from './components/SelectedRestaurant';
import FilteredRestaurants from './components/FilteredRestaurants';

function App() {
  return (
    <div className="App">
      <Search />
      <FilteredRestaurants />
      <SelectedRestaurant />
    </div>
  );
}

export default App;
