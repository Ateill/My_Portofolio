import FavoriteRestaurantSearchView from "../src/scripts/views/favorite-restaurant-search-view";
import FavoriteRestaurantShowPresenter from "../src/scripts/views/favorite-restaurant-show-presenter";
import FavoriteRestaurantIdb from "../src/scripts/views/favorite-list";

describe('Showing all favorite restaurants', () => {
    let view;

    const renderTemplate = () => {
      view = new FavoriteRestaurantSearchView();
      document.body.innerHTML = view.getTemplate();
    };
  
    beforeEach(() => {
      renderTemplate();
    });

    describe('When no restaurants have been liked', () => {
      it('should render the information that no restaurants have been liked', () => {
        const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);

        const presenter = new FavoriteRestaurantShowPresenter({
          favoriteRestaurants,
          view
        });
        
        const restaurants = [];

        presenter._displayRestaurants(restaurants);

        expect(document.querySelectorAll('.restaurant-item__not__found').length)
          .toEqual(1);
      });

      it('should ask for the favorite restaurants', () => {
        const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
        new FavoriteRestaurantShowPresenter({
          favoriteRestaurants,
          view
        });

        expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1);
      });

      it('should show the information that no restaurants have been liked', (done) => {
        document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
          expect(document.querySelectorAll('.restaurant-item__not__found').length).toEqual(1);
          done();
        });
        
        const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
        favoriteRestaurants.getAllRestaurants.and.returnValues([]);
        
        new FavoriteRestaurantShowPresenter({
          favoriteRestaurants,
          view
        });
      });
    });

    describe('When favorite restaurants exist', () => {
      it('should render the restaurants', () => {
        const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
        const presenter = new FavoriteRestaurantShowPresenter({
          favoriteRestaurants,
          view,
        });
     
        presenter._displayRestaurants([
          {
            id: 11, 
            name: 'A', 
            rating: 3, 
            overview: 'Sebuah restaurant A',
          },
          {
            id: 22, 
            name: 'B', 
            rating: 4, 
            overview: 'Sebuah restaurant B',
          },
        ]);
     
        expect(document.querySelectorAll('.restaurant-item').length).toEqual(2);
      });

      it('should show the restaurants', (done) => {
        document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
          expect(document.querySelectorAll('.restaurant-item').length).toEqual(2);
          done();
        });
        const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb, false);
        favoriteRestaurants.getAllRestaurants.and.returnValues([
          {
            id: 11,
            name: 'A',
            rating: 3,
            description: 'Sebuah restaurant A',
          },
          {
            id: 22,
            name: 'B',
            rating: 4,
            description: 'Sebuah restaurant B',
          },
        ]);
        new FavoriteRestaurantShowPresenter({
          favoriteRestaurants,
          view
        });
      });
    });
});