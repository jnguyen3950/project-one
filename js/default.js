var myPlaces = [
  {
    placeName: "Hometown",
    star: 4,
    info: "Vestibulum ante vulputate parturient lacinia odio quam parturient et fringilla ac tempor parturient ultricies.",
    refLink: 'Restaurant.html'
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


//
// //Star block
// for (var i = 1; i <= myPlaces[0].star; i++) {
//   var position = document.getElementById('reviewStar'+i);
//   position.setAttribute("class", "fa fa-star");
// }
// //End Star block
//



//Generating Media block
var testPlace = document.createElement('div');
testPlace.setAttribute("class", "col-md-8 col-md-offset-2");

var testMedia = document.createElement('div');
testMedia.setAttribute("class", "media");

var testMediaHeading = document.createElement('div');
testMediaHeading.setAttribute("class", "media-left media-middle");

var testLink = document.createElement('a');
testLink.setAttribute("href", "restaurant.html");

var testImg = document.createElement('img');
testImg.setAttribute("class", "media-object");
testImg.setAttribute("src", "images/yelp-logo.png");

testLink.appendChild(testImg);
testMediaHeading.appendChild(testLink);
testMedia.appendChild(testMediaHeading);

var testMediaBody = document.createElement('div');
testMediaBody.setAttribute("class", "media-body");

var testH3 = document.createElement('h3');
testH3.setAttribute("class", "media-heading");
testH3.setAttribute("id", "place");

var testP = document.createElement('p');
testP.setAttribute("id", "review1");

testMediaBody.appendChild(testH3);
testMediaBody.appendChild(testP);

testMedia.appendChild(testMediaBody);

testPlace.appendChild(testMedia);
//End generating media block

position = document.getElementById('mediaBlock');
position.appendChild(testMedia);

//Place name block
var place = document.getElementById('place');
var elPlace = document.createElement('span');
var placeText = document.createTextNode(myPlaces[0].placeName);

elPlace.appendChild(placeText);
place.appendChild(elPlace);
// //End place name

// Review block
var inputReview = document.getElementById('review1');
var el = document.createElement('p');
var elText = document.createTextNode(myPlaces[0].info);

el.appendChild(elText);
inputReview.appendChild(el);
// End Review block

console.log(testPlace);
