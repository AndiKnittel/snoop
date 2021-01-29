import './App.css';
import Search from './components/Search';
import SelectedRestaurant from './components/SelectedRestaurant';
import FilteredRestaurants from './components/FilteredRestaurants';

function App() {
  return (
    <div className="App">
      <header>Snoop Noop</header>
      <Search />
      <div className="mainContainer">
        <FilteredRestaurants />
        <SelectedRestaurant />
      </div>
    </div>
  );
}

export default App;
