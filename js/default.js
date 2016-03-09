var indexMedia = 0;
var searchBlock = document.getElementById('searchBlock');
var jumbotronHeader = document.getElementById('jumbotronHeader');
var position = document.getElementById('mediaBlock');
var reviewBtn = document.getElementById('reviewBtn');
var addNewButton = document.getElementById('addNewPlace');
var newPlaceForm = document.getElementById('newPlaceForm');

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

//Generating Media block
function listReview() {
  while (indexMedia < myPlaces.length) {
    //Generate Media Block
    var mediaInit = document.createElement('div');
    mediaInit.setAttribute('class', 'media');

    var mediaHeading = document.createElement('div');
    mediaHeading.setAttribute('class', 'media-left media-middle');

    var link = document.createElement('a');
    link.setAttribute('href', '#');

    var mediaImg = document.createElement('img');
    mediaImg.setAttribute('class', 'media-object');
    mediaImg.setAttribute('src', 'images/' + myPlaces[indexMedia].picture);
    mediaImg.setAttribute('width', '300px');
    mediaImg.setAttribute('data-id', indexMedia);

    link.appendChild(mediaImg);
    mediaHeading.appendChild(link);
    mediaInit.appendChild(mediaHeading);

    var mediaBody = document.createElement('div');
    mediaBody.setAttribute('class', 'media-body');

    var mediaH3 = document.createElement('h3');
    mediaH3.setAttribute('class', 'media-heading');
    mediaH3.setAttribute('id', 'mediaHeader'+indexMedia);

    mediaBody.appendChild(mediaH3);

    for(var i = 1; i <= 5; i++) {
      var mediaStar = document.createElement('span');
      mediaStar.setAttribute('id', 'reviewStar'+(i+(indexMedia*5)));

      mediaBody.appendChild(mediaStar);
    }

    var reviewPara = document.createElement('p');
    reviewPara.setAttribute('id', 'review'+indexMedia);

    mediaBody.appendChild(reviewPara);
    mediaInit.appendChild(mediaBody);
    //End generating media block

    var position = document.getElementById('mediaBlock');
    position.appendChild(mediaInit);

    //Place name block
    var place = document.getElementById('mediaHeader'+indexMedia);
    var elPlace = document.createElement('span');
    var placeText = document.createTextNode(myPlaces[indexMedia].placeName);

    elPlace.appendChild(placeText);
    place.appendChild(elPlace);
    // //End place name

    //Star block
    for (var i = 1; i <= myPlaces[indexMedia].star; i++) {
      var position = document.getElementById('reviewStar'+(i+(indexMedia*5)));
      position.setAttribute('class', 'fa fa-star');
    }
    //End Star block

    // Review block
    var mediaBlock = document.getElementById('review'+indexMedia);
    var el = document.createElement('p');
    var elText = document.createTextNode(myPlaces[indexMedia].info);

    el.appendChild(elText);
    mediaBlock.appendChild(el);
    // End Review block
    indexMedia++;
  }
}
listReview();

//Search engine
function searchData() {
  clearResult(searchBlock);
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
    searchBlock.appendChild(noResultEl);
  }
}

function searchCategory(key) {
  clearResult(searchBlock);
  var input = document.getElementById('searchBox');
  for(var i = 0; i < myPlaces.length; i++) {
    if(myPlaces[i].placeName.toLowerCase() == key ||
        myPlaces[i].placeType.toLowerCase() == key) {
      displayResult(myPlaces[i]);
    }
  }
}

// Media that display search result
function displayResult(object) {
  var resultImage = document.createElement('img');
  resultImage.setAttribute('class', 'media-object');
  resultImage.setAttribute('src', 'images/' + object.picture);
  resultImage.setAttribute('alt', 'Result picture.');
  resultImage.setAttribute('width', '300px');
  resultImage.setAttribute('data-id', object.storeId);

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

  searchBlock.appendChild(mediaSearchResult);
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
  if (element.classList.contains('hidden')) {
    element.classList.remove('hidden');
  }
  else {
    element.classList.add('hidden');
  }
}

// Hide & Show content
function home() {
  if (jumbotronHeader.classList.contains('hidden')) {
    toggle('hidden', jumbotronHeader);
  }
  if (reviewPosition.classList.contains('hidden')) {}
  else {
    toggle('hidden', reviewPosition);
    toggle('hidden', reviewBtn);
  }
  if (position.classList.contains('hidden')) {
    toggle('hidden', position);
  }
  if (searchBlock.classList.contains('hidden')) {
    toggle('hidden', searchBlock);
  }
}

position.addEventListener('click', function(event) {
  if (event.target.classList.contains('media-object')) {
    toggle('hidden', reviewPosition);
    toggle('hidden', jumbotronHeader);
    toggle('hidden', position);
    toggle('hidden', reviewBtn);
    toggle('hidden', searchBlock);
  }
})

searchBlock.addEventListener('click', function(event) {
  if (event.target.classList.contains('media-object') && reviewPosition.classList.contains('hidden')) {
    storeId = event.target.getAttribute('data-id');
    displayReview();
    toggle('hidden', reviewPosition);
    toggle('hidden', jumbotronHeader);
    toggle('hidden', position);
    toggle('hidden', reviewBtn);
    toggle('hidden', searchBlock);
  }
  else if (event.target.classList.contains('media-object')) {
    storeId = event.target.getAttribute('data-id');
    displayReview();
    toggle('hidden', searchBlock);
  }
})

document.getElementById('logo').addEventListener('click', function() {
  home();
})

document.getElementById('homeBtn').addEventListener('click', function() {
  home();
})

//Search button
document.getElementById('search').addEventListener('click', function() {
  searchData();
  if(searchBlock.classList.contains('hidden')) {
    toggle('hidden', searchBlock);
  }
}, false);

//Search box
document.getElementById('searchBox').addEventListener('keypress', function(event) {
  if (event.keyCode == 13) {
    if(searchBlock.classList.contains('hidden')) {
      toggle('hidden', searchBlock);
    }
    searchData();
    event.preventDefault();
  }
})

var cateRestaurant = document.getElementsByClassName('cateRestaurant')
for (var i = 0; i < cateRestaurant.length; i++) {
  cateRestaurant[i].addEventListener('click', function() {
    if(searchBlock.classList.contains('hidden')) {
      toggle('hidden', searchBlock);
    }
    searchCategory('restaurant');
  })
}

var cateBar = document.getElementsByClassName('cateBar');
for (var i = 0; i < cateBar.length; i++) {
  cateBar[i].addEventListener('click', function() {
    if(searchBlock.classList.contains('hidden')) {
      toggle('hidden', searchBlock);
    }
    searchCategory('bar');
  })
}

//Generate comment blocks
var mediaClass = document.getElementsByClassName('media');
for (var i = 0; i < mediaClass.length; i++) {
  mediaClass[i].addEventListener('click', function(event) {
    if (event.target.classList.contains('media-object')) {
      storeId = event.target.getAttribute('data-id');
      displayReview();
    }
  })
}

//Add new place button
addNewButton.addEventListener('click', function() {
  toggle('hidden', newPlaceForm)
})

var submit = document.getElementById('submitNewPlace');
var namePlaceInput = document.getElementById('newPlaceName');
var descriptionInput = document.getElementById('newPlaceInfo');

submit.addEventListener('click', function() {
  newPlace.placeName = namePlaceInput.value;
  newPlace.info = descriptionInput.value;
  myPlaces.push(newPlace);
  toggle('hidden', newPlaceForm);
  listReview();
})

//User review modal block
var submit = document.getElementById('submit-btn');
var nameInput = document.getElementById('name-text');
var ratingInput = document.getElementsByName('rating-input');
var reviewInput = document.getElementById('review-text');

submit.addEventListener('click', function() {

  _.pick(myPlaces[id], 'userComment').userComment.user.push(nameInput.value);
  for(var i = 0; i < ratingInput.length; i++) {
    if(ratingInput[i].checked) {
      _.pick(myPlaces[id], 'userComment').userComment.star.push(parseInt(ratingInput[i].value));
    }
  }
  _.pick(myPlaces[id], 'userComment').userComment.comment.push(reviewInput.value);
  displayReview();
})
//End review modal block

//Generate review blocks
var index = 0;
var storeId = 0;
var reviewPosition = document.getElementById('userComment');

function displayReview () {
  clearResult(reviewPosition);
  index = 0;

  // Review block store picture
  var reviewPicture = document.createElement('img');
  reviewPicture.setAttribute('src', 'images/restaurant' + (parseInt(storeId)+1) + '.jpg');
  reviewPicture.setAttribute('width', '500');
  reviewPosition.appendChild(reviewPicture);

  // Review block header
  var reviewHeading = document.createElement('h2');
  var reviewHeadingText = document.createTextNode('You are reviewing: ' + myPlaces[storeId].placeName);
  reviewHeading.appendChild(reviewHeadingText);
  reviewPosition.appendChild(reviewHeading);

  console.log(reviewPosition);

  while (index < _.pick(myPlaces[storeId], 'userComment').userComment.user.length) {
  // while (index < userComment.length) {
    var reviewPanel = document.createElement('div');
    reviewPanel.setAttribute('class', 'panel panel-default');
    var reviewPanelHeading = document.createElement('div');
    reviewPanelHeading.setAttribute('class', 'panel-heading');
    var uName = document.createElement('span');
    uName.setAttribute('class', 'userName');
    var nameText = document.createTextNode(_.pick(myPlaces[storeId], 'userComment').userComment.user[index]);

    uName.appendChild(nameText);
    reviewPanelHeading.appendChild(uName);

    var breakLine = document.createElement('div');
    for (var j = 0; j < _.pick(myPlaces[storeId], 'userComment').userComment.star[index]; j++) {
      var reviewStar = document.createElement('span');
      reviewStar.setAttribute('class', 'fa fa-star');
      breakLine.appendChild(reviewStar);
    }
    reviewPanelHeading.appendChild(breakLine);
    reviewPanel.appendChild(reviewPanelHeading);

    addReviewTag(reviewPosition);

    var comment = document.createElement('div');
    comment.setAttribute('class', 'panel-body');
    var commenText = document.createTextNode(_.pick(myPlaces[storeId], 'userComment').userComment.comment[index]);

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
  var typeText = document.createTextNode(info + ' : ' + restaurantInfo[0][info]);
  businessType.appendChild(typeText);
  businessInfo.appendChild(businessType);
}

var businessHours = document.getElementById('businessHours');
for (info in restaurantInfo[1]) {
  var day = document.createElement('li');
  var typeText = document.createTextNode(info + ' : ' + restaurantInfo[1][info]);
  day.appendChild(typeText);
  businessHours.appendChild(day);
}

// Adds Tag to user comment
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
