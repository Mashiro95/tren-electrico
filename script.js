let currentImageIndex = 0;
const images = document.querySelectorAll('.hero-imagen');

function changeImage() {
    images[currentImageIndex].style.opacity = '0';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.opacity = '1';
}

setInterval(changeImage, 4000);
