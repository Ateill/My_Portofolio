/* eslint-disable no-unused-vars */
import 'regenerator-runtime';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './app';
import swRegister from './sw-register';

const app = new App({
  button: document.querySelector('.toggle-button'),
  drawer: document.getElementsByClassName('toggle-navbar'),
  content: document.querySelector('#app-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
