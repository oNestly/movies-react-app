import React, {useState} from "react";

const  Search = (props) => {
	const {searchMovies = Function.prototype} = props;

	const [search, setSearch] = useState('');
	const [type, setType] = useState('all');

	const handleKey = (event) => {
		if (event.key === 'Enter' && search.length > 2) {
			searchMovies(search, type);
		} 
		if (event.key === 'Enter' && search.length <= 2) {
			alert('Ошибка! Нужно ввести больше 2-х символов');
		}
	}

	const handleFilter = (event) => {
		setType(event.target.dataset.type);
		searchMovies(search, event.target.dataset.type);
	}

	const searchButtonClick = () => {
		if(search.length > 2) {
			searchMovies(search, type);
		}
		if (search.length <= 2) {
			alert('Ошибка! Нужно вводить больше 2-х символов');
		}
	}

	return (
		<div className="row">
			<div className="col s12">
				<div className="input-field">
					<input 
						className="validate" 
						type="search" 
						placeholder="Search" 
						value={search} 
						onChange={(e) => setSearch(e.target.value)}
						onKeyDown={handleKey}
					/>
					<button className="btn search-btn" onClick={searchButtonClick}>Search</button>
				</div>
				<p className="filter">
					<label>
						<input 
							className="with-gap" 
							name="filter" 
							type="radio" 
							data-type="all" 
							// defaultChecked
							onChange={handleFilter}
							checked={type === 'all'}
						/>
						<span>All</span>
					</label>
					<label>
						<input 
							className="with-gap" 
							name="filter" 
							type="radio" 
							data-type="movie" 
							onChange={handleFilter}
							checked={type === 'movie'}
						/>
						<span>Only Films</span>
					</label>
					<label>
						<input 
							className="with-gap" 
							name="filter" 
							type="radio" 
							data-type="series" 
							onChange={handleFilter}
							checked={type === 'series'}
						/>
						<span>Only Series</span>
					</label>
				</p>
			</div>
		</div>
	)
}

export { Search }