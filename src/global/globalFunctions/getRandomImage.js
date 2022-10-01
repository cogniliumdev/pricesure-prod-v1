import imagesArray from "../../data/cardImages/cardImages.js";

function getRandomImage() {
    const randomImages = imagesArray;
    const randomNumber = Math.floor(Math.random() * randomImages.length);
    return randomImages[randomNumber];
}
export { getRandomImage };