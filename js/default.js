var myPlaces = [
  {
    placeName: "Hometown",
    placeType: "restaurant",
    star: 4,
    picture: "restaurant1.jpg",
    info: "Vestibulum ante vulputate parturient lacinia odio quam parturient et fringilla ac tempor parturient ultricies.",
    refLink: "Restaurant.html"
  },
  {
    placeName: "Shrimp",
    placeType: "bar",
    star: 3,
    picture: "restaurant2.jpg",
    info: "Lacinia ante erat neque non justo malesuada per nostra ipsum curae adipiscing euismod consequat."
  },
  {
    placeName: "Toasted",
    placeType: "restaurant",
    star: 5,
    picture: "restaurant3.jpg",
    info: "Nunc ridiculus enim praesent cubilia sed enim dignissim convallis class est vestibulum ullamcorper."
  },
  {
    placeName: "Bubble",
    placeType: "bar",
    star: 4,
    picture: "restaurant4.jpg",
    info: "Gravida condimentum commodo magnis tristique scelerisque penatibus etiam donec et interdum aliquam imperdiet vivamus dignissim."
  }
];

//Generating Media block
function listReview() {
  for(var index = 0; index < myPlaces.length; index++) {

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
}
listReview();

//Search engine
function searchData() {
  clearResult(resultResult);
  var found = false;
  var input = document.getElementById('searchBox');
  for(var i = 0; i < myPlaces.length; i++) {
    if(myPlaces[i].placeName.toLowerCase() == input.value.toLowerCase() ||
        myPlaces[i].placeType.toLowerCase() == input.value.toLowerCase()) {
      displayResult(myPlaces[i]);
      found = true;
    }
  }
  if(found == false) {
    var noResultEl = document.createElement('h1')
    var noResultText = document.createTextNode('No result found.');
    noResultEl.appendChild(noResultText);
    resultResult.appendChild(noResultEl);
  }
}

// Media that display search result
var resultResult = document.getElementById('searchBlock');

function displayResult(object) {
  var resultImage = document.createElement("img");
  resultImage.setAttribute('class', 'media-object');
  resultImage.setAttribute('src', 'images/' + object.picture);
  resultImage.setAttribute('alt', 'Result picture.');
  resultImage.setAttribute('width', '300px');

  var mediaImage = document.createElement('a');
  mediaImage.setAttribute('class', 'media-left');
  mediaImage.setAttribute('href', 'restaurant.html');
  mediaImage.appendChild(resultImage);

  var resultHeading = document.createElement('h2');
  resultHeading.setAttribute('class', 'media-heading');
  var resultHeadingText = document.createTextNode(object.placeName);
  resultHeading.appendChild(resultHeadingText);

  var resultPara = document.createElement('p');
  var resultText = document.createTextNode(object.info);
  resultPara.appendChild(resultText);

  var mediaSearchBody = document.createElement('div');
  mediaSearchBody.setAttribute('class', 'media-body');
  mediaSearchBody.appendChild(resultHeading);
  mediaSearchBody.appendChild(resultPara);

  var mediaBlock = document.createElement('div');
  mediaBlock.setAttribute('class', 'media text-center');
  mediaBlock.appendChild(mediaImage);
  mediaBlock.appendChild(mediaSearchBody);

  resultResult.appendChild(mediaBlock);
}
//End media search result

//Clear search result node function
function clearResult(result) {
  while(result.firstChild) {
    result.removeChild(result.firstChild);
  }
}

//Show and hide content function
function toggle(value, element) {
  if (element.classList.contains("hide")) {
    element.classList.remove("hide");
  }
  else {
    element.classList.add("hide");
  }
}

//Search button
document.getElementById('search').addEventListener('click', function() {
  searchData();
}, false);

//Search box
document.getElementById('searchBox').addEventListener('keypress', function(event) {
  if (event.keyCode == 13) {
    searchData();
    event.preventDefault();
  }
})

//Add new place button
var addNewButton = document.getElementById('addNewPlace');
var newPlaceForm = document.getElementById('newPlaceForm');
addNewButton.addEventListener('click', function() {
  toggle("hide", newPlaceForm)
  console.log('heard');
})

var newPlace = {
  placeName: "",
  placeType: "restaurant",
  star: 0,
  picture: "restaurant4.jpg",
  info: "",
  refLink: "Restaurant.html"
}

var submit = document.getElementById('submitNewPlace');
var nameInput = document.getElementById('newPlaceName');
var descriptionInput = document.getElementById('newPlaceInfo');

submit.addEventListener('click', function() {
  newPlace.placeName = nameInput.value;
  newPlace.info = descriptionInput.value;
  myPlaces.push(newPlace);

  listReview();
})
