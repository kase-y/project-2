// var elements = document.getElementsByTagName('div');

// for (var i = 0; i < elements.length; i++) {
//    var element = elements[i];
// //   console.log( element );
// //element.style.setProperty('border', 'solid 1px red');
   
//    var r = Math.floor(Math.random()*255);
//    var g = Math.floor(Math.random()*255);
//    var b = Math.floor(Math.random()*255);
//    var c = "rgb(" + r + "," + g + "," + b +")";

//    element.style.setProperty("border","solid 1px " + c);


// }

// var myDiv = document.createElement("div");
// myDiv.style.setProperty("postition", "absolute");
// myDiv.style.setProperty("top", "100px");
// myDiv.style.setProperty("left", "250px");
// myDiv.style.setProperty("background", "rgb(255,0,0)")
// myDiv.style.setProperty("width", "250px");
// myDiv.style.setProperty("height", "250px");
// myDiv.innerHTML ="HELLO";
// document.body.appendChild(myDiv);

chrome.storage.sync.get({fromStored:"", toStored:""}, function(result) {

var html = document.querySelector('html');
var walker = document.createTreeWalker(html,NodeFilter.SHOW_TEXT);
var node;
while (node = walker.nextNode()) {
   var re = new RegExp(result.fromStored, "gi");
   node.nodeValue = node.nodeValue.replace(re, result.toStored);
}

});
