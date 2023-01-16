import { createRestaurantItemTemplate } from '../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
        <h2 class="favorite_heading">Favorite Restaurant</h2>
        <input id="query" type="text" placeholder="Search">
        <div class="favorite-content" id="favorite-content">
            <div id="restaurants" class="restaurants"></div>
        </div>
      `;
  }

  _getEmptyRestaurantTemplate() {
    return `
        <div class="favorite-content">
          <div class="restaurant-item__not__found not_found" tabindex="0" >
            <img class="not_found_img" src="../public/images/not_found_image.jpg" alt="not_found_image"/>
            <h4 class="nullnotif">Restaurant favorite is not found</h4>
          </div>
        </div>
      `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestaurants(restaurants) {
    let html;

    if (restaurants.length) {
      const restaurantList = document.createElement('div');
      restaurantList.setAttribute('id', 'restaurant-list');

      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
      restaurantList.innerHTML = html;

      document.getElementById('restaurants').append(restaurantList);
    } else {
      html = this._getEmptyRestaurantTemplate();
      document.getElementById('restaurants').innerHTML = html;
    }

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }
}

export default FavoriteRestaurantSearchView;
