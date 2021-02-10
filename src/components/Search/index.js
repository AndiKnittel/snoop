import { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';

const Search = ({ passUserAPItrigger}) => {
	const [openType, setOpenType] = useState(false);
	const [openCity, setOpenCity] = useState(false);
	const toggleCityDropDown = () => setOpenCity(!openCity);
	const toggleTypeDropDown = () => setOpenType(!openType);

	// City-Dropdown and Type-Dropdown
	const [types, setTypes] = useState([]);
	const [cities, setCities] = useState([]);

	// Object for API Call and Additional-User-Info
	const [userChoice, setuserChoice] = useState( {city: ' ', cid: '', type:' ', tid:'' }); // https://www.youtube.com/watch?v=-3lL8oyev9w

	// Refresh API Call and display Additional-User-Info
	useEffect(() => {
 	    passUserAPItrigger(userChoice);
        // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userChoice]);


	// API REQUEST for TYPE
	useEffect(() => {
		axios
			.get('https://secret-cove-78238.herokuapp.com/tag/')
			.then(res => {
				setTypes(res.data.data);
			})
			.catch(err => {
				console.error(err);
			});

		// API REQUEST for CITY
		axios
			.get('https://secret-cove-78238.herokuapp.com/city/')
			.then(res => {
				setCities(res.data.data);
			})
			.catch(err => {
				console.error(err);
			});
	}, []);

	return (
		<div className="search">
			{/* RESTAURANT CITY DROPDOWN*/}
			<div className="dd-wrapper city">
				<div
					className="dd-header"
					role="button"
					onKeyPress={() => toggleCityDropDown()}
					onClick={() => toggleCityDropDown()}
				>
					<div className="dd-header__title">
						<p className="dd-header__title--bold">Search for cityName{}</p>
					</div>
					<div className="dd-header__action">
						<p>{openCity ? 'Close' : 'Open'}</p>
					</div>
				</div>

				{openCity && (
					<ul className="dd-list">
						{cities.map((city, index) => {
							return (
								<li
									className="dd-list-item"
									key={index}
									onClick={() => {
										setuserChoice({ ...userChoice, city: city.name,  cid: city._id});
									}}
								>
									<button
										type="button"
										onClick={() => {
											toggleCityDropDown();
										}}
									>
										<span>{city.name}</span>
									</button>
								</li>
							);
						})}
					</ul>
				)}
			</div>

			{/*RESTAURANT TYPE DROPDOWN*/}
			<div className="dd-wrapper restaurant">
				<div
					className="dd-header"
					role="button"
					onKeyPress={() => toggleTypeDropDown()}
					onClick={() => toggleTypeDropDown()}
				>
					<div className="dd-header__title">
						<p className="dd-header__title--bold">Search for typeName{}</p>
					</div>
					<div className="dd-header__action">
						<p>{openType ? 'Close' : 'Open'}</p>
					</div>
				</div>

				{openType && (
					<ul className="dd-list">
						{types.map((type, index) => {
							return (
								<li
									className="dd-list-item"
									key={index}
									onClick={() => {
										setuserChoice({ ...userChoice, type: type.name, tid: type._id});
									}}
								>
									<button
										type="button"
										onClick={() => {
											toggleTypeDropDown();
										}}
									>
										<span>{type.name}</span>
									</button>
								</li>
							);
						})}
					</ul>
				)}
			</div>
		</div>
	);
};
export default Search;
