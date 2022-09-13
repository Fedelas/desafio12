//import {reglas} from "./promptInicio.js"

let currentlyEditing;
let currentlyEditingTimeout;
let wrap = document.getElementById('wrapper');



const rowsLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
const colNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const directions = ['red', 'blue', 'orange', 'pink', 'green', 'yellow'];
const square1BackFace = []; // SEE COMMENT IN FUNCTION chooseSelection AT THE END OF THE DOCUMENT
//numberOfOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // TO BE USE IN THE FUTURE


// FUNCTION REGLAS: PARA CUMPLIMENTAR CON EL DESAFIO

function reglas() {
  let input = prompt("¿Querés conocer las reglas de cudoku? - Favor responder SI o NO");

  if (input === null) {
      return; //break out of the function early
  }
  switch (input.toUpperCase()) {
      case 'SI':
          alert("El cudoku es una variación del sudoku original. La idea es integrar los sudokus de cada una de las caras del cubo a través de los cuadrados que estan en el medio de cada uno de los lados")
          break;
      case 'NO':
          break;
      default:
          alert("Favor responder SI o NO");
          reglas();

  }

}


// LLAMO A LA REGLA
reglas();


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
      cellNew.setAttribute("onmousedown", "showOptions(" + cellNew.id + ")"); // this shows the square with numbers 1 to 9 to select from
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
      zAngle=0;
      //wrap.style.transform = `rotateX(${xAngle}deg) rotateY(${-yAngle}deg) rotateZ(${0}deg)`
      wrap.style.transform = `rotateX(${xAngle}deg) rotateY(${-yAngle}deg)`
      xAngle=xAngle;
      yAngle=yAngle;
      zAngle=zAngle;
      break;

    case 38:// for up key  
      xAngle += 30;
      yAngle=0;
      zAngle=0;
      //wrap.style.transform = `rotateX(${xAngle}deg) rotateY(${0}deg) rotateZ(${0}deg)`
      wrap.style.transform = `rotateX(${xAngle}deg)`
      xAngle=xAngle;
      yAngle=yAngle;
      zAngle=zAngle;
      break;

    case 39:// for right key  
      yAngle += 30;
      xAngle=0;
      zAngle=0;
      //wrap.style.transform = `rotateX(${0}deg) rotateY(${-yAngle}deg) rotateZ(${0}deg)`
      wrap.style.transform = `rotateY(${-yAngle}deg)`
      xAngle=xAngle;
      yAngle=yAngle;
      zAngle=zAngle;
      break;

    case 40:// for down key  
      zAngle -= 30;
      xAngle=0;
      yAngle=0;
      //wrap.style.transform = `rotateX(${0}deg) rotateY(${0}deg) rotateZ(${zAngle}deg)`
      wrap.style.transform = `rotateZ(${zAngle}deg)`
      xAngle=xAngle;
      yAngle=yAngle;
      zAngle=zAngle;
      break;
  }
  console.log(xAngle);
  console.log(yAngle);
  console.log(zAngle);
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
  // CODE TO BE USE IN THE FUTURE TO GET THE VALUES OF EVERY CELL
  let selectedNumber = sel.textContent
  //square1BackFace.push(selectedNumber); // This is added to test the future function of populating an array
  let idToLook = currentlyEditing.id;
  arraySquare1[idToLook] = currentlyEditing.textContent;
  console.log(arraySquare1);
}




console.log(arraySquare1); // to be used in the furute





