import * as $ from 'jquery';

const RestaurantList = [];

$(function GetRestaurantList(){
    fetch(' http://localhost:3000/restaurants')
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("NETWORK RESPONSE ERROR");
            }
        })
        .then(res => {
            const restaurant_list = res;

            restaurant_list.forEach((restaurant) => {
                const {
                    id,
                    name,
                    pictureId,
                    rating,
                    city,
                    description
                } = restaurant;

                $("#restaurant-list").append(`
                    <div class="card-container">
                        <div class="card-img">
                            <img class="resto-img" src="${restaurant.pictureId}" alt="picture of restaurant ${restaurant.name}" />
                        </div>
                        <div class="card-content">
                            <div class="title-rating">
                                <a href="#" class="card-title" id="${restaurant.id} card-title">${restaurant.name}</a>
                                <p class="card-rating">${restaurant.rating}/5</p>
                            </div>
                            <div class="card-city"><p>City : ${restaurant.city}</p></div>
                            <div class="card-description">
                                <div class="show-less">
                                    <p>${restaurant.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `);
                RestaurantList.push(restaurant);
            });
        })
        .catch((error) => console.error("FETCH ERROR:", error));
})