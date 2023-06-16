const getRandomCity = () => {
    var cities = [
      "Paris, France",
      "Tokyo, Japan",
      "New York City, USA",
      "London, UK",
      "Sydney, Australia",
      // Add more cities as needed
    ];
  
    return cities[Math.floor(Math.random() * cities.length)];
  };
  
  const hotels = [
    {
      name: "Enchanted Haven",
      city: getRandomCity(),
      price: 9000,
      ratings: 4,
      images: [
        "https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-living-room_1203-2867.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/cozy-studio-apartment-with-bedroom-living-space_1262-12323.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/luxury-bedroom-hotel_1150-10836.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/3d-rendering-modern-luxury-bedroom-suite-bathroom_105762-1936.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/elegant-hotel-room-with-big-bed_1203-1494.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais"
      ]
    },
    {
      name: "Luminous Oasis",
      city: getRandomCity(),
      price: 12000,
      ratings: 5,
      images: [
        "https://img.freepik.com/free-photo/elegant-hotel-room-with-big-bed_1203-1494.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/premium-photo/3d-rendering-luxury-modern-bedroom-suite-hotel_105762-569.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/loft-luxury-living-room-with-bookshelf-near-dining-table_105762-1796.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/dining-table-with-chairs-tableware_140725-7823.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/premium-photo/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv-working-table_105762-845.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais"
      ]
    },
    // Add more hotel objects
    {
      name: "Serenity Retreat",
      city: getRandomCity(),
      price: 6000,
      ratings: 4,
      images: [
        "https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-living-room_1203-2867.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/cozy-studio-apartment-with-bedroom-living-space_1262-12323.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/luxury-bedroom-hotel_1150-10836.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/3d-rendering-modern-luxury-bedroom-suite-bathroom_105762-1936.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/elegant-hotel-room-with-big-bed_1203-1494.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais"
      ]
    },
    // Add more hotel objects
    {
      name: "Tranquility Inn",
      city: getRandomCity(),
      price: 8000,
      ratings: 4,
      images: [
        "https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-living-room_1203-2867.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/cozy-studio-apartment-with-bedroom-living-space_1262-12323.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/luxury-bedroom-hotel_1150-10836.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/3d-rendering-modern-luxury-bedroom-suite-bathroom_105762-1936.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/elegant-hotel-room-with-big-bed_1203-1494.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais"
      ]
    },
    // Add more hotel objects
    {
      name: "Sunrise Paradise",
      city: getRandomCity(),
      price: 10000,
      ratings: 4,
      images: [
        "https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-living-room_1203-2867.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/cozy-studio-apartment-with-bedroom-living-space_1262-12323.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/luxury-bedroom-hotel_1150-10836.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/3d-rendering-modern-luxury-bedroom-suite-bathroom_105762-1936.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/elegant-hotel-room-with-big-bed_1203-1494.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais"
      ]
    },
    // Add more hotel objects
    {
      name: "Paradise Retreat",
      city: getRandomCity(),
      price: 8000,
      ratings: 3,
      images: [
        "https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-living-room_1203-2867.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/cozy-studio-apartment-with-bedroom-living-space_1262-12323.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/luxury-bedroom-hotel_1150-10836.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/3d-rendering-modern-luxury-bedroom-suite-bathroom_105762-1936.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/elegant-hotel-room-with-big-bed_1203-1494.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais"
      ]
    },
    // Add more hotel objects
    {
      name: "Golden Sands",
      city: getRandomCity(),
      price: 9500,
      ratings: 5,
      images: [
        "https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-living-room_1203-2867.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/cozy-studio-apartment-with-bedroom-living-space_1262-12323.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/luxury-bedroom-hotel_1150-10836.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/3d-rendering-modern-luxury-bedroom-suite-bathroom_105762-1936.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/elegant-hotel-room-with-big-bed_1203-1494.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais"
      ]
    },
    // Add more hotel objects
    {
      name: "Royal Palace",
      city: getRandomCity(),
      price: 7000,
      ratings: 4,
      images: [
        "https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-living-room_1203-2867.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/cozy-studio-apartment-with-bedroom-living-space_1262-12323.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/luxury-bedroom-hotel_1150-10836.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/3d-rendering-modern-luxury-bedroom-suite-bathroom_105762-1936.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/elegant-hotel-room-with-big-bed_1203-1494.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais"
      ]
    },
    // Add more hotel objects
    {
      name: "Moonlight Lodge",
      city: getRandomCity(),
      price: 8500,
      ratings: 4,
      images: [
        "https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-living-room_1203-2867.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/cozy-studio-apartment-with-bedroom-living-space_1262-12323.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/luxury-bedroom-hotel_1150-10836.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/3d-rendering-modern-luxury-bedroom-suite-bathroom_105762-1936.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/elegant-hotel-room-with-big-bed_1203-1494.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais"
      ]
    },
    // Add more hotel objects
    {
      name: "Ocean View Resort",
      city: getRandomCity(),
      price: 9500,
      ratings: 5,
      images: [
        "https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-living-room_1203-2867.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/cozy-studio-apartment-with-bedroom-living-space_1262-12323.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/luxury-bedroom-hotel_1150-10836.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/3d-rendering-modern-luxury-bedroom-suite-bathroom_105762-1936.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/elegant-hotel-room-with-big-bed_1203-1494.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais"
      ]
    },
    // Add more hotel objects
    {
      name: "Tropical Paradise",
      city: getRandomCity(),
      price: 7500,
      ratings: 4,
      images: [
        "https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-living-room_1203-2867.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/luxury-bedroom-hotel_1150-10836.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/cozy-studio-apartment-with-bedroom-living-space_1262-12323.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/3d-rendering-modern-luxury-bedroom-suite-bathroom_105762-1936.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais",
        "https://img.freepik.com/free-photo/elegant-hotel-room-with-big-bed_1203-1494.jpg?size=626&ext=jpg&ga=GA1.1.817686206.1686925766&semt=ais"
      ]
    }
  ];
  
  checkData = localStorage.getItem('hotels')
  if (checkData === null) {
    localStorage.setItem('hotels',JSON.stringify(hotels))
  }