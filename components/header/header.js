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
        linkUrl: '/hotels.html'
    },

    {
        linkText: 'Holidays',
        linkUrl: '/'
    },

    {
        linkText: 'Contact Us',
        linkUrl: '#contact'
    }
]

//creating the elements

header = document.createElement('header')
menuBtn = document.createElement('button')
menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>'
menuBtn.id = 'menu-button'
menuBtn.addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu')
    menu.style = 'transform: translateX(0)'
})
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

header.append(logo,nav,menuBtn)

// document.querySelector('.hero').prepend(header)





logo.id = 'logo'
menu.id = 'menu'

document.getElementById('close-side-menu').addEventListener('click', () => {
    sidemenu = document.getElementById('mobile-menu')
    sidemenu.style = 'transform: translateX(-500px)'
})

