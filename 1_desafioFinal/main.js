//import {reglas} from "./promptInicio.js"

let currentlyEditing;
let currentlyEditingTimeout;
let wrap = document.getElementById('wrapper');

const rowsLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
const colNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];


const directions = ['red', 'blue', 'orange', 'pink', 'green', 'yellow'];
const square1BackFace = []; // SEE COMMENT IN FUNCTION chooseSelection AT THE END OF THE DOCUMENT
//numberOfOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // TO BE USE IN THE FUTURE

//reglas();


// FUNCTION THAT ALLOWS THE CREATION OF THE FACES AND BUTTONS 
function nameBtn(i, j, direction) {
  let aux = document.createElement("div")
  aux.classList.add(`${direction}` + `Face`); // CREATION OF THE FACE
  wrap.appendChild(aux);
  for (const i of rowsLetters) {
    let row = document.createElement('span');
    for (const j of colNumbers) {
      let cellNew = document.createElement("button");
      cellNew.classList.add("cell");
      let text = document.createTextNode(i + j);
      cellNew.classList.add(`${i + j}`);
      cellNew.classList.add(`${direction}`);
      cellNew.id = direction + String(`${i + j}`);
      cellNew.appendChild(text);
      cellNew.setAttribute("onmousedown", "showOptions(" + cellNew.id + ")");
      row.appendChild(cellNew);

    }
    row.classList.add(`${direction}`);
    aux.appendChild(row);

  }
}








// CREATE FACE FUNCTION
// Each face should be the same (11x11), according to picture images/face.png

function createFace2(direction) {
  /*let face = document.createElement('div');
  
  face.style.padding = "30px";
  wrap.appendChild(face);*/
  nameBtn(rowsLetters, colNumbers, direction);

}

for (let i of directions) {
  createFace2(i);
}



// CODE TO MAKE THE CUBE ROTATE
let xAngle = 0, yAngle = 0, zAngle = 0;
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


// FUNCTION TO SHOW THE POSIBLE NUMBERS --- IT IS SHOW AS A BLACK SQUARE
function showOptions(nuevoBoton) {
  currentlyEditing = nuevoBoton;
  let mousepos = [MouseEvent.clientX, MouseEvent.clientY];
  let selector = document.getElementById('selection');
  selector.style.top = +mousepos[1] + 'px'; /* esto es para que no aparezca encima*/
  selector.style.left = +mousepos[0] + 'px';
  selector.style.display = 'block';
  
}

let arraySquare1 = {blueG13: '', blueF12: ''};

// FUNCTION TO CHOSE THE NUMBER AND FILL THE BUTTON WITH THE CHOSEN NUMBER
function chooseSelection(sel) {
  let selector = document.getElementById('selection');
  selector.style.display = 'none';
  currentlyEditing.innerHTML = sel.innerHTML;
  //currentlyEditing = null;
  let selectedNumber = sel.textContent
  //square1BackFace.push(selectedNumber); // This is added to test the future function of populating an array
  let idToLook = currentlyEditing.id;
  arraySquare1[idToLook] = currentlyEditing.textContent;
  console.log(arraySquare1);
}




console.log(arraySquare1);





