/* eslint-disable no-param-reassign */
const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, button);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, button);
    });
  },

  _toggleDrawer(event, drawer, button) {
    if (button.classList.contains('open')) {
      event.stopPropagation();
      button.classList.remove('open');
      Array.from(drawer).forEach((x) => {
        x.style.display = 'none';
      });
    } else {
      event.stopPropagation();
      button.classList.add('open');
      Array.from(drawer).forEach((x) => {
        x.style.display = 'block';
      });
    }
  },

  _closeDrawer(event, drawer, button) {
    event.stopPropagation();
    button.classList.remove('open');
    Array.from(drawer).forEach((x) => {
      x.style.display = 'none';
    });
  },
};

export default DrawerInitiator;
