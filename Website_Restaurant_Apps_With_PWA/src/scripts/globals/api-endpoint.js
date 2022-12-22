import CONFIG from './config';

const API_ENDPOINT = {
  Restaurants: `${CONFIG.Restaurants_List}`,
  RestaurantsImage: `${CONFIG.Get_image}`,
  Detail: (id) => `${CONFIG.BaseURL}detail/${id}`,
};

export default API_ENDPOINT;
