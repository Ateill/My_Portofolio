import FavoriteRestaurantIdb from './favorite-list';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
        <h2 class="favorite_heading">Favorite Movie</h2>
        <div class="favorite-content">
            <div id="restaurant-list" class="restaurant-list"></div>
            <div id="not_found"></div>
        </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurant-list');
    const restaurantNotFound = document.querySelector('#not_found');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    if (restaurantContainer.childNodes.length === 0) {
      restaurantNotFound.innerHTML += `
        <div class="not_found">
          <img class="not_found_img" src="../public/images/not_found_image.jpg" alt="not_found_image"/>
          <h4 class="nullnotif">Restaurant favorite is not found</h4>
        </div>
      `;
    }
  },
};

export default Like;
