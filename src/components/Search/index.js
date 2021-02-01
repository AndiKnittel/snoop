import { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';

const Search = ({ resetSearch }) => {
	const [openType, setOpenType] = useState(false);
	const [openCity, setOpenCity] = useState(false);
	const toggleCityDropDown = () => setOpenCity(!openCity);
	const toggleTypeDropDown = () => setOpenType(!openType);

	// Array of City and Type
	const [types, setTypes] = useState([]);
	const [cities, setCities] = useState([]);

	//state variables for the IDs of  cityId and typeId
	console.log(
		'Second Question: Would just a regular Variable be consistent enough here? Or is a StateVariable required? '
	);
	const [typeId, setTypeId] = useState('');
	const [cityId, setCityId] = useState('');
	//state variables for Names of cityName and typeName
	const [typeName, setTypeName] = useState('Type');
	const [cityName, setCityName] = useState('City');

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
	}, []);

	// API REQUEST for CITY
	useEffect(() => {
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
						<p className="dd-header__title--bold">Search for {cityName}</p>
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
										setCityId(city._id);
										setCityName(city.name);
										resetSearch(city._id, city.name, typeId, typeName);
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
						<p className="dd-header__title--bold">Search for {typeName}</p>
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
										setTypeId(type._id);
										setTypeName(type.name);
										resetSearch(cityId, cityName, type._id, type.name);
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
