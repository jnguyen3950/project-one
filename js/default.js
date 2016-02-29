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

//Generating Media block
var mediaPlace = document.createElement('div');
mediaPlace.setAttribute("class", "col-md-8 col-md-offset-2");

for(var index = 0; index < 4; index++) {
console.log(myPlaces[index]);

var mediaInit = document.createElement('div');
mediaInit.setAttribute("class", "media");

var mediaHeading = document.createElement('div');
mediaHeading.setAttribute("class", "media-left media-middle");

var link = document.createElement('a');
link.setAttribute("href", "restaurant.html");

var mediaImg = document.createElement('img');
mediaImg.setAttribute("class", "media-object");
mediaImg.setAttribute("src", "images/yelp-logo.png");

link.appendChild(mediaImg);
mediaHeading.appendChild(link);
mediaInit.appendChild(mediaHeading);

var mediaBody = document.createElement('div');
mediaBody.setAttribute("class", "media-body");

var testH3 = document.createElement('h3');
testH3.setAttribute("class", "media-heading");
testH3.setAttribute("id", "place");

mediaBody.appendChild(testH3);

for(var i = 1; i <= 5; i++) {
  var mediaStar = document.createElement('span');
  mediaStar.setAttribute("id", "reviewStar"+i);

  mediaBody.appendChild(mediaStar);
}

var reviewPara = document.createElement('p');
reviewPara.setAttribute("id", "review");

mediaBody.appendChild(reviewPara);

mediaInit.appendChild(mediaBody);

mediaPlace.appendChild(mediaInit);
//End generating media block

position = document.getElementById('mediaBlock');
position.appendChild(mediaInit);

//Place name block
var place = document.getElementById('place');
var elPlace = document.createElement('span');
var placeText = document.createTextNode(myPlaces[index].placeName);

elPlace.appendChild(placeText);
place.appendChild(elPlace);
// //End place name

//Star block
for (var i = 1; i <= myPlaces[index].star; i++) {
  var position = document.getElementById('reviewStar'+i);
  position.setAttribute("class", "fa fa-star");
}
//End Star block

// Review block
var inputReview = document.getElementById('review');
var el = document.createElement('p');
var elText = document.createTextNode(myPlaces[index].info);

el.appendChild(elText);
inputReview.appendChild(el);
// End Review block

}

console.log(mediaPlace);
