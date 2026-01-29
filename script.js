const slideshowImages = [
    "picture.jpg",
    "pic2.jpeg",
    "pic3.jpg",
    "pic4.jpg", // add as many as you want
    "pic5.jpeg",
    "pic6.HEIC",
    "pic7.jpg",
    "pic8.HEIC"
];

let currentSlide = 0;
let slideshowInterval;

function yesClicked() {
    document.getElementById("lovePopup").style.display = "block";
    // Play music
    const music = document.getElementById("loveMusic");
    music.play();

    // Start hearts
    startHearts();

    // Start slideshow
    startSlideshow();
}

function startHearts() {
    const container = document.getElementById("heartsContainer");

    const heartInterval = setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}

function closePopup() {
    document.getElementById("lovePopup").style.display = "none";

    // Stop music
    const music = document.getElementById("loveMusic");
    music.pause();
    music.currentTime = 0;

    // Stop slideshow
    clearInterval(slideshowInterval);
    currentSlide = 0; // reset
}

function startSlideshow() {
    const slide = document.getElementById("slideshow");

    // Set first image
    slide.src = slideshowImages[currentSlide];
    slide.style.transform = `rotate(${Math.random() * 20 - 10}deg)`; // random rotation

    // Every 5 seconds, show next image
    slideshowInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % slideshowImages.length;
        slide.src = slideshowImages[currentSlide];
        slide.style.transform = `rotate(${Math.random() * 20 - 10}deg)`; // rotate randomly -10° to 10°
    }, 5000);
}


function noClicked() {
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let yesSize = 1; // scale factor for Yes button

// Function to move No button (desktop + mobile)
function moveNoButton() {
    // Move the No button
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 20);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 20);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    // Alert
    alert("Are you sure? 😅");

    // Grow the Yes button
    yesSize += 0.1; // increase size by 10%
    yesBtn.style.transform = `scale(${yesSize})`;
}

// Desktop hover
noBtn.addEventListener("mouseover", moveNoButton);

// Mobile touch
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // prevent accidental click
    moveNoButton();
});
}