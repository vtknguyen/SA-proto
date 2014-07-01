/* Copyright (c) 2012 Mobile Developer Solutions. All rights reserved.
* This software is available under the MIT License:
* The MIT License
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software
* and associated documentation files (the "Software"), to deal in the Software without restriction,
* including without limitation the rights to use, copy, modify, merge, publish, distribute,
* sublicense, and/or sell copies of the Software, and to permit persons to whom the Software
* is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all copies
* or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
* INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
* PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
* FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
* ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


var pictureSource; // picture source
var destinationType; // sets the format of returned value
// See the above in device.js for their assignments
/*
// api-camera
function onPhotoDataSuccess(imageData) {
    console.log("* * * onPhotoDataSuccess");
    var cameraImage = document.getElementById('cameraImage');
    cameraImage.style.visibility = 'visible';
    cameraImage.src = "data:image/jpeg;base64," + imageData;
}

function onPhotoURISuccess(imageURI) {
    console.log("* * * onPhotoURISuccess");
    // Uncomment to view the image file URI
    // console.log(imageURI);
    var cameraImage = document.getElementById('cameraImage');
    cameraImage.style.visibility = 'visible';
    cameraImage.src = imageURI;
}
*/


$(function(){
		function onUriSuccess(imageURI) {
    var image = document.getElementById('cameraImage');
    image.src = imageURI;
}

function onUrlSuccess(imageData) {
var image = document.getElementById('cameraImage');
image.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
    alert('Failed because: ' + message);
}
    $("#take_pic").click(function(){ 
navigator.camera.getPicture(onUrlSuccess, onFail, { quality: 50,
destinationType: Camera.DestinationType.DATA_URL, 
 targetWidth: 500
});
 
 
});

    $("#album_pic").click(function(){ 


    navigator.camera.getPicture(onUrlSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.DATA_URL,
	sourceType: Camera.PictureSource.SAVEDPHOTOALBUM,
	targetWidth: 500	});

		
});

});