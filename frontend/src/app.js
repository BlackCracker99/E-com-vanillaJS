//send data.js data to main in index.html

import HomeScreen from './screens/HomeScreen.js';
const router = () => {
  const main = document.getElementById('main-container');
  main.innerHTML = HomeScreen.render();
};
window.addEventListener('load', router);