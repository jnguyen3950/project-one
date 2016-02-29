var myPlaces = [
  {
    placeName: "Hometown",
    star: 4,
    info: "Vestibulum ante vulputate parturient lacinia odio quam parturient et fringilla ac tempor parturient ultricies."
  },
  {
    placeName: "Shrimp",
    star: 2.5,
    info: "Lacinia ante erat neque non justo malesuada per nostra ipsum curae adipiscing euismod consequat."
  },
  {
    placeName: "Toasted",
    star: 5,
    info: "Nunc ridiculus enim praesent cubilia sed enim dignissim convallis class est vestibulum ullamcorper."
  },
  {
    placeName: "Bubble",
    star: 2,
    info: "Gravida condimentum commodo magnis tristique scelerisque penatibus etiam donec et interdum aliquam imperdiet vivamus dignissim."
  }
];

//Place name block
var place = document.getElementById('place2');
var elPlace = document.createElement('span');
var placeText = document.createTextNode(myPlaces[0].placeName);

elPlace.appendChild(placeText);
place.appendChild(elPlace);
//End place name

//Star block
for (var i = 1; i <= myPlaces[0].star; i++) {
  var position = document.getElementById('reviewStar'+i);
  position.setAttribute("class", "fa fa-star");
}
//End Star block

// Review block
var inputReview = document.getElementById('review1');
var el = document.createElement('p');
var elText = document.createTextNode(myPlaces[0].info);

el.appendChild(elText);
inputReview.appendChild(el);
//End Review block

console.log(position);
