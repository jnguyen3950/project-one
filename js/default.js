var indexMedia = 0;
var searchBlock = document.getElementById('searchBlock');
var jumbotronHeader = document.getElementById('jumbotronHeader');
var position = document.getElementById('mediaBlock');
var reviewBtn = document.getElementById('reviewBtn');
var addNewButton = document.getElementById('addNewPlace');
var newPlaceForm = document.getElementById('newPlaceForm');

listReview();

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
      _.pick(myPlaces[id], 'userComment').userComment.reviewStar.push(parseInt(ratingInput[i].value));
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
