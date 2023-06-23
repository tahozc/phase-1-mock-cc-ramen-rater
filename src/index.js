
let ramenNew

fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then(data => {
        data.forEach(ramen => loadRamen(ramen))
        renderRamen(data[0])

    })
function loadRamen(ramen) {
    const ramenMenu = document.querySelector('#ramen-menu')
    const ramenImg = document.createElement('img')
    ramenImg.src = ramen.image
    ramenMenu.appendChild(ramenImg)
    ramenImg.addEventListener("click", () => renderRamen(ramen))
}
function renderRamen(ramen) {
    ramenNew = ramen
    const name1 = document.querySelector('.name')
    const comment = document.querySelector('#comment-display')
    const restaurant = document.querySelector('.restaurant')
    const rating = document.querySelector('#rating-display')
    const image1 = document.querySelector('.detail-image')
    name1.textContent = ramen.name
    comment.textContent = ramen.comment
    restaurant.textContent = ramen.restaurant
    rating.textContent = ramen.rating
    image1.src = ramen.image
}
document.querySelector('#new-ramen').addEventListener('submit', (e) => makeRamen(e))


function makeRamen(e) {
    e.preventDefault();
    const newName = e.target['name'].value
    const newRestaurant = e.target['restaurant'].value
    const newRating = e.target['rating'].value
    const newImage = e.target['image'].value
    const newComment = e.target['new-comment'].value

    const newRamen = {
        name: newName,
        restaurant: newRestaurant,
        rating: newRating,
        image: newImage,
        comment: newComment
    };

    loadRamen(newRamen)
    e.target.reset()
}
