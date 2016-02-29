var myPlaces = [
  {
    placeName: "Hometown",
    star: 4,
    picture: "restaurant1.jpg",
    info: "Vestibulum ante vulputate parturient lacinia odio quam parturient et fringilla ac tempor parturient ultricies.",
    refLink: "Restaurant.html"
  },
  {
    placeName: "Shrimp",
    star: 2.5,
    picture: "restaurant2.jpg",
    info: "Lacinia ante erat neque non justo malesuada per nostra ipsum curae adipiscing euismod consequat."
  },
  {
    placeName: "Toasted",
    star: 5,
    picture: "restaurant3.jpg",
    info: "Nunc ridiculus enim praesent cubilia sed enim dignissim convallis class est vestibulum ullamcorper."
  },
  {
    placeName: "Bubble",
    star: 2,
    picture: "restaurant4.jpg",
    info: "Gravida condimentum commodo magnis tristique scelerisque penatibus etiam donec et interdum aliquam imperdiet vivamus dignissim."
  }
];

//Generating Media block
for(var index = 0; index < 4; index++) {
  console.log(myPlaces[index]);

  var mediaInit = document.createElement("div");
  mediaInit.setAttribute("class", "media");

  var mediaHeading = document.createElement("div");
  mediaHeading.setAttribute("class", "media-left media-middle");

  var link = document.createElement("a");
  link.setAttribute("href", "restaurant.html");

  var mediaImg = document.createElement("img");
  mediaImg.setAttribute("class", "media-object");
  mediaImg.setAttribute("src", "images/"+myPlaces[index].picture);
  mediaImg.setAttribute("width", "300px");

  link.appendChild(mediaImg);
  mediaHeading.appendChild(link);
  mediaInit.appendChild(mediaHeading);

  var mediaBody = document.createElement("div");
  mediaBody.setAttribute("class", "media-body");

  var mediaH3 = document.createElement("h3");
  mediaH3.setAttribute("class", "media-heading");
  mediaH3.setAttribute("id", "mediaHeader"+index);

  mediaBody.appendChild(mediaH3);

  for(var i = 1; i <= 5; i++) {
    var mediaStar = document.createElement("span");
    mediaStar.setAttribute("id", "reviewStar"+(i+(index*5)));

    mediaBody.appendChild(mediaStar);
  }

  var reviewPara = document.createElement("p");
  reviewPara.setAttribute("id", "review"+index);

  mediaBody.appendChild(reviewPara);
  mediaInit.appendChild(mediaBody);
  //End generating media block

  position = document.getElementById("mediaBlock");
  position.appendChild(mediaInit);

  //Place name block
  var place = document.getElementById("mediaHeader"+index);
  var elPlace = document.createElement("span");
  var placeText = document.createTextNode(myPlaces[index].placeName);

  elPlace.appendChild(placeText);
  place.appendChild(elPlace);
  // //End place name

  //Star block
  for (var i = 1; i <= myPlaces[index].star; i++) {
    var position = document.getElementById("reviewStar"+(i+(index*5)));
    position.setAttribute("class", "fa fa-star");
  }
  //End Star block

  // Review block
  var inputReview = document.getElementById("review"+index);
  var el = document.createElement("p");
  var elText = document.createTextNode(myPlaces[index].info);

  el.appendChild(elText);
  inputReview.appendChild(el);
  // End Review block
}
