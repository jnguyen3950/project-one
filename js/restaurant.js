userComment = [
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

newComment = {
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
