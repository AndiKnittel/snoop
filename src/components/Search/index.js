import {useEffect, useState} from 'react'; 
import './styles.css'; 
import axios from 'axios';
 

const Search = ({ resetSearch }) => { 

    const [openType, setOpenType] = useState(false);
    const [openCity, setOpenCity] = useState(false);

    const toggleCity = () => setOpenCity(!openCity); 
    const toggleType = () => setOpenType(!openType);

    const [types, setTypes] = useState([]); 
	const [cities, setCities] = useState([]); 
	
	//state variables for city and type
  
	const [cityId, setCityId] = useState('');
	const [typeId, setTypeId] = useState('');


    // TYPE API REQUEST  
	useEffect(() => {
		axios.get('https://secret-cove-78238.herokuapp.com/tag/')
		.then((res) => {  
			 setTypes(res.data.data)
		})
		.catch((err) => {
			console.error(err); 	
		}) 
	},[])  
   


    // CITY API REQUEST 
	useEffect(() => {
		axios.get('https://secret-cove-78238.herokuapp.com/city/')
		.then((res) => {  
			 setCities(res.data.data)
		})
		.catch((err) => {
			console.error(err); 	
		}) 
	},[])  
   
    return ( 
	    	<div className="search"> 

	    	      {/*RESTAURANT DROPDOWN*/} 
	    	     <div className="dd-wrapper restaurant">
				      <div 
				        className="dd-header"
				        role="button"
				        onKeyPress={() => toggleType()}
				        onClick={() => toggleType()}
				      >
				        <div className="dd-header__title">
				          <p className="dd-header__title--bold">Search for Type</p>
				        </div>
				        <div className="dd-header__action">
				          <p>{openType ? 'Close' : 'Open'}</p>
				        </div>
				      </div>
 
				      {openType && (
				        <ul className="dd-list">   
				              {types.map((type, index) => {  
				                return (  
				                <li className="dd-list-item" key={index} onClick={() => {setTypeId(type._id); }}>
				                  <button type="button" onClick={() => {toggleType(); }} >
				                    <span>{type.name}</span> 
				                  </button>
				                </li>
				             )} )}  
				        </ul>
				      )}
				 </div> 



	    	      {/* CITY DROPDOWN*/}
	    	     <div className="dd-wrapper city">
				      <div 
				        className="dd-header"
				        role="button"
				        onKeyPress={() => toggleCity()}
				        onClick={() => toggleCity()}
				      >
				        <div className="dd-header__title">
				          <p className="dd-header__title--bold">Search for City</p>
				        </div>
				        <div className="dd-header__action">
				          <p>{openCity ? 'Close' : 'Open'}</p>
				        </div>
				      </div>
 
				      {openCity && (
				        <ul className="dd-list">   
				              {cities.map((city, index) => {  
				                return (  
				                <li className="dd-list-item" key={index} onClick={() => {setCityId(city._id) }}>
				                  <button type="button" onClick={() => {toggleCity(); }} >
				                    <span>{city.name}</span> 
				                  </button>
				                </li>
				             )} )}  
				        </ul>
				      )}
				    </div>
				<button onClick={() => resetSearch(cityId, typeId)}>Search</button>   
	    	</div>
    	)
} 
export default Search;