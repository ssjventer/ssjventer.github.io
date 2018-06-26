var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/soccer-ball-n.jpg') {
      myImage.setAttribute ('src','images/soccer-ball-e.jpg');
    } else  if(mySrc === 'images/soccer-ball-e.jpg') {
      myImage.setAttribute ('src', 'images/soccer-ball-s.jpg');
    } else  if(mySrc === 'images/soccer-ball-s.jpg') {
        myImage.setAttribute ('src', 'images/soccer-ball-w.jpg');
    } else  if(mySrc === 'images/soccer-ball-w.jpg') {
        myImage.setAttribute ('src', 'images/soccer-ball-n.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }