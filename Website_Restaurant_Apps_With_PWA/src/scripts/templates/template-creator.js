import CONFIG from '../globals/config';

const RestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant_title">${restaurant.name}</h2>
  <h2 class="restaurant_label">Restaurant</h2>
  <hr>
  <div id="detail_container">
    <div class="poster-container">
        <img class="restaurant_poster" src="${CONFIG.Get_image + restaurant.pictureId}" alt="${restaurant.title}" />
        <figcaption>${restaurant.name} Restaurant</figcaption>
    </div>
    <div class="restaurant_info">
        <h2 class="information_label">Restaurant Information :</h2>
        <div class="restaurant_name" tabindex="0">
            <h3 class="name_label">Restaurant Name :</h3>
            <p class="restaurant_name">${restaurant.name}</p>
        </div>
        <div class="restaurant_address" tabindex="0">
            <h3 class="address_label">Restaurant Address :</h3>
            <p class="address_name">${restaurant.city}, ${restaurant.address}</p>
        </div>
        <div class="restaurant_rating" tabindex="0">
            <h3 class="rating_label">Restaurant Rating :</h3>
            <p class="rating">${restaurant.rating}/5</p>
        </div>
        <div class="restaurant_description">
            <h3 class="description_label">Restaurant Description : </h3>
            <p class="description" tabindex="0">${restaurant.description}</p>
        </div>
    </div>
  </div>
  <div id="restaurant_menu">
        <h2 class="menu_label">Restaurant Menus :</h2>
        <div id="menu_container">
            <div class="food_container">
                <h3 class="food_label">==== Food ====</h3>
                <div id="restaurant_food" tabindex="0"></div>
            </div>
            <div class="beverage_container">
                <h3 class="beverage_label">==== Beverage ====</h3>
                <div id="restaurant_beverage" tabindex="0"></div>
            </div>
        </div>
    </div>
    <div class="restaurant_review">
        <h2 class="review_label">Restaurant Reviews :</h2>
        <div id="restaurant_review"></div>
    </div>
`;

const FoodTemplate = (foodParse) => `
    <ul>
        <li>${foodParse}</li>
    </ul>
`;

const BaverageTemplate = (beverageParse) => `
    <ul>
        <li>${beverageParse}</li>
    </ul>
`;

const ReviewTemplate = (reviewParse) => `
    <div class="template-container" tabindex="0">
        <div class="review-header">
            <p class="reviewer-name">${reviewParse.name}</p>
            <p class="review-date">${reviewParse.date}</p>
        </div>
        <div class="review-content">
            <p class="the-review">${reviewParse.review}</p>
        </div>
    </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="card-container">
        <div class="card-img">
            <img class="resto-img" src="${CONFIG.Get_image + restaurant.pictureId}" alt="picture of restaurant ${restaurant.name}" />
        </div>
        <div class="card-content">
            <div class="title-rating">
                <a href="/#/detail/${restaurant.id}" class="card-title" id="${restaurant.id} card-title">${restaurant.name}</a>
                <p class="card-rating">Rating : ${restaurant.rating}/5</p>
            </div>
            <div class="card-city"><p>City : ${restaurant.city}</p></div>
            <div class="card-description">
                <div class="show-less">
                    <p>${restaurant.description}</p>
                </div>
            </div>
        </div>
    </div>
`;

const LikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const LikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { createRestaurantItemTemplate, RestaurantDetailTemplate };
export { FoodTemplate, BaverageTemplate, ReviewTemplate };
export { LikeButtonTemplate, LikedButtonTemplate };
