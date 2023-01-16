const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
  });
  
  Scenario('showing empty liked restaurants', ({ I }) => {
    I.seeElement('#query');
    I.waitForText('Restaurant favorite is not found', '.restaurant-item__not__found');
  });
  
  Scenario('liking one restaurant', async ({ I }) => {
    I.waitForElement('.restaurant-item__not__found', 15);
  
    I.amOnPage('/');

    const firstRestaurant = locate('.title-rating a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);
    
    I.waitForElement('.like', 10);
    I.click('.like');

    I.amOnPage('/#/favorite');
    I.waitForElement('.restaurants');
    const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');
    
    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
  });

  Scenario('Unlike restaurant', async ({ I }) => {
    I.amOnPage('/#/favorite');
    I.waitForElement('.restaurant-item__not__found', 15);
  
    I.amOnPage('/');

    const firstRestaurant = locate('.title-rating a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);
    
    I.waitForElement('.like', 10);
    I.click('.like');

    I.amOnPage('/#/favorite');
    I.waitForElement('.restaurants');
    const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');
    
    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

    I.click(locate('.title-rating a').first());
    I.waitForElement('.like');
    I.click('.like');

    I.amOnPage('/#/favorite');
    I.waitForText('Restaurant favorite is not found', '.restaurant-item__not__found');
  })

  Scenario('searching restaurants', async ({ I }) => {
    I.waitForText('Restaurant favorite is not found', '.restaurant-item__not__found');
  
    I.amOnPage('/');
  
    I.waitForElement('.restaurant__title');
  
    const titles = [];
  
    for (let i = 1; i < 4; i++) {
      I.click(locate('.title-rating a').at(i));
      I.waitForElement('.like');
      I.click('.like');
      titles.push(await I.grabTextFrom('.restaurant_title'));
      I.amOnPage('/');
    }
  
    I.amOnPage('/#/favorite');
    I.waitForElement('#query');
  
    const searchQuery = titles[1].substring(1, 3);
    const matchingRestaurants = titles.filter((title) => title.indexOf(searchQuery) !== -1);
  
    I.fillField('#query', searchQuery);
    I.pressKey('Enter');
  
    const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.card-container');
    assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);
  
    matchingRestaurants.forEach(async (title, index) => {
      const visibletitle = await I.grabTextFrom(locate('.title-rating a').at(index + 1));
      assert.strictEqual(title, visibletitle);
    });
  });