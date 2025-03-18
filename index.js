// Sample ramen data (you can expand this with more ramen entries)
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "./images/shoyu.jpg", rating: 10, comment: "Delicious!" },
    { id: 2, name: "Kojiro Ramen", restaurant: "Kojiro", image: "./images/kojiro.jpg", rating: 8, comment: "Very flavorful!" },
    { id: 3, name: "Gyukotsu Ramen", restaurant: "Gyukostu", image: "./images/gyukotsu.jpg",rating: 6, comment: "Not bad." },
    { id: 4, name: "Naruto Ramen", restaurant: "Naruto", image: "./images/naruto.jpg", rating: 10, comment: "Best ramen ever!" },
    { id: 5, name: "Nirvana Ramen", restaurant: "Nirvana Nagi", image: "./images/nirvana.jpg", rating: 8, comment: "Yummy!" },
    { id: 6, name: "Shoyu  Ramen", restaurant: "shoyu", image: "./images/shoyu.jpg", rating: 10, comment: "Delicious!" },
 ];

// Function to display all ramen images in the #ramen-menu section
function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.innerHTML = ''; // Clear previous content (if any)

    ramens.forEach((ramen, index) => {
        const ramenImage = document.createElement("img");
        ramenImage.src = ramen.image;
        ramenImage.alt = ramen.name;
        ramenImage.classList.add("ramen-image");
        ramenImage.addEventListener("click", () => handleClick(index)); // Set up click event
        ramenMenu.appendChild(ramenImage);
    });
}

function handleClick(index) {
    const ramen = ramens[index];
    const ramenDetail = document.getElementById("ramen-detail");
    
    document.getElementById("ramen-detail-image").src = ramen.image;
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = `Restaurant: ${ramen.restaurant}`;
    document.getElementById("ramen-rating").textContent = `Rating: ${ramen.rating}/10`;
    document.getElementById("ramen-comment").textContent = `Comment: ${ramen.comment}`;


    ramenDetail.style.display = "block"; 
}
function addSubmitListener() {
    const form = document.getElementById("new-ramen-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const newRamenName = document.getElementById("new-ramen-name").value;
        const newRamenRestaurant = document.getElementById("new-ramen-restaurant").value;
        const newRamenImage = document.getElementById("new-ramen-image").value;
        const newRamenRating = document.getElementById("new-ramen-rating").value || 3; 
        const newRamenComment = document.getElementById("new-ramen-comment").value || "";

        const newRamen = {
            name: newRamenName,
            restaurant: newRamenRestaurant,
            image: newRamenImage,
            rating: parseInt(newRamenRating),
            comment: newRamenComment
        };

        ramens.push(newRamen);

        displayRamens();

        form.reset();
    });
}

function main() {
    displayRamens();       
    addSubmitListener();    
}

document.addEventListener("DOMContentLoaded", main);
