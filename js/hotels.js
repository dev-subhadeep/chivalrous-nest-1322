
hotelData = JSON.parse(localStorage.getItem('hotels')) || []

container = document.querySelector('#results-container')

modal = document.querySelector('dialog')

bookingsData = JSON.parse(localStorage.getItem('bookings')) || []

function Display(data) {
    container.innerHTML = ""

    data.map(el => {
        card = document.createElement('div')
        card.className = 'hotel'
            imgContainer = document.createElement('div')
            imgContainer.className = 'hotel-image'
                img = document.createElement('img')
                imgContainer.append(img)
            detailWrapper = document.createElement('div')
                hotel_name = document.createElement('h2')
                hotel_name.id = 'name'
                city = document.createElement('p')
                city.innerText = el.city
                ratings = document.createElement('p')
                    for (i=0; i < el.ratings; i++){
                        star = document.createElement('i')
                        star.className = 'fa-solid fa-star'
                        ratings.append(star)
                    }
                price = document.createElement('h3')
                price.id = 'price'
                book = document.createElement('button')
                book.className = 'bookBtn'
                detailWrapper.append(hotel_name,city,ratings,price,book)
                

        //adding the data

        img.src = el.images[3]
        hotel_name.innerText = el.name
        price.innerText = el.price + '/day'
        book.innerText = 'Book'

        //adding functionality to the button

        book.addEventListener('click',() => {
            populateModal(el)
            document.getElementById('hotel-details').showModal()
        })

        

        card.append(imgContainer,detailWrapper)
        container.append(card)
    })
}


function hotelCount(data) {
    document.querySelector('#hotels_count').innerText = data.length
}

function populateModal(hotel) {
    form = document.createElement('div')
    form.setAttribute('id','booking')
        cIn = document.createElement('input')
        cIn.setAttribute('type','date')
        cOut = document.createElement('input')
        cOut.setAttribute('type','date')
        rWrap =  document.createElement('div')
            dec = document.createElement('button')
            dec.innerHTML = '<i class="fa-solid fa-minus"></i>'
            roomCount = document.createElement('span')
            roomCount.id = 'roomcount'
            roomCount.innerText = 1
            inc = document.createElement('button')
            inc.innerHTML = '<i class="fa-solid fa-plus"></i>'
            
            rooms = document.createElement('span')
            rooms.innerText = ' room(s)'
        rWrap.append(dec,roomCount,dec,roomCount,inc,rooms)
        bookBtn = document.createElement('button')
        bookBtn.innerText = 'Book Now'

        dec.addEventListener('click', () => {
            hotelRooms = Number(roomCount.innerText)
            if (hotelRooms > 1) {
                hotelRooms--;
                roomCount.innerText = hotelRooms
            }
        })

        inc.addEventListener('click', () => {
            hotelRooms = Number(roomCount.innerText)
            hotelRooms++;
            roomCount.innerText = hotelRooms
        })

        //booking functionality

        bookBtn.addEventListener('click', () => {
            inDate = new Date(cIn.value)
            outDate = new Date(cOut.value)
            difference = outDate - inDate

            days = difference/(24*3600*1000)
            hotel.daysBooked = days
            hotel.bookedRooms = hotelRooms
            bookingsData.push(hotel)
            localStorage.setItem('bookings',JSON.stringify(bookingsData))
            window.open('/thankyou.html')
            // console.log(days)
        })

        cancelBtn = document.createElement('button')
        cancelBtn.innerText = 'Cancel'
        cancelBtn.addEventListener('click', () => {
            document.getElementById('hotel-details').close()
        })

    form.append(cIn,cOut,rWrap,bookBtn,cancelBtn)


    gallery = document.createElement('div')
    gallery.setAttribute('id','gallery')
        img1Container = document.createElement('div')
            img1 = document.createElement('img')
            img1.src = hotel.images[0]
            img1Container.append(img1)
        remImgWrapper = document.createElement('div')
            img2Container = document.createElement('div')
                img2 = document.createElement('img')
                img2Container.append(img2)
                img2.src = hotel.images[1]
            img3Container = document.createElement('div')
                img3 = document.createElement('img')
                img3Container.append(img3)
                img3.src = hotel.images[2]
            img4Container = document.createElement('div')
                img4 = document.createElement('img')
                img4Container.append(img4)
                img4.src = hotel.images[3]
            img5Container = document.createElement('div')
                img5 = document.createElement('img')
                img5Container.append(img5)
                img5.src = hotel.images[4]

            remImgWrapper.append(img2Container,img3Container,img4Container,img5Container)

        gallery.append(img1Container,remImgWrapper)


    description = document.createElement('div')
        hotelName = document.createElement('h2')
        hotelName.innerText = hotel.name
        price = document.createElement('h3')
            curr = document.createElement('span')
            curr.innerText = 'Rs'
            amt = document.createElement('span')
            amt.innerText = hotel.price
            unit = document.createElement('span')
            unit.innerText = '/room'

        price.append(curr,amt,unit)

        city = document.createElement('p')
        city.innerText = hotel.city

        ratings = document.createElement('p')
        ratings.className = 'ratings'

        for(i=0; i<hotel.ratings; i++ ){
            star = document.createElement('i')
            star.className = 'fa-solid fa-star'
            ratings.append(star)
        }

    description.append(hotelName,price,city,ratings)

            
    modal.innerHTML = null
    modal.append(gallery,description,form)
}

Display(hotelData)
hotelCount(hotelData)