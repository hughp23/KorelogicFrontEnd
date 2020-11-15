import React, { Component } from 'react';

class Restaurants extends Component {
    state = {
        restaurants: []
    }
    render() {
        const { restaurants } = this.props;
        return (
            <div>
                <ul>
                    {restaurants.map((restaurant, index) => {
                        return (
                            <li key={index}>
                                <h2>Name: {restaurant.name}</h2>
                                <h3>Addrss: {restaurant.address}</h3>
                                <ul>
                                    {restaurant.cuisine.map((cuisine,index) => {
                                        return (
                                            <li key={index}>{cuisine}</li>
                                        )
                                    })}
                                </ul>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default Restaurants;