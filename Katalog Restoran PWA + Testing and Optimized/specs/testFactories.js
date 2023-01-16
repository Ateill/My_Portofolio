import LikeButtonPresenter from '../src/scripts/like-button-presenter';
import FavoriteRestaurantIdb from '../src/scripts/views/favorite-list';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};
 
export { createLikeButtonPresenterWithRestaurant };