selectLocation = document.getElementById('location')
selectCategory = document.getElementById('category')
selectRating = document.getElementById('rating')
selectionBtn = document.getElementById('sendFilteredData')


selectionBtn.addEventListener('click', () => {
    const location = selectLocation.value
    const category = selectCategory.value
    const rating = selectRating.value
    if (category==='hotels'){
        window.open(`/hotels.html?location=${location}&minrating=${rating}&category=${category}`)
    }
})

