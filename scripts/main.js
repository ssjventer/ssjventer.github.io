
var values = ["Hello", "World","!",42,42]
document.querySelector('h1').textContent = values[0];
document.querySelector('h2').textContent = values[1];
document.querySelector('h3').textContent = values[2];
document.querySelector('h4').textContent = values[2] === values[4];

function multiply(num1,num2) {
    var result = num1 * num2;
    return result;
  }

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
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

alert(localStorage.getItem('name'));
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }