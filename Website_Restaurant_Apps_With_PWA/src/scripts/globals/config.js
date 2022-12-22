const CONFIG = {
  // Untuk mendapatkan data dari API bisa disapat dengan menggunakan json-server
  // Dengan cara buka command prompt dan arahkan dimana DATA.json berada (di dalam file src)
  // Jalankan json-server --watch DATA.json hingga json berjalan dan sudah dapat digunakan
  BaseURL: 'https://restaurant-api.dicoding.dev/',
  Restaurants_List: 'https://restaurant-api.dicoding.dev/list',
  // Search_restaurant: 'https://restaurant-api.dicoding.dev/search?q=query',
  Get_image: 'https://restaurant-api.dicoding.dev/images/large/',
  CACHE_NAME: 'Foodie-V1',
  DATABASE_NAME: 'foodie-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',
};

export default CONFIG;
