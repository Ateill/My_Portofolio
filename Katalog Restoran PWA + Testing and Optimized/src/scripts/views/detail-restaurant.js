/* eslint-disable quotes */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-destructuring */
import UrlParser from '../routes/url-parser';
import DataRestaurant from '../data/data-restaurant';
import {
  RestaurantDetailTemplate, FoodTemplate, BaverageTemplate, ReviewTemplate,
} from '../templates/template-creator';
import FavoriteRestaurantIdb from './favorite-list';
import LikeButtonPresenter from '../like-button-presenter';

const Detail = {
  async render() {
    return `
      <div class="detail-container" id="detail-container">
          <div id="detail-restaurant"></div>
          <div id="likeButtonContainer"></div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantData = await DataRestaurant.RestaurantDetail(url.id);
    const restaurantDetail = restaurantData.restaurant;
    const restaurantContainer = document.querySelector('#detail-restaurant');
    restaurantContainer.innerHTML = RestaurantDetailTemplate(restaurantDetail);
    // Get Detail Menus and Revies
    const Menus = restaurantDetail.menus;
    const Foods = Menus.foods;
    const Beverages = Menus.drinks;
    const Reviews = restaurantDetail.customerReviews;

    const restaurantFood = document.querySelector('#restaurant_food');
    const restaurantBeverage = document.querySelector('#restaurant_beverage');
    const restaurantReview = document.querySelector('#restaurant_review');

    Foods.forEach((food) => {
      const stringFood = JSON.stringify(food.name);
      const foodParse = JSON.parse(stringFood);
      restaurantFood.innerHTML += FoodTemplate(foodParse);
    });

    Beverages.forEach((beverage) => {
      const stringBeverage = JSON.stringify(beverage.name);
      const beverageParse = JSON.parse(stringBeverage);
      restaurantBeverage.innerHTML += BaverageTemplate(beverageParse);
    });

    Reviews.forEach((review) => {
      const reviewDetail = JSON.stringify(review);
      const reviewParse = JSON.parse(reviewDetail);
      restaurantReview.innerHTML += ReviewTemplate(reviewParse);
    });

    // Like Restaurant
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurantDetail.id,
        name: restaurantDetail.name,
        description: restaurantDetail.description,
        pictureId: restaurantDetail.pictureId,
        rating: restaurantDetail.rating,
        city: restaurantDetail.city,
      },
    });

    console.log(Foods, Beverages, Reviews);
  },
};

export default Detail;
