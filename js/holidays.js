const holidaysData = JSON.parse(localStorage.getItem('holidays')) || []


const container = document.getElementById('holidays')


function Display(data) {
     data.map(el => {
        const holiday = document.createElement('div')
        holiday.className = 'holiday'

        const imgContainer = document.createElement('div')
        imgContainer.className = 'imgContainer'
        const img = document.createElement('img')
        img.src = el.image
        imgContainer.append(img)

        const holidayDetails = document.createElement('div')
        holidayDetails.className = 'holidayDetails'
        const title = document.createElement('h2')
        title.innerText = el.title

        const price = document.createElement('h3')
            const curr = document.createElement('span')
            curr.innerText = 'Rs'
            const holidayPrice = document.createElement('span')
            holidayPrice.innerText = el.price
            const person = document.createElement('span')
            person.innerText = '/person'

        price.append(curr,holidayPrice,person)

        const duration = document.createElement('p')
            const nightsCount = document.createElement('span')
            nightsCount.innerText = el.duration + 1
            const nights = document.createElement('span')
            nights.innerText = 'N/'
            const daysCount = document.createElement('span')
            daysCount.innerText = el.duration
            const days = document.createElement('span')
            days.innerText = 'D'

        duration.append(nightsCount,nights,daysCount,days)

        const ratings = document.createElement('p')

        for(i=0; i<el.rating; i++){
            const star = document.createElement('i')
            star.className = 'fa-solid fa-star'
            star.style.color = 'gold'
            ratings.append(star)
        }

        const bookHolidayBtn = document.createElement('button')
        bookHolidayBtn.innerText = 'Book'

        holidayDetails.append(title,price,duration,ratings,bookHolidayBtn)

        holiday.append(imgContainer,holidayDetails)

        container.append(holiday)
     })   
}

Display(holidaysData)