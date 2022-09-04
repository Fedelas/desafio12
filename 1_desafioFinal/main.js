let currentlyEditingTimeout;
let wrap = document.getElementById('wrapper');

const rowsLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
const colNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];




function nameBtn(i, j,direction) {
 let aux = document.createElement("div")
 aux.classList.add(`${direction}`+`Face`);
 wrap.appendChild(aux);
  for (const i of rowsLetters) {
    let row = document.createElement('span');
    for (const j of colNumbers) {
      let cellNew = document.createElement("button");
      cellNew.classList.add("cell");
      let text = document.createTextNode(i + j);
      cellNew.classList.add(`${i+j}`)
      cellNew.classList.add(`${direction}`);
      cellNew.appendChild(text);
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
*/

var isDown = false;
rotateCube(-105, 100)
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

