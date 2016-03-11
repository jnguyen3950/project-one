//Generating store general review Media block
function listReview() {
  var position = document.getElementById('mediaBlock');
  var indexMedia = 0;
  clearResult(position);
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

    position.insertBefore(mediaInit, position.firstChild);

    //Place name block
    var place = document.getElementById('mediaHeader'+indexMedia);
    var elPlace = document.createElement('span');
    var placeText = document.createTextNode(myPlaces[indexMedia].placeName);

    elPlace.appendChild(placeText);
    place.appendChild(elPlace);
    // //End place name

    //Star block
    var calculatedStar = 0;
    for (var i = 0; i < _.pick(myPlaces[indexMedia], 'userComment').userComment.reviewStar.length; i++) {
      calculatedStar += _.pick(myPlaces[indexMedia], 'userComment').userComment.reviewStar[i];
    }
    calculatedStar = calculatedStar / _.pick(myPlaces[indexMedia], 'userComment').userComment.reviewStar.length;
    myPlaces[indexMedia].star = calculatedStar;

    for (var i = 1; i <= calculatedStar; i++) {
      var positionStar = document.getElementById('reviewStar'+(i+(indexMedia*5)));
      positionStar.setAttribute('class', 'fa fa-star');
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

// Generate user comment block
function displayReview () {
  clearResult(reviewPosition);
  var index = 0;

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

  while (index < _.pick(myPlaces[storeId], 'userComment').userComment.user.length) {
    var reviewPanel = document.createElement('div');
    reviewPanel.setAttribute('class', 'panel panel-default');

    addReviewTag(reviewPanel);

    var reviewPanelHeading = document.createElement('div');
    reviewPanelHeading.setAttribute('class', 'panel-heading');
    var uName = document.createElement('span');
    uName.setAttribute('class', 'userName');
    var nameText = document.createTextNode(_.pick(myPlaces[storeId], 'userComment').userComment.user[index]);
    uName.appendChild(nameText);
    reviewPanelHeading.appendChild(uName);

    var breakLine = document.createElement('div');
    for (var j = 0; j < _.pick(myPlaces[storeId], 'userComment').userComment.reviewStar[index]; j++) {
      var reviewStar = document.createElement('span');
      reviewStar.setAttribute('class', 'fa fa-star');
      breakLine.appendChild(reviewStar);
    }

    reviewPanelHeading.appendChild(breakLine);
    reviewPanel.appendChild(reviewPanelHeading);

    var comment = document.createElement('div');
    comment.setAttribute('class', 'panel-body');
    var commenText = document.createTextNode(_.pick(myPlaces[storeId], 'userComment').userComment.comment[index]);

    comment.appendChild(commenText);
    reviewPanel.appendChild(comment);
    reviewPosition.appendChild(reviewPanel);
    index = index + 1;
  }
  businessDetail();
}

// Media that display search result
function displaySearchResult(object) {
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
  resultHeading.appendChild(document.createElement('br'));

  for(var i = 0; i < object.star; i++) {
    var resultStar = document.createElement('span');
    resultStar.setAttribute('class', 'fa fa-star');
    resultHeading.appendChild(resultStar);
  }

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

//Function Sort
function sortArray(array, bool) {
  if(bool == true) {
    array.sort(function(a, b) {
      return a.star - b.star;
    })
  }
  else {
    array.sort(function(a, b) {
      return b.star - a.star;
    })
  }
}

//Search engine
function searchData() {
  clearResult(searchBlock);
  var found = false;
  var input = document.getElementById('searchBox');
  for(var i = 0; i < myPlaces.length; i++) {
    if(myPlaces[i].placeName.toLowerCase() == input.value.toLowerCase() ||
        myPlaces[i].placeType.toLowerCase() == input.value.toLowerCase()) {
      displaySearchResult(myPlaces[i]);
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

// Search by name or category
function searchCategory(key) {
  clearResult(searchBlock);
  var input = document.getElementById('searchBox');
  for(var i = 0; i < myPlaces.length; i++) {
    if(myPlaces[i].placeName.toLowerCase() == key ||
        myPlaces[i].placeType.toLowerCase() == key) {
      displaySearchResult(myPlaces[i]);
    }
  }
}

//Clear search result node function
function clearResult(result) {
  while(result.firstChild) {
    result.removeChild(result.firstChild);
  }
}

function clearResultExcept(result) {
  while(result.childNodes.length > 2) {
    result.removeChild(result.lastChild);
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

// Home & Logo Button
function home() {
  if (jumbotronHeader.classList.contains('hidden')) {
    toggle('hidden', jumbotronHeader);
  }
  if (reviewPosition.classList.contains('hidden')) {}
  else {
    toggle('hidden', reviewPosition);
    toggle('hidden', reviewBtn);
    toggle('hidden', rightSidebar);
  }
  if (position.classList.contains('hidden')) {
    toggle('hidden', position);
  }
  if (searchBlock.classList.contains('hidden')) {
    toggle('hidden', searchBlock);
  }
  //Update Average Star
  listReview();
}

function switchToReview() {
  toggle('hidden', reviewPosition);
  toggle('hidden', jumbotronHeader);
  toggle('hidden', position);
  toggle('hidden', reviewBtn);
  toggle('hidden', searchBlock);
  toggle('hidden', rightSidebar);
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

//Display business info
function businessDetail() {
  var businessInfo = document.getElementById('businessInfo');
  clearResultExcept(businessInfo);

  for (info in _.pick(myPlaces[storeId], 'businessInfo').businessInfo) {
    var businessType = document.createElement('li');
    businessType.setAttribute('class', 'list-group-item');
    var typeText = document.createTextNode(info + ' : ' + _.pick(myPlaces[storeId], 'businessInfo').businessInfo[info]);
    businessType.appendChild(typeText);
    businessInfo.appendChild(businessType);
  }
  var businessHours = document.getElementById('businessHours');
  clearResultExcept(businessHours);

  var day = document.createElement('li');
  day.setAttribute('class', 'list-group-item');
  for (info in _.pick(myPlaces[storeId], 'hours').hours) {
    var typeText = document.createTextNode(info + ' : ' + _.pick(myPlaces[storeId], 'hours').hours[info]);
    day.appendChild(document.createElement('br'));
    day.appendChild(typeText);
    businessHours.appendChild(day);
  }
}
