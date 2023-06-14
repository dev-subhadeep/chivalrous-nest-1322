menuItems = [
    {
        linkText: 'Home',
        linkUrl: '/'
    },

    {
        linkText: 'About Us',
        linkUrl: '/'
    },

    {
        linkText: 'Hotels',
        linkUrl: '/'
    },

    {
        linkText: 'Flights',
        linkUrl: '/'
    },

    {
        linkText: 'Holidays',
        linkUrl: '/'
    },

    {
        linkText: 'Contact Us',
        linkUrl: '/'
    }
]

//creating the elements

header = document.createElement('header')
logo = document.createElement('div')
logoImg = document.createElement('img')
logo.append(logoImg)
logoImg.src = '/assets/Gypsyfy-logo.png'
nav = document.createElement('nav')
menu = document.createElement('ul')

for (i of menuItems) {
    link = document.createElement('a')
    link.href = i.linkUrl
    linkItem = document.createElement('li')
    linkItem.innerText = i.linkText
    link.className = 'menu-item'

    link.append(linkItem)
    menu.append(link)
}

nav.append(menu)

header.append(logo,nav)

// document.querySelector('.hero').prepend(header)





logo.id = 'logo'
menu.id = 'menu'
