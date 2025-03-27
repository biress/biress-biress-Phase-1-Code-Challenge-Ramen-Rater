document.addEventListener("DOMContentLoaded", function () {
    
    const ramens = [
        { name: "Shoyu", restaurant: "Shoyu Ramen", image: "./images/shoyu.jpg", rating: "7/10", comment: "Good but a bit salty." }, 
        { name: "Naruto", restaurant: "Naruto Ramen", image: "./images/naruto.jpg", rating: "9/10", comment: "Nice noodles!" },
        { name: "Kojiro", restaurant: "Ramen Bar", image: "./images/kojiro.jpg", rating: "9.5/10", comment: "Great broth!" },
        { name: "Nirvana", restaurant: "Nirvana Ramen", image: "./images/nirvana.jpg", rating: "10/10", comment: "Life-changing!" },
        { name: "Gyukotsu", restaurant: "Ramen House", image: "./images/gyukotsu.jpg", rating:"10/10", comment: "Rich and flavorful!" },

    ];


    function displayRamens() {
        const ramenMenu = document.getElementById("ramen-menu");
        ramens.forEach((ramen, index) => {
            const img = document.createElement("img");
            img.src = ramen.image;
            img.alt = ramen.name;
            img.dataset.index = index; 
            img.addEventListener("click", handleClick);
            ramenMenu.appendChild(img);
        });
    }

    
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

            ramens.push(newRamen); 

            const newRamenImage = document.createElement("img");
            newRamenImage.src = newImage;
            newRamenImage.alt = newName;
            newRamenImage.dataset.index = ramens.length - 1;
            newRamenImage.addEventListener("click", handleClick);

            document.getElementById("ramen-menu").appendChild(newRamenImage);

            form.reset(); 
        });
    }


    function main() {
        displayRamens();
        addSubmitListener();

        
        if (ramens.length > 0) {
            handleClick({ target: { dataset: { index: 0 } } });
        }
    }

    main();
});
