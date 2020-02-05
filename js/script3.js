var imageList = [['img/onoff/domoff.jpg', 'img/onoff/domon.jpg'],['img/onoff/offoff.jpg', 'img/onoff/offon.jpg'],['img/onoff/villoff.jpg', 'img/onoff/villon.jpg'],['img/onoff/medoff.jpg', 'img/onoff/medon.jpg'],['img/onoff/project-off.jpg', 'img/onoff/project-on.jpg']];

function changeImage(num) {
  var image1 = document.getElementById("myImage"+num);
  console.log(imageList[num][1]);
  if (image1.dataset.index == "0") {
     image1.src = imageList[num][1];
    image1.dataset.index = 1;
  }
  else{
    image1.src = imageList[num][0];
  image1.dataset.index = 0;}
}



