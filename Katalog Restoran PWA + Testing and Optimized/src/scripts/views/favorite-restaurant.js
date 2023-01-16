/* eslint-disable max-len */
import FavoriteRestaurantIdb from './favorite-list';
import FavoriteRestaurantSearchView from './favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './favorite-restaurant-show-presenter';
import FavoriteRestaurantSearchPresenter from './favorite-restaurant-search-presenter';

const view = new FavoriteRestaurantSearchView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view: new FavoriteRestaurantSearchView(), favoriteRestaurants: FavoriteRestaurantIdb });
    new FavoriteRestaurantSearchPresenter({ favoriteRestaurants: FavoriteRestaurantIdb, view: new FavoriteRestaurantSearchView() });
  },
};

export default Like;
