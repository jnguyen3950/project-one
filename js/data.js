var myPlaces = [
  {
    storeId: 0,
    placeName: "Hometown",
    placeType: "restaurant",
    star: 4,
    picture: "restaurant1.jpg",
    info: "Hac blandit a sit a pharetra parturient diam proin ipsum natoque aliquam porttitor elementum parturient est.Vehicula morbi bibendum montes suspendisse ut a nulla vel sagittis montes eu ornare mi a adipiscing vestibulum vestibulum.",
    userComment: {
      user: ["Justin", "Joe"],
      reviewStar: [4, 4],
      comment: ["Elit viverra proin aptent ad purus interdum condimentum ipsum eros etiam ridiculus adipiscing vestibulum.", "Cum mattis arcu odio cursus urna porta a suspendisse dignissim quam hac condimentum fringilla."]
    }
  },
  {
    storeId: 1,
    placeName: "Shrimp",
    placeType: "bar",
    star: 3,
    picture: "restaurant2.jpg",
    info: "Lacinia ante erat neque non justo malesuada per nostra ipsum curae adipiscing euismod consequat.",
    userComment: {
      user: ["Calvin", "Clark"],
      reviewStar: [3, 4],
      comment: ["Ullamcorper a parturient adipiscing ac odio adipiscing a vitae vestibulum condimentum hac senectus ultrices adipiscing adipiscing.", "A a eros lacus vestibulum mus ante eros montes parturient a phasellus congue diam auctor parturient."]
    }
  },
  {
    storeId: 2,
    placeName: "Toasted",
    placeType: "restaurant",
    star: 5,
    picture: "restaurant3.jpg",
    info: "Nunc ridiculus enim praesent cubilia sed enim dignissim convallis class est vestibulum ullamcorper.",
    userComment: {
      user: ["Mindy", "Moe"],
      reviewStar: [2, 4],
      comment: ["Rhoncus amet aenean fringilla platea consequat vestibulum magnis tristique metus potenti parturient.", "Fames adipiscing per massa nulla condimentum a hendrerit a vel at risus cursus non parturient integer ullamcorper gravida nibh ullamcorper condimentum mus in parturient nulla. Habitasse ac nisl a felis ac quisque curabitur consequat condimentum ultricies vel cubilia rhoncus erat facilisi lacus sed."]
    }
  },
  {
    storeId: 3,
    placeName: "Bubble",
    placeType: "bar",
    star: 4,
    picture: "restaurant4.jpg",
    info: "Gravida condimentum commodo magnis tristique scelerisque penatibus etiam donec et interdum aliquam imperdiet vivamus dignissim.",
    userComment: {
      user: ["Dee", "Darcy"],
      reviewStar: [5, 4],
      comment: ["Venenatis luctus vestibulum ultricies eleifend risus feugiat a vehicula sodales orci suspendisse pellentesque.", "Mi est parturient a maecenas tincidunt a dignissim parturient parturient pretium adipiscing vivamus."]
    }
  }
];

var restaurantInfo = [
  {
    Type: "Restaurant",
    Price: "$$",
    Open_now: "Yes"
  },
  {
    Mon: "9am - 10pm",
    Tue: "9am - 10pm",
    Wed: "9am - 10pm",
    Thu: "9am - 10pm",
    Fri: "9am - 10pm",
    Sat: "9am - 10pm",
    Sun: "9am - 10pm"
  }
]

// New objects
var newPlace = {
  placeName: '',
  placeType: 'restaurant',
  star: 0,
  picture: 'restaurant4.jpg',
  info: '',
  refLink: '#'
}

var newComment = {
  userName: '',
  star: 0,
  info: ''
}
