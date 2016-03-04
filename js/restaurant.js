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

// <!-- review button -->
// <div class="btn-group pull-right" data-toggle="buttons">
//   <label class="btn btn-default">
//     <input type="radio"><span class="fa fa-smile-o"> Funny</span>
//   </label>
//   <label class="btn btn-default">
//     <input type="radio"><span class="fa fa-thumbs-o-up"> Helpful</span>
//   </label>
//   <label class="btn btn-default">
//     <input type="radio"><span class="fa fa-thumbs-o-down"> Not Helpful</span>
//   </label>
// </div>

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
