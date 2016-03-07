//Generating Media block
var indexMedia = 0;
function listReview() {
  while (indexMedia < myPlaces.length) {
    var mediaInit = document.createElement("div");
    mediaInit.setAttribute("class", "media");

    var mediaHeading = document.createElement("div");
    mediaHeading.setAttribute("class", "media-left media-middle");

    var link = document.createElement("a");
    link.setAttribute("href", "#");

    var mediaImg = document.createElement("img");
    mediaImg.setAttribute("class", "media-object");
    mediaImg.setAttribute("src", "images/"+myPlaces[indexMedia].picture);
    mediaImg.setAttribute("width", "300px");

    link.appendChild(mediaImg);
    mediaHeading.appendChild(link);
    mediaInit.appendChild(mediaHeading);

    var mediaBody = document.createElement("div");
    mediaBody.setAttribute("class", "media-body");

    var mediaH3 = document.createElement("h3");
    mediaH3.setAttribute("class", "media-heading");
    mediaH3.setAttribute("id", "mediaHeader"+indexMedia);

    mediaBody.appendChild(mediaH3);

    for(var i = 1; i <= 5; i++) {
      var mediaStar = document.createElement("span");
      mediaStar.setAttribute("id", "reviewStar"+(i+(indexMedia*5)));

      mediaBody.appendChild(mediaStar);
    }

    var reviewPara = document.createElement("p");
    reviewPara.setAttribute("id", "review"+indexMedia);

    mediaBody.appendChild(reviewPara);
    mediaInit.appendChild(mediaBody);
    //End generating media block

    var position = document.getElementById("mediaBlock");
    position.appendChild(mediaInit);

    //Place name block
    var place = document.getElementById("mediaHeader"+indexMedia);
    var elPlace = document.createElement("span");
    var placeText = document.createTextNode(myPlaces[indexMedia].placeName);

    elPlace.appendChild(placeText);
    place.appendChild(elPlace);
    // //End place name

    //Star block
    for (var i = 1; i <= myPlaces[indexMedia].star; i++) {
      var position = document.getElementById("reviewStar"+(i+(indexMedia*5)));
      position.setAttribute("class", "fa fa-star");
    }
    //End Star block

    // Review block
    var mediaBlock = document.getElementById("review"+indexMedia);
    var el = document.createElement("p");
    var elText = document.createTextNode(myPlaces[indexMedia].info);

    el.appendChild(elText);
    mediaBlock.appendChild(el);
    // End Review block
    indexMedia++;
  }
}
listReview();

var position = document.getElementById("mediaBlock");
position.addEventListener('click', function (){
  toggle("hidden", reviewPosition);
})

//Search engine
function searchData() {
  clearResult(searchResult);
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
    searchResult.appendChild(noResultEl);
  }
}

// Media that display search result
var searchResult = document.getElementById('searchBlock');

function displayResult(object) {
  var resultImage = document.createElement("img");
  resultImage.setAttribute('class', 'media-object');
  resultImage.setAttribute('src', 'images/' + object.picture);
  resultImage.setAttribute('alt', 'Result picture.');
  resultImage.setAttribute('width', '300px');

  var mediaImage = document.createElement('a');
  mediaImage.setAttribute('class', 'media-left');
  mediaImage.setAttribute('href', '#');
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

  var mediaSearchResult = document.createElement('div');
  mediaSearchResult.setAttribute('class', 'media text-center');
  mediaSearchResult.appendChild(mediaImage);
  mediaSearchResult.appendChild(mediaSearchBody);

  searchResult.appendChild(mediaSearchResult);
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
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
  }
  else {
    element.classList.add("hidden");
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
  toggle("hidden", newPlaceForm)
  console.log('heard');
})

var newPlace = {
  placeName: "",
  placeType: "restaurant",
  star: 0,
  picture: "restaurant4.jpg",
  info: "",
  refLink: "#"
}

var submit = document.getElementById('submitNewPlace');
var nameInput = document.getElementById('newPlaceName');
var descriptionInput = document.getElementById('newPlaceInfo');

submit.addEventListener('click', function() {
  newPlace.placeName = nameInput.value;
  newPlace.info = descriptionInput.value;
  myPlaces.push(newPlace);
  toggle("hidden", newPlaceForm);
  listReview();
})

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
  console.log("This is object array pushed: " + userComment.length);
  displayReview();
})
//End review modal block

//Generate review blocks
var index = 0;
var reviewPosition = document.getElementById('userComment');
function displayReview () {
  while (index < userComment.length) {
    var reviewPanel = document.createElement('div');
    reviewPanel.setAttribute('class', 'panel panel-default');
    var reviewPanelHeading = document.createElement('div');
    reviewPanelHeading.setAttribute('class', 'panel-heading');
    var uName = document.createElement('span');
    uName.setAttribute('class', 'userName');
    var nameText = document.createTextNode(userComment[index].userName);

    uName.appendChild(nameText);
    reviewPanelHeading.appendChild(uName);

    var breakLine = document.createElement('div');
    for (var j = 0; j < userComment[index].star; j++) {
      var reviewStar = document.createElement('span');
      reviewStar.setAttribute('class', 'fa fa-star');
      breakLine.appendChild(reviewStar);
    }
    reviewPanelHeading.appendChild(breakLine);
    reviewPanel.appendChild(reviewPanelHeading);

    addReviewTag(reviewPosition);

    var comment = document.createElement('div');
    comment.setAttribute('class', 'panel-body');
    var commenText = document.createTextNode(userComment[index].info);

    comment.appendChild(commenText);
    reviewPanel.appendChild(comment);
    reviewPosition.appendChild(reviewPanel);
    index = index + 1;
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

function addReviewTag (targetNode) {
  var tagSet = document.createElement('div');
  tagSet.setAttribute('class', 'btn-group pull-right');
  tagSet.setAttribute('data-toggle', 'buttons');

  for (var i = 0; i < 3; i++) {
    var tagLabel = document.createElement('label');
    tagLabel.setAttribute('class', 'btn btn-default');

    // Review tag button 1
    if (i == 0) {
      var tagButton1 = document.createElement('input');
      tagButton1.setAttribute('type', 'radio');
      var smile = document.createElement('span');
      smile.setAttribute('class', 'fa fa-smile-o');
      var smileText = document.createTextNode(' Funny');
      smile.appendChild(smileText);
      tagLabel.appendChild(smile);
      tagLabel.appendChild(tagButton1);
      tagSet.appendChild(tagLabel);
    }

    // Review tag button 2
    if (i == 1) {
      var tagButton2 = document.createElement('input');
      tagButton2.setAttribute('type', 'radio');
      var thumbsUp = document.createElement('span');
      thumbsUp.setAttribute('class', 'fa fa-thumbs-o-up');
      var thumbsUpText = document.createTextNode(' Helpful');
      thumbsUp.appendChild(thumbsUpText);
      tagLabel.appendChild(thumbsUp);
      tagLabel.appendChild(tagButton2);
      tagSet.appendChild(tagLabel);
    }

    // Review tag button 3
    if (i == 2) {
      var tagButton3 = document.createElement('input');
      tagButton3.setAttribute('type', 'radio');
      var thumbsDown = document.createElement('span');
      thumbsDown.setAttribute('class', 'fa fa-thumbs-o-down');
      var thumbsDownText = document.createTextNode(' Not Helpful');
      thumbsDown.appendChild(thumbsDownText);
      tagLabel.appendChild(tagButton3);
      tagLabel.appendChild(thumbsDown);
      tagSet.appendChild(tagLabel);
    }
  }
  targetNode.appendChild(tagSet);
}
