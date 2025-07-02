const moon = document.querySelector('.moon');
const cuteCloud = document.querySelector('.cutecloud');
const yellowmoon = document.querySelector('.yellowmoon');
const moon2 = document.querySelector('.moon2');

moon.addEventListener('mouseenter', () => {
    moon.style.display = 'none';
    cuteCloud.style.display = 'block'; 
});

cuteCloud.addEventListener('mouseleave', () => {
    cuteCloud.style.display = 'none'; 
    moon.style.display = 'block';
});

yellowmoon.addEventListener('mouseenter', () => {
    yellowmoon.style.display = 'none';
    moon2.style.display = 'block';
});

moon2.addEventListener('mouseenter', () => {
    moon2.style.display = 'none';
    yellowmoon.style.display = 'block';
});

function toggleDuck() {
const duck = document.getElementById('duck');
 duck.style.display = 'block'; // Show the duck
duck.style.animation = 'moveDuck 2s forwards'; // Start the animation

 // Hide the duck after the animation ends
 duck.addEventListener('animationend', () => {
duck.style.display = 'none'; // Hide the duck after moving
 }, { once: true }); // Use { once: true } to remove the listener after it runs
}