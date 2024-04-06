document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    
    // Fetch dog images
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            data.message.forEach(imageUrl => {
                const img = document.createElement("img");
                img.src = imageUrl;
                document.getElementById("dog-image-container").appendChild(img);
            });
        })
        .catch(error => console.error("Error fetching images:", error));

    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    // Fetch dog breeds
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breedsUl = document.getElementById("dog-breeds");
            for (const breed in data.message) {
                const breedLi = document.createElement("li");
                breedLi.innerText = breed;
                breedsUl.appendChild(breedLi);
                breedLi.addEventListener("click", () => {
                    breedLi.style.color = "blue"; // Change color to blue on click
                });
            }
        })
        .catch(error => console.error("Error fetching breeds:", error));
});