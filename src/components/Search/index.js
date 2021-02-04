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

	const [typeId, setTypeId] = useState('');
	const [cityId, setCityId] = useState('');
	//state variables for Names of cityName and typeName
	const [typeName, setTypeName] = useState('Type');
	const [cityName, setCityName] = useState('City');

	const [userChoice, setUserChoice] = useState([]);

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

		class userInteraction {
			constructor(tname = 'Type', tid = 'tid', cname = 'City', cid = 'cid') {
				this._tname = tname;
				this._tid = tid;
				this._cname = cname;
				this._cid = cid;
			}

			set setCityName(cname) {
				this._cname = cname;
			}
			set setCityId(cid) {
				this._cid = cid;
			}
			set setTypeName(tname) {
				this._tname = tname;
			}
			set setTypeId(tid) {
				this._tid = tid;
			}

			get getCity() {
				return this._cid + ' ' + this._cname;
			}
			get getType() {
				return this._tid + ' ' + this._tname;
			}
		}

		// const test1 = new userInteraction();
		// console.log('test1  ', test1);
		// test1.setCityName = 'Bremen';
		// console.log('test1 after changed value  ', test1);
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
