document.addEventListener("DOMContentLoaded", function () {
    // Data: Array of ramen objects
    const ramens = [
        { name: "Shoyu", restaurant: "Shoyu Ramen", image: "./images/shoyu.jpg", rating: "7/10", comment: "Good but a bit salty." }, 
        { name: "Naruto", restaurant: "Naruto Ramen", image: "./images/naruto.jpg", rating: "9/10", comment: "Nice noodles!" },
        { name: "Kojiro", restaurant: "Ramen Bar", image: "./images/kojiro.jpg", rating: "9.5/10", comment: "Great broth!" },
        { name: "Nirvana", restaurant: "Nirvana Ramen", image: "./images/nirvana.jpg", rating: "10/10", comment: "Life-changing!" },
        { name: "Gyukotsu", restaurant: "Ramen House", image: "./images/gyukotsu.jpg", rating:"10/10", comment: "Rich and flavorful!" },

    ];

    // Function to display ramen images
    function displayRamens() {
        const ramenMenu = document.getElementById("ramen-menu");
        ramens.forEach((ramen, index) => {
            const img = document.createElement("img");
            img.src = ramen.image;
            img.alt = ramen.name;
            img.dataset.index = index; // Store the ramen index in the data attribute
            img.addEventListener("click", handleClick);
            ramenMenu.appendChild(img);
        });
    }

    // Function to handle ramen image click
    function handleClick(event) {
        const index = event.target.dataset.index;
        const ramen = ramens[index];

        const detailImage = document.getElementById("detail-image","detail-name");
        const detailName = document.getElementById("detail-name");
        const detailRestaurant = document.getElementById("detail-restaurant");
        const detailRating = document.getElementById("detail-rating");
        const detailComment = document.getElementById("detail-comment");


        detailImage.src = ramen.image;
        detailName.textContent = ramen.name;
        detailRestaurant.textContent = ramen.restaurant;
        detailRating.textContent = `Rating: ${ramen.rating}`;
        detailComment.textContent = ramen.comment;
    }

    // Function to handle new ramen form submission
    function addSubmitListener() {
        const form = document.getElementById("new-ramen-form");

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const newName = document.getElementById("new-name").value;
            const newRestaurant = document.getElementById("new-restaurant").value;
            const newImage = document.getElementById("new-image").value;
            const newRating = document.getElementById("new-rating").value;
            const newComment = document.getElementById("new-comment").value;

            const newRamen = {
                name: newName,
                restaurant: newRestaurant,
                image: newImage,
                rating: newRating,
                comment: newComment
            };

            ramens.push(newRamen); // Add new ramen to the array

            const newRamenImage = document.createElement("img");
            newRamenImage.src = newImage;
            newRamenImage.alt = newName;
            newRamenImage.dataset.index = ramens.length - 1;
            newRamenImage.addEventListener("click", handleClick);

            document.getElementById("ramen-menu").appendChild(newRamenImage);

            form.reset(); // Reset form after submission
        });
    }

    // Initialize the application
    function main() {
        displayRamens();
        addSubmitListener();

        // Display the details of the first ramen on page load
        if (ramens.length > 0) {
            handleClick({ target: { dataset: { index: 0 } } }); // Trigger click event for first ramen
        }
    }

    main();
});
