import {useEffect, useState} from 'react'; 
import './styles.css'; 
import axios from 'axios';
 

const Search = ({  passType, passCity }) => { 

    const [openType, setOpenType] = useState(false);
    const [openCity, setOpenCity] = useState(false);

    const toggleCity = () => setOpenCity(!openCity); 
    const toggleType = () => setOpenType(!openType);

    const [type, setType] = useState([]); 
    const [city, setCity] = useState([]); 
  

    // TYPE API REQUEST  
	useEffect(() => {

		axios.get('https://secret-cove-78238.herokuapp.com/tag/')
		.then((tags) => {  
			 setType(tags.data.data)
		})
		.catch((err) => {
			console.error(err); 	
		}) 
	},[])  
   


    // CITY API REQUEST 
	useEffect(() => {

		axios.get('https://secret-cove-78238.herokuapp.com/city/')
		.then((city) => {  
			 setCity(city.data.data)
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
				              {type.map((item, index) => {  
				                return (  
				                <li className="dd-list-item" key={index} onClick={() => {passType(item._id, item.name); }}>
				                  <button type="button" onClick={() => {toggleType(); }} >
				                    <span>{item.name}</span> 
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
				              {city.map((item, index) => {  
				                return (  
				                <li className="dd-list-item" key={index} onClick={() => {passCity(item._id, item.name); }}>
				                  <button type="button" onClick={() => {toggleCity(); }} >
				                    <span>{item.name}</span> 
				                  </button>
				                </li>
				             )} )}  
				        </ul>
				      )}
				    </div>   
	    	</div>
    	)
} 
export default Search;