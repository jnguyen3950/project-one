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
    storeId = event.target.getAttribute('data-id');
    switchToReview();
    displayReview();
  }
})

searchBlock.addEventListener('click', function(event) {
  if (event.target.classList.contains('media-object') && reviewPosition.classList.contains('hidden')) {
    storeId = event.target.getAttribute('data-id');
    switchToReview();
    displayReview();
  }
  else if (event.target.classList.contains('media-object')) {
    storeId = event.target.getAttribute('data-id');
    displayReview();
    toggle('hidden', searchBlock);
  }
  businessDetail();
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

//Generate list of business blocks
var mediaClass = document.getElementsByClassName('media');
for (var i = 0; i < mediaClass.length; i++) {
  mediaClass[i].addEventListener('click', function(event) {
    if (event.target.classList.contains('media-object')) {
      storeId = event.target.getAttribute('data-id');
      displayReview();
      businessDetail();
    }
  })
}

//Add new place button
addNewButton.addEventListener('click', function() {
  toggle('hidden', newPlaceForm)
})

//Submit new place button
var submitPlace = document.getElementById('submitNewPlace');
var namePlaceInput = document.getElementById('newPlaceName');
var pictureInput = document.getElementById('pictureFile');
var descriptionInput = document.getElementById('newPlaceInfo');

submitPlace.addEventListener('click', function() {
  // Local new place object
  var newPlace = {
    storeId: 0,
    placeName: '',
    placeType: 'restaurant',
    star: 0,
    picture: 'restaurant1.jpg',
    info: '',
    userComment: {
      user: [],
      reviewStar: [],
      comment: []
    }
  }

  newPlace.placeName = namePlaceInput.value;
  newPlace.info = descriptionInput.value;
  newPlace.placeType = newPlaceCategory.value;
  newPlace.storeId = myPlaces.length;
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
  _.pick(myPlaces[storeId], 'userComment').userComment.user.push(nameInput.value);

  // for(var i = 0; i < ratingInput.length; i++) {
  //   if(ratingInput[i].checked) {
  //     _.pick(myPlaces[storeId], 'userComment').userComment.reviewStar.push(parseInt(ratingInput[i].value));
  //   }
  // }

  var starInput = document.getElementById('starInput');
  _.pick(myPlaces[storeId], 'userComment').userComment.reviewStar.push(parseInt(starInput.value));


  _.pick(myPlaces[storeId], 'userComment').userComment.comment.push(reviewInput.value);
  displayReview();
})
//End review modal block

//Generate review blocks
var index = 0;
var storeId = 0;
var reviewPosition = document.getElementById('userComment');

displayReview();
//End generate blocks

//Display business info
function businessDetail() {
  var businessInfo = document.getElementById('businessInfo');
  clearResult(businessInfo);

  for (info in _.pick(myPlaces[storeId], 'businessInfo').businessInfo) {
    var businessType = document.createElement('li');
    var typeText = document.createTextNode(info + ' : ' + _.pick(myPlaces[storeId], 'businessInfo').businessInfo[info]);
    businessType.appendChild(typeText);
    businessInfo.appendChild(businessType);
  }
  var businessHours = document.getElementById('businessHours');
  clearResult(businessHours);

  for (info in _.pick(myPlaces[storeId], 'hours').hours) {
    var day = document.createElement('li');
    var typeText = document.createTextNode(info + ' : ' + _.pick(myPlaces[storeId], 'hours').hours[info]);
    day.appendChild(typeText);
    businessHours.appendChild(day);
  }
}
