import React from "react";

class Search extends React.Component {
	state = {
		search: '',
		type: 'all',
	}

	handleKey = (event) => {
		if (event.key === 'Enter' && this.state.search.length > 2) {
			this.props.searchMovies(this.state.search, this.state.type);
		} 
		if (event.key === 'Enter' && this.state.search.length <= 2) {
			alert('Ошибка! Нужно вводить больше 2-х символов');
		}
	}

	handleFilter = (event) => {
		this.setState(() => ({ type: event.target.dataset.type}), () => {
			this.props.searchMovies(this.state.search, this.state.type);
		})
	}

	searchButtonClick = () => {
		if(this.state.search.length > 2) {
			this.props.searchMovies(this.state.search, this.state.type);
		}
		if (this.state.search.length <= 2) {
			alert('Ошибка! Нужно вводить больше 2-х символов');
		}
	}


	render() {
		return (
			<div className="row">
				<div className="col s12">
					<div className="input-field">
						<input 
							className="validate" 
							type="search" 
							placeholder="Search" 
							value={this.state.search} 
							onChange={(e) => this.setState({search: e.target.value})}
							onKeyDown={this.handleKey}
						/>
						<button className="btn search-btn" onClick={this.searchButtonClick}>Search</button>
					</div>
					<p className="filter">
						<label>
							<input 
								className="with-gap" 
								name="filter" 
								type="radio" 
								data-type="all" 
								// defaultChecked
								onChange={this.handleFilter}
								checked={this.state.type === 'all'}
							/>
							<span>All</span>
						</label>
						<label>
							<input 
								className="with-gap" 
								name="filter" 
								type="radio" 
								data-type="movie" 
								onChange={this.handleFilter}
								checked={this.state.type === 'movie'}
							/>
							<span>Only Films</span>
						</label>
						<label>
							<input 
								className="with-gap" 
								name="filter" 
								type="radio" 
								data-type="series" 
								onChange={this.handleFilter}
								checked={this.state.type === 'series'}
							/>
							<span>Only Series</span>
						</label>
					</p>
				</div>
			</div>
			
		)
	}
}

export { Search }