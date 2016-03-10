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
    },
    businessInfo: {
      Price: "$"
    },
    hours: {
      Mon: "9am - 10pm",
      Tue: "9am - 10pm",
      Wed: "9am - 10pm",
      Thu: "9am - 10pm",
      Fri: "9am - 10pm",
      Sat: "9am - 10pm",
      Sun: "Closed"
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
    },
    businessInfo: {
      Price: "$$$"
    },
    hours: {
      Mon: "8am - 8pm",
      Tue: "8am - 8pm",
      Wed: "8am - 8pm",
      Thu: "8am - 8pm",
      Fri: "8am - 8pm",
      Sat: "8am - 8pm",
      Sun: "8am - 8pm"
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
    },
    businessInfo: {
      Price: "$$"
    },
    hours: {
      Mon: "4am - 10pm",
      Tue: "5am - 9pm",
      Wed: "6am - 8pm",
      Thu: "7am - 7pm",
      Fri: "8am - 6pm",
      Sat: "9am - 5pm",
      Sun: "10am - 4pm"
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
    },
    businessInfo: {
      Price: "$$$$"
    },
    hours: {
      Mon: "12am - 12pm",
      Tue: "12am - 12pm",
      Wed: "12am - 12pm",
      Thu: "12am - 12pm",
      Fri: "12am - 12pm",
      Sat: "12am - 12pm",
      Sun: "12am - 12pm"
    }
  }
];

var newComment = {
  userName: '',
  star: 0,
  info: ''
}
