import RestaurantList from '../views/restaurant-list';
import Detail from '../views/detail-restaurant';
import Like from '../views/favorite-restaurant';

const Routes = {
  '/': RestaurantList,
  '/restaurants': RestaurantList,
  '/favorite': Like,
  '/detail/:id': Detail,
};

export default Routes;
