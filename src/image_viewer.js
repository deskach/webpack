import '../styles/image_viewer.css';
import small from '../assets/small.jpg';
import big from '../assets/big.jpg';

let smallImg = document.createElement('img');
smallImg.src = small;

let bigImg = document.createElement('img');
bigImg.src = big;

document.body.appendChild(smallImg);
document.body.appendChild(bigImg);
