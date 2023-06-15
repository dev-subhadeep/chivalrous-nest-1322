
hotelData = JSON.parse(localStorage.getItem('hotels')) || []

container = document.querySelector('#results-container')

function Display(data) {
    container.innerHTML = ""

    data.map(el => {
        card = document.createElement('div')
        name = document.createElement('h2')
        price = document.createElement('h3')
        book = document.createElement('button')
    })
}