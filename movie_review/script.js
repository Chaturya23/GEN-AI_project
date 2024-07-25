document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const movieName = document.getElementById('movieName').value.trim();
    const reviewDiv = document.getElementById('review');
    
    // Default reviews and ratings
    const reviews = {
        "Inception": {
            review: "A mind-bending thriller that will keep you on the edge of your seat.",
            rating: "★★★★☆"
        },
        "The Matrix": {
            review: "A groundbreaking sci-fi film that redefined the genre.",
            rating: "★★★★★"
        },
        "Interstellar": {
            review: "An epic journey through space and time with stunning visuals.",
            rating: "★★★★☆"
        },
        // Add more movie reviews and ratings here
    };
    
    // Get review and rating for the movie
    const movieData = reviews[movieName];
    const reviewText = movieData ? movieData.review : "Sorry, we don't have a review for this movie.";
    const rating = movieData ? movieData.rating : "";
    
    reviewDiv.innerHTML = `
        <div class="review-content">${reviewText}</div>
        ${rating ? `<div class="rating">Rating: ${rating}</div>` : ""}
    `;
});
