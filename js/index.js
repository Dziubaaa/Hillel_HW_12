const totalNumOfImg = 9;

const ramdonImg = Math.floor(Math.random () * totalNumOfImg) + 1;

const imgPath = `img/${ramdonImg}.jpg`;

document.getElementById('ramdomImg').src = imgPath;