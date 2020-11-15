const restaurants = require("./restaurants.json");

export const getRestaurants = (dog_friendly = null, vegan_options = null, cuisines = null) => {
    let _restaurants = restaurants;

    if (dog_friendly !== null) {
        _restaurants.filter(restaurant => restaurant["dog-friendly"] === dog_friendly);
    }
    if (vegan_options !== null) {
        _restaurants.filter(restaurant => restaurant["vegan-options"] === vegan_options);
    }
    if (cuisines !== null) {
        _restaurants.filter(restaurant => {
            const cuisine = restaurant.cuisine;
            let match = true;
            //loop through all restaurant cuisine and check 
            for (let i = 0; i < cuisines.length; i++) {
                if (!cuisine.includes(cuisines[i])) {
                    match = false
                }
            }
            if (match) {
                return restaurant;
            }
        });
    }
    return _restaurants;
}
