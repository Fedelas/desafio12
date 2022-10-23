// CODE TO MAKE THE CUBE ROTATE
let xAngle = 0, yAngle = 0, zAngle = 0;
document.addEventListener('keydown', function (e) {
  switch (e.keyCode) {

    case 37:// for left key  
      yAngle -= 45;
      break;

    case 38:// for up key  
      xAngle += 45;
      break;

    case 39:// for right key  
      yAngle += 45;
      break;

    case 40:// for down key  
      xAngle -= 45;
      break;

    case 83:// for s key  
      zAngle += 45;
      break;

    case 87:// for w key  
      zAngle -= 45;
      break;
  }
  $('#wrapper').css("webkit-transform", "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg) rotatez(" + zAngle + "deg)");
}, false);