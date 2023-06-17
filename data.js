const getRandomCity = () => {
    var cities = [
      "Paris",
      "Tokyo",
      "New York City",
      "London",
      "Sydney",
      // Add more cities as needed
    ];
  
    return cities[Math.floor(Math.random() * cities.length)];
  };
  
  const hotels = [
    {
      name: "Enchanted Haven",
      city: 'Paris',
      price: 9000,
      ratings: 4,
      images: [
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/257294025.jpg?k=443e6c987967a576480e37e4a494dfb0db40f15c74489e5674baef5b3418a660&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/257017129.jpg?k=d8c7dbde79016d808b7ea6c5df64cfdbbf033e0371fda530e478760a1d709043&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/257015032.jpg?k=1bf857dc6839fb0eee1f83193b844bb2d9ab15a23059d3493916988316b6e021&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/266212848.jpg?k=fb417e8e93b339ff5dec8f75e45394bcb82454cfb951b35385ef8e7ed60af184&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/257017153.jpg?k=a3a6ceb19d099b0fd34de5dc6f00ffaa1347d5562cabd20b3987a4a1f0e94863&o=&hp=1'
      ]
    },
    {
      name: "Luminous Oasis",
      city: 'New York City',
      price: 12000,
      ratings: 5,
      images: [
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/218073206.jpg?k=0c8ea7e6d51e87e9452181f2fae0777803d8d2fec405d9a10fd929f05132297f&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/218099727.jpg?k=ca9fbb4af997c2f7fcaab3fd0d67315d1767d1c0e9c84dbb0a91e367b3c6c911&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/218099579.jpg?k=1f1111f1ab21fb92b55693706115ff05352ac47a64de0f971b1db1fee60f32e0&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/218085231.jpg?k=c8d02a7ab25dc7fe662de52b3741bc1dfd590e3f8568ac851f061ee493e4b5f2&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/218068971.jpg?k=d9e78d42a66d43afc4dfa973cb942ad7238a87149016ae0e80b71b3000991305&o=&hp=1'
      ]
    },
    // Add more hotel objects
    {
      name: "Serenity Retreat",
      city: 'Tokyo',
      price: 6000,
      ratings: 4,
      images: [
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/388746595.jpg?k=053427546d9ec27b18f4c6b78f1e74f04968fa38bb0e37a459f12a021a45f792&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/440527329.jpg?k=e3dd9ca30ce7584198b412dadfc956a5eec1417fedb468744d74eed2677bbcb0&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/440527330.jpg?k=81dc8895cd75b0ce2bbc2d11cab0415320a063e82f42f2436ca727fa10db7f49&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/440525475.jpg?k=6599fad3e62138c330dcfd9f72cf343fb2a68a8dbb33dd2ce83d8e8422599b65&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/440527332.jpg?k=46cc7f4c1d0a5c599f66b031ac38f7fb1b7551b6a80dcf51b50fd15b27bdf51a&o=&hp=1'
      ]
    },
    // Add more hotel objects
    {
      name: "Tranquility Inn",
      city: 'Tokyo',
      price: 8000,
      ratings: 4,
      images: [
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/130311652.jpg?k=910f80bd43de0b8c3220058a925dfb55b993e84b1e181f17094b4940577dc449&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/130310588.jpg?k=4a7124120ce4ecb5675803e7ecf9425ad3302e5cda40e8059bea1c369d41055e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/130310562.jpg?k=39e37f164a12d16a64e9d48d61123bfb7a1383b8ef264ebc0ccb809ad424bb2b&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/130311672.jpg?k=dbc206dade10d5ea519587aa77685cad3642d228906270cb540ee93e2c60370d&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/130312605.jpg?k=498007279d008f3fa70400858fd3c6b70760005b2bf81d6303309c5fe24a23d4&o=&hp=1'
      ]
    },
    // Add more hotel objects
    {
      name: "Sunrise Paradise",
      city: 'Paris',
      price: 10000,
      ratings: 4,
      images: [
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/42214560.jpg?k=c3f8823652794ef2cd890905fa6888a6bb50b5fb4211a61c21035c0141a7369f&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/242199095.jpg?k=898ffcd088d06bb4767ab85e502d17861e33cd82c9552113969c4a74e789e4ad&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/243479071.jpg?k=fa77a8a64889d156ff0d305ab88452900c561482326c25544bad308b612bc934&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/275880290.jpg?k=8f5d0966a2efa41d229f9391cdea916eb939e53eec0a48248c243bf7f53e2825&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/275862834.jpg?k=9c09e3857829b621f187a85053caa25c3ff2aeebe2f0d16016ebad6a2f9f1f2c&o=&hp=1'
      ]
    },
    // Add more hotel objects
    {
      name: "Paradise Retreat",
      city: 'Paris',
      price: 8000,
      ratings: 3,
      images: [
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/400313500.jpg?k=05deaf26bbfb82982b300119533c08bb65f86b21e9530ae1e2261cad13c4d346&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/454503172.jpg?k=1aa8ee23d805f7cc2b947d1eec0c6a1557d9c77af350aa426a63d04682f8e3d8&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/454496761.jpg?k=5ca5897f6bdb662e5dab3f0492f0b6e3cd7beee0df130b156225c87929da3142&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/400313390.jpg?k=f6c66efc2a89e62c6eb8b30ece43e6682bf300937cbf0366e224407f31b91f06&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/400312916.jpg?k=64fbf66c8a2cc3ceef4ecad03bd25aec2fbcc85ae44ab889c241e42f354f0c59&o=&hp=1'
      ]
    },
    // Add more hotel objects
    {
      name: "Golden Sands",
      city: 'Sydney',
      price: 9500,
      ratings: 5,
      images: [
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/443265704.jpg?k=577ba82b99a0db0f7010fa17f8dede41d6960d3744404059fb684ac9f71b2bb9&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/443264549.jpg?k=9d07884cede3b6e732df19a05db7a76bd9f538bc855162d721b3deba937ac31f&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/443264429.jpg?k=8ae16ff5c6fc1047a46ba2d256a5dc4de09feab428d0d4da0c261308b279210c&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/443265675.jpg?k=3fa4c8ce73ebfdf0f3a8c2bcb2b64c7167d82c545c6dfd281a091939ac10c665&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/443265613.jpg?k=ea0d910caf7921b72881c7e2eebe372c6b5729b613c7ccb1c2619f7d0e6b9587&o=&hp=1'
      ]
    },
    // Add more hotel objects
    {
      name: "Royal Palace",
      city: 'London',
      price: 7000,
      ratings: 4,
      images: [
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/400308820.jpg?k=47e643b0874ba3932da2622c24c5d6938a481c98918a4c9c541572eb5c38531d&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/400310939.jpg?k=655776f8aaf3f231f4eacb4113c041e3df287c3e7f3cc27592c4fce707d0130e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/454494536.jpg?k=4a30106b81e3595cd73e234bba49ec8786d5f27a203689648927d20dbbbe88b7&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/400310442.jpg?k=0ae735e8aac75f42ca534b2ceba3e6e678554dc31856c4f871cb5b60b21cd9f9&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/400145150.jpg?k=1ecf5fcfa44ed3c2e2acce58dbae8eaa6fad90fcff4d93a8eaa83b2129a7b4aa&o=&hp=1'
      ]
    },
    // Add more hotel objects
    {
      name: "Moonlight Lodge",
      city: 'New York City',
      price: 8500,
      ratings: 4,
      images: [
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/460908089.jpg?k=55166d82bfe8a43cd0535662e3e937bce31c1c65b17d0a759e494179944b9740&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/460908182.jpg?k=e09954d8393e000628ed811e5c11322b5e97dc2ba7606eb04862261452b227aa&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/460908124.jpg?k=bbe7dd320da34eec04faaab68b547ce7ca24a72e60dd107d495f4fc23340e5cc&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/460908161.jpg?k=84bf86f3fcd695572816720cdb95e2f2228e21db1ed87026cfde9abfa26c3f01&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/460908307.jpg?k=65982ed9fa9c814a01901961fd213fd13edc01778f7f5a423994606c112b21e9&o=&hp=1'
      ]
    },
    // Add more hotel objects
    {
      name: "Ocean View Resort",
      city: 'Paris',
      price: 9500,
      ratings: 5,
      images: [
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/45466685.jpg?k=b6e9d91723c3db5c2b5f3e23a99d0da322b9a3a9dc3cd054ccdb828909421a0b&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/54650332.jpg?k=397e5802cfa8ee4843253db53e743dd86cc542ae6502b4260c37194997a9987c&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/54647276.jpg?k=1c8b1bd6d224fe03e58dd25275705856a5c20f7e1a0557635be535fec3d9efdd&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/54650373.jpg?k=13007f2fee58b5db3a192e52a9cde7b62bb14fff134a2119b45d8592bc6205a0&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/54652721.jpg?k=254d82465eaf82982440c8c9915ae8deb552bc00622a38515e079c4d3764ecdd&o=&hp=1'
      ]
    },
    // Add more hotel objects
    {
      name: "Tropical Paradise",
      city: 'Paris',
      price: 7500,
      ratings: 4,
      images: [
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/303028531.jpg?k=d81f191010679168f90e88aa8ea561357cc9198e4f23896f79c246bc1d8f9208&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/297676215.jpg?k=8c8f3a52444352f0a2364c993684ee9202eeb062e85eee3b1225371b7d81907e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/297675793.jpg?k=c29a05d636ee78d4e8831b286153696109d7cbe7865c106990ef0d570592e38c&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/297675870.jpg?k=d9fd20e97ff8f3954f548c0b59e8c12d473688b63eb2f0681e1986409f8974fb&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/296206286.jpg?k=513b8eccd6ef22ec664919e1729c602f9ea63ff82b30c92d3bce4aba1d8bf022&o=&hp=1'
      ]
    }
  ];
  
  checkHotelsData = localStorage.getItem('hotels')
  if (checkHotelsData === null) {
    localStorage.setItem('hotels',JSON.stringify(hotels))
  }

  

  var holidays = [
    {
      title: 'Marvelous Madrid',
      duration: 5,
      price: 1500,
      image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFkcmlkfGVufDB8fDB8fHww&w=1000&q=80',
      location: 'Madrid',
      rating: 4
    },
    {
      title: 'Beautiful Bali',
      duration: 7,
      price: 2000,
      image: 'https://static.toiimg.com/photo/msid-53331161,width-96,height-65.cms',
      location: 'Bali',
      rating: 5
    },
    {
      title: 'Serene Sydney',
      duration: 4,
      price: 1800,
      image: 'https://cdn.pixabay.com/photo/2014/06/06/09/36/sydney-opera-house-363244_1280.jpg',
      location: 'Sydney',
      rating: 3
    },
    {
      title: 'Charming Cape Town',
      duration: 6,
      price: 2500,
      image: 'https://images.unsplash.com/photo-1585061528750-3baca2cb6a10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FwZSUyMHRvd258ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      location: 'Cape Town',
      rating: 4
    },
    {
      title: 'Gorgeous Goa',
      duration: 3,
      price: 1200,
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f0/goa.jpg?w=700&h=500&s=1',
      location: 'Goa',
      rating: 5
    },
    {
      title: 'Enchanting Edinburgh',
      duration: 2,
      price: 800,
      image: 'https://media.istockphoto.com/id/1207467401/photo/calton-hill-edinburgh.jpg?s=612x612&w=0&k=20&c=3NzdzsLOUmWz4QWgSLZ3rrTy5ezDixQwu9C_kNs7fS8=',
      location: 'Edinburgh',
      rating: 3
    },
    {
      title: 'Amazing Amsterdam',
      duration: 7,
      price: 2200,
      image: 'https://images.pexels.com/photos/1414467/pexels-photo-1414467.jpeg?cs=srgb&dl=pexels-liam-gant-1414467.jpg&fm=jpg',
      location: 'Amsterdam',
      rating: 4
    },
    {
      title: 'Blissful Bangkok',
      duration: 5,
      price: 1700,
      image: 'https://cdn.britannica.com/57/20057-004-404C9F85/Grand-Palace-Bangkok-Thailand.jpg',
      location: 'Bangkok',
      rating: 2
    },
    {
      title: 'Romantic Rome',
      duration: 4,
      price: 1900,
      image: 'https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs=',
      location: 'Rome',
      rating: 5
    },
    {
      title: 'Dazzling Dubai',
      duration: 7,
      price: 3000,
      image: 'https://media.istockphoto.com/id/467829216/photo/dubai-marina.jpg?s=612x612&w=0&k=20&c=5KNh7wGSoP9i-UJzT-LtUfXgLHKKoBlPAK67R0LHRQY=',
      location: 'Dubai',
      rating: 4
    }
  ];
  
  

  checkHolidaysData = localStorage.getItem('holidays')
  if (checkHolidaysData === null) {
    localStorage.setItem('holidays',JSON.stringify(holidays))
  }