// JavaScript for loading more images
const loadMoreBtn = document.getElementById('loadMoreBtn');
const images = document.querySelector('.images');
const imagesToAdd = [
    'i21.jpg',
    'i24.jpg',
    'i23.jpg',
    'i22.jpg',
    'i31.jpg',
    'i26.jpg',
    'i27.jpg',
    'i28.jpg',
    'i29.jpg',
    'i30.jpg'
    // Add more image URLs here
];

let currentImageIndex = 0;
const imagesPerLoad = 3; // Number of images to load each time

loadMoreBtn.addEventListener('click', () => {
    for (let i = 0; i < imagesPerLoad && currentImageIndex < imagesToAdd.length; i++) {
        const image = document.createElement('img');
        image.src = imagesToAdd[currentImageIndex];
        image.alt = `Image ${currentImageIndex + 4}`;
        images.appendChild(image);
        currentImageIndex++;
    }

    if (currentImageIndex >= imagesToAdd.length) {
        loadMoreBtn.style.display = 'none';
    }
});
