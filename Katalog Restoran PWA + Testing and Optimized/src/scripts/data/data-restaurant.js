import API_ENDPOINT from '../globals/api-endpoint';

class DataRestaurant {
  static async RestaurantsList() {
    const response = await fetch(API_ENDPOINT.Restaurants);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async RestaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.Detail(id));
    return response.json();
  }
}

export default DataRestaurant;
