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
    star: 3,
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
    star: 4,
    picture: "restaurant4.jpg",
    info: "Gravida condimentum commodo magnis tristique scelerisque penatibus etiam donec et interdum aliquam imperdiet vivamus dignissim."
  }
];

//Generating Media block
for(var index = 0; index < 4; index++) {

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

// Media that display search result
var resultImagePosition = document.getElementById('searchImage');
var resultPosition = document.getElementById('searchResult');
var found = false;

function displayResult(object) {

  while(resultPosition.firstChild) {
    resultPosition.removeChild(resultPosition.firstChild);
  }
  while(resultImagePosition.firstChild) {
    resultImagePosition.removeChild(resultImagePosition.firstChild);
  }

  var resultImage = document.createElement("img");
  resultImage.setAttribute('class', 'media-object');
  resultImage.setAttribute('src', 'images/' + object.picture);
  resultImage.setAttribute('alt', 'Result picture.');
  resultImage.setAttribute('width', '300px');

  var resultHeading = document.createElement('h2');
  resultHeading.setAttribute('class', 'media-heading');
  var resultHeadingText = document.createTextNode(object.placeName);
  resultHeading.appendChild(resultHeadingText);

  var resultPara = document.createElement('p');
  var resultText = document.createTextNode(object.info);
  resultPara.appendChild(resultText);

  resultImagePosition.appendChild(resultImage);
  resultPosition.appendChild(resultHeading);
  resultPosition.appendChild(resultPara);
}

var search = document.getElementById('search');
search.addEventListener('click', function() {
  var input = document.getElementById('searchBox');
  for(var i = 0; i < myPlaces.length; i++) {
    if(myPlaces[i].placeName.toLowerCase() == input.value.toLowerCase()) {
      displayResult(myPlaces[i]);
      found = true;
    }
  }
  if(found == false) {
    var noResultText = document.createTextNode('No result found.');
    resultBox.appendChild(noResultText);
    resultPosition.appendChild(resultBox);
  }
}, false);
// End media search result


// ---------- Restaurant Database and its functionalities ----------
var restaurantInfo = [
  {
    Type: "Restaurant",
    Price: "$$",
    Open_now: "Yes"
  },
  {
    Mon: "9am - 10pm",
    Tues:  "9am - 10pm",
    Wed: "9am - 10pm",
    Thu: "9am - 10pm",
    Fri: "9am - 10pm",
    Sat: "9am - 10pm",
    Sun: "9am - 10pm"
  }
]

var userComment = [
  {
    userName: "Justin",
    star: 4,
    info: "Id ut a tempor rutrum feugiat leo eu suspendisse natoque sapien porta ligula parturient."
  },
  {
    userName: "Joe",
    star: 5,
    info: "Vestibulum ullamcorper nullam erat nam suspendisse conubia a a non dui sem litora a a vestibulum euismod metus nascetur mus aliquam eu.Eros suspendisse torquent senectus sit suspendisse adipiscing sed ullamcorper placerat parturient senectus ullamcorper quam vestibulum ultrices adipiscing lobortis."
  }
];

var newComment = {
  userName: "",
  star: 0,
  info: ""
};

//User review modal block
var submit = document.getElementById('submit-btn');
var nameInput = document.getElementById('name-text');
var ratingInput = document.getElementsByName('rating-input');
var reviewInput = document.getElementById('review-text');

submit.addEventListener('click', function() {
  newComment.userName = nameInput.value;
  for(var i = 0; i < ratingInput.length; i++) {
    if(ratingInput[i].checked) {
      newComment.star = parseInt(ratingInput[i].value);
    }
  }
  newComment.info = reviewInput.value;
  userComment.push(newComment);
  displayReview();
})
//End review modal block

//Generate review blocks
var i = 0;
function displayReview () {
  while (i < userComment.length) {
    var reviewPosition = document.getElementById('userComment');
    var reviewPanel = document.createElement('div');
    reviewPanel.setAttribute('class', 'panel panel-default');
    var reviewPanelHeading = document.createElement('div');
    reviewPanelHeading.setAttribute('class', 'panel-heading');
    var uName = document.createElement('span');
    uName.setAttribute('class', 'userName');
    var nameText = document.createTextNode(userComment[i].userName);

    uName.appendChild(nameText);
    reviewPanelHeading.appendChild(uName);

    for (var j = 0; j < userComment[i].star; j++) {
      var reviewStar = document.createElement('span');
      reviewStar.setAttribute('class', 'fa fa-star');
      reviewPanelHeading.appendChild(reviewStar);
    }

    reviewPanel.appendChild(reviewPanelHeading);

    var comment = document.createElement('div');
    comment.setAttribute('class', 'panel-body');
    var commenText = document.createTextNode(userComment[i].info);

    comment.appendChild(commenText);
    reviewPanel.appendChild(comment);
    reviewPosition.appendChild(reviewPanel);
    i = i + 1;
  }
}
displayReview();
//End generate blocks

//Business info
var businessInfo = document.getElementById('businessInfo');
for (info in restaurantInfo[0]) {
  var businessType = document.createElement('li');
  var typeText = document.createTextNode(info + " : " + restaurantInfo[0][info]);
  businessType.appendChild(typeText);
  businessInfo.appendChild(businessType);
}

var businessHours = document.getElementById('businessHours');
for (info in restaurantInfo[1]) {
  var day = document.createElement('li');
  var typeText = document.createTextNode(info + " : " + restaurantInfo[1][info]);
  day.appendChild(typeText);
  businessHours.appendChild(day);
}
//End restaurant js
