var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc == 'kot.png') {
		myImage.setAttribute('src', 'kot2.jpe');
	} else {
		myImage.setAttribute('src', 'kot.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function SetUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name',myName);
	myHeading.textContent = "Franka likes " + myName;
}

//IF ELSE
if (!localStorage.getItem('name')) {
	SetUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Franka likes ' + storedName;
}

myButton.onclick = function() {
	SetUserName();
}
