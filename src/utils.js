const restaurants = require("./restaurants.json");

export const getRestaurants = (dog_friendly = null, vegan_options = null, cuisines = null) => {
    let _restaurants = restaurants;
    let filteredRestaurants = [];

    for (let i = 0; i < _restaurants.length; i ++) {
        let selected = true;
        if (dog_friendly !== null && _restaurants[i]["dog-friendly"] !== dog_friendly) {
            selected = false;
        }
        if (vegan_options !== null && _restaurants[i]["vegan-options"] !== vegan_options) {
            selected = false;
        }

        if (cuisines !== null) {
            const cuisine = _restaurants[i].cuisine;
            if (!cuisines.every(c => cuisine.includes(c))) {
                selected = false;
            }
        }
        
        if (selected) {
            console.log(restaurants[i], 'restaurants[i]');
            filteredRestaurants.push(restaurants[i]);
        }
    }

    // if (dog_friendly !== null) {
    //     _restaurants.filter(restaurant => restaurant["dog-friendly"] === dog_friendly);
    // }
    // if (vegan_options !== null) {
    //     _restaurants.filter(restaurant => restaurant["vegan-options"] === vegan_options);
    // }
    // if (cuisines !== null) {
    //     _restaurants.filter(restaurant => {
    //         const cuisine = restaurant.cuisine;
    //         if (cuisines.every(c => cuisine.includes(c))) {
    //             return cuisine;
    //         }
    //         else {
    //             return null;
    //         }
    //     });
    // }

    return filteredRestaurants;
}

export const getCuisines = () => {
    let cuisineList = [];
    let uniqueCuisineList = [];
    let uniqueCuisineListObj = [];
    for (let i = 0; i < restaurants.length; i++) {
        cuisineList = cuisineList.concat(restaurants[i].cuisine);
    }

    for (let j = 0; j < cuisineList.length; j++) {
        if (!uniqueCuisineList.includes(cuisineList[j])) {
            uniqueCuisineList.push(cuisineList[j])
        }
    }

    uniqueCuisineListObj = uniqueCuisineList.map((item,index) => {
        return {name: item, id: index}
    })
  
    return uniqueCuisineListObj;
}