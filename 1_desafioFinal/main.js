let currentlyEditingTimeout;
let wrap = document.getElementById('wrapper');

const rowsLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
const colNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
const square1BackFace=[];


function nameBtn(i, j, direction) {
  let aux = document.createElement("div")
  aux.classList.add(`${direction}` + `Face`);
  wrap.appendChild(aux);
  for (const i of rowsLetters) {
    let row = document.createElement('span');
    for (const j of colNumbers) {
      let cellNew = document.createElement("button");
      cellNew.classList.add("cell");
      let text = document.createTextNode(i + j);
      cellNew.classList.add(`${i + j}`);
      cellNew.classList.add(`${direction}`);
      cellNew.id=direction + String(`${i + j}`);
      cellNew.appendChild(text);
      cellNew.setAttribute("onmousedown", "showOptions(" + cellNew.id + ")");
      //cellNew.setAttribute("onmousedown", "availableOptions(" + cellNew.id + ")");
      row.appendChild(cellNew);

    }
    row.classList.add(`${direction}`);
    aux.appendChild(row);

  }
}

numberOfOptions=[1,2,3,4,5,6,7,8,9];

// LISTADO DE VARIABLES DENTRO DEL CUADRADO 1 DE LA DIRECCION BACK
/*const backC3 = document.getElementById("backC3");
const backD3 = document.getElementById("backD3");
const backE3 = document.getElementById("backE3");
const backC4 = document.getElementById("backC4");
const backD4 = document.getElementById("backD4");
const backE4 = document.getElementById("backE4");
const backC5 = document.getElementById("backC5");
const backD5 = document.getElementById("backD5");
const backE5 = document.getElementById("backE5");*/



/*const square1BackFace=[backC3.innerText, "backC4.innerText","backC5.innerText",
  "backD3.innerText","backD4.innerText", "backD5.innerText",
  "backE3.innerText","backE4.innerText","backE5.innerText"];*/

 

/*

function availableOptions(element){
  for (i in square1BackFace){
    let txt = element.textContent || element.innerText;
    let iText = element.textContent || element.innerText;
    if (txt==iText){
      console.log(String(element.id));
    }
  }
  };





function availableOptions(selectedElement){
  if (selectedElement = document)
  selectedElement = document
  for (selectedElement in square){
    if(numberOfOptions.includes(selectedElement)){
      let elementToRemove = numberOfOptions.indexOf(selectedElement);
      numberOfOptions.splice(elementToRemove);
      console.log(numberOfOptions)
    }
    else{
      console.log(numberOfOptions)
    }
  }
}*/



// CREATE FACE FUNCTION
// Each face should be the same (11x11), according to picture images/face.png

function createFace2(direction) {
  /*let face = document.createElement('div');
  
  face.style.padding = "30px";
  wrap.appendChild(face);*/

  nameBtn(rowsLetters, colNumbers, direction);




}

const directions = ['front', 'back', 'left', 'right', 'top', 'bottom'];

for (let i of directions) {
  createFace2(i);

}



/*

function createFace(direction) {

  // creation of the square: Each square has 11 rows and 11 columns

  // creation of the row
  for (let rowIndex = 0; rowIndex < 13; rowIndex++) {
    let row = document.createElement('div');
    // creation of the column and populate with buttons
    for (let colIndex = 0; colIndex < 13; colIndex++) {
      let cell = document.createElement('button');
      //cell.innerHTML = '<span style="color: #ccc;"></span>';
      cell.id = direction + String(rowIndex).padStart(2, '0') + String(colIndex).padStart(2, '0');
      cell.title = String(rowIndex).padStart(2, '0') + ", " + String(colIndex).padStart(2, '0');
      cell.setAttribute("onmousedown", "showOptions(" + cell.id + ")");
      row.appendChild(cell);

      if (rowIndex + colIndex <= 5 && colIndex < 5 && rowIndex < 2) {
        cell.style.backgroundColor = "black";
        cell.disabled = true

      }


      if (rowIndex + colIndex > 7 && colIndex > 7 && rowIndex < 2) {
        cell.style.backgroundColor = "black";
        cell.disabled = true
      }

      if (rowIndex + colIndex > 10 && rowIndex > 10 && colIndex < 5) {
        cell.style.backgroundColor = "black";
        cell.disabled = true
      }

      if (rowIndex + colIndex > 17 && rowIndex > 10 && colIndex > 7) {
        cell.style.backgroundColor = "black";
        cell.disabled = true
      }

      if (rowIndex + colIndex <= 5 && colIndex < 2 && rowIndex > 1 && rowIndex < 5) {
        cell.style.backgroundColor = "black";
        cell.disabled = true
      }

      if (rowIndex + colIndex > 12 && colIndex > 10 && rowIndex > 1 && rowIndex < 5) {
        cell.style.backgroundColor = "black";
        cell.disabled = true
      }

      if (rowIndex + colIndex > 12 && colIndex > 10 && rowIndex > 1 && rowIndex < 5) {
        cell.style.backgroundColor = "black";
        cell.disabled = true
      }

      if (rowIndex + colIndex > 9 && colIndex > 10 && rowIndex > 7 && rowIndex < 11) {
        cell.style.backgroundColor = "black";
        cell.disabled = true
      }

      if (rowIndex + colIndex > 7 && colIndex < 2 && rowIndex > 7 && rowIndex < 11) {
        cell.style.backgroundColor = "black";
        cell.disabled = true
      }

    }
    wrap.appendChild(row);
  }

}


function cellEnable() {

}

function cellDisable() {

}

class cell {
  constructor(enable) {
    this.enable = enable;

  }

}


var isDown = false;
rotateCube(-105, 100)
function rotateCube(x, y) {
  let Xvalue = Math.floor((x / 2) + 100);
  let Yvalue = Math.floor((y / 2) + 100);
  wrap.style.transform = `rotateX(${Yvalue}deg) rotateY(${-Xvalue}deg)`
};
*/
/*
document.documentElement.addEventListener('mousedown', function (e) {
    isDown = true;
    rotateCube(e.clientX, e.clientY)
})
document.documentElement.addEventListener('mouseup', function () {
    isDown = false;
    rotateCube(-105, 100)
});
document.documentElement.addEventListener('mousemove', function (e) {
    isDown && rotateCube(e.clientX, e.clientY)
})
function rotateCube(x, y) {
    let Xvalue = Math.floor((x / 2) + 100);
    let Yvalue = Math.floor((y / 2) + 100);
wrap.style.transform = `rotateX(${Yvalue}deg) rotateY(${-Xvalue}deg)`;
}



$(function(){
  
  let slider = $('input.slider-rotateX'),
      image = document.getElementById('wrapper');
  
  slider.on('change mousemove', function(){
    x=$(this).val();
    y=$(this).val();
    let Xvalue = Math.floor((x / 2) + 100);
    let Yvalue = Math.floor((y / 2) + 100);
    rotateCube(Xvalue,0);
  });
  
  
})

$(function(){
  let slider = $('input.slider-rotateY'),
      image = document.getElementById('wrapper');
  
  slider.on('change mousemove', function(){
    x=$(this).val();
    y=$(this).val();
    let Xvalue = Math.floor((x / 2) + 100);
    let Yvalue = Math.floor((y / 2) + 100);
    rotateCube(0,Yvalue);
  });
  
  
})

var xAngle = 0, yAngle = 0;
document.addEventListener('keydown', function (e) {
  switch (e.keyCode) {
    // for left key
    case 37:
      yAngle -= 30;
      break;

    case 38:// for up key  
      xAngle += 30;
      break;

    case 39:// for right key  
      yAngle += 30;
      break;

    case 40:// for down key  
      xAngle -= 30;
      break;
  }
  wrap.style.transform = `rotateX(${xAngle}deg) rotateY(${-yAngle}deg)`})*/


  
let xAngle=0, yAngle=0, zAngle=0;
document.addEventListener('keydown', function (e) {
  switch (e.keyCode) {
    // for left key
    case 37:
      yAngle -= 30;
      xAngle -= 30;
      wrap.style.transform = `rotateX(${xAngle}deg) rotateY(${-yAngle}deg) rotateZ(${0}deg)`
      break;

    case 38:// for up key  
      xAngle += 30;
      wrap.style.transform = `rotateX(${xAngle}deg) rotateY(${0}deg) rotateZ(${0}deg)`
      break;

    case 39:// for right key  
      yAngle += 30;
      wrap.style.transform = `rotateX(${0}deg) rotateY(${-yAngle}deg) rotateZ(${0}deg)`
      break;

    case 40:// for down key  
      zAngle -= 30;
      wrap.style.transform = `rotateX(${0}deg) rotateY(${0}deg) rotateZ(${zAngle}deg)`
      break;
  }
  })

  /*
  for (let i of square1BackFace){
    let txt = element.textContent || element.innerText;
    //let iText = i.textContent || i.innerText;
    if (txt=="1"){
      console.log(String(element.id));
    }
  }*/


  function showOptions(nuevoBoton) {
    clearTimeout(currentlyEditingTimeout);
    currentlyEditing = nuevoBoton;
    let mousepos = [MouseEvent.clientX, MouseEvent.clientY];
    let selector = document.getElementById('selection');
    //selector.style.top = +mousepos[1] + 'px'; /* esto es para que no aparezca encima*/
    //selector.style.left = +mousepos[0] + 'px';
    selector.style.display = 'block';
    currentlyEditingTimeout = setTimeout(function(){selector.style.display = 'none';}, 100000);
  }
  
  function chooseSelection(sel) {
    let selector = document.getElementById('selection');
    selector.style.display = 'none';
    currentlyEditing.innerHTML = sel.innerHTML;
    currentlyEditing = null;
    let selectedNumber = sel.textContent
    square1BackFace.push(selectedNumber);
    console.log(square2BackFace);
  
    
  }
  