//colors
const colors = ['Crimson', 'DarkOrange', 'RebeccaPurple', 'SeaGreen', 'Teal', 'Sienna', 'SlateGray', 'AntiqueWhite'];

//select items
const color = document.querySelector('.color');
const btn = document.querySelector('#btn');

btn.addEventListener('click', function () {
 const randomNumber = getRandomNumber();
 
color.textContent = colors[randomNumber];
document.body.style.backgroundColor = colors[randomNumber];
 
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}
