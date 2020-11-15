import React, { Component } from 'react';
import './App.css';
import './styles/_index.scss';
import Restaurants from './components/Restaurants';
import SearchBar from './components/SearchBar';
import { getRestaurants } from './utils.js';

class App extends Component  {
  state = {
      restaurants: []
  }
  render() {
    const { restaurants } = this.state;
    return (
      <div className="flex-box">
        <div className="searchBar">
          <SearchBar filterRestaurants={this.filterRestaurants} clearFilter={this.clearFilter} />
        </div>
        <div className="restaurants">
          <Restaurants restaurants={restaurants} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    const restaurants = getRestaurants(null, null, null);
        this.setState({ restaurants });
  }

  filterRestaurants = (dog_friendly = null, vegan_options = null, cuisines = null) => {
    const restaurants = getRestaurants(dog_friendly, vegan_options, cuisines);
        this.setState({ restaurants });
  }

  clearFilter = () => {
    const restaurants = getRestaurants();
        this.setState({ restaurants });
  }
  
}

export default App;
