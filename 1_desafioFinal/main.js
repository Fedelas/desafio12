let currentlyEditing;
let currentlyEditingTimeout;
let wrap = document.getElementById('wrapper');
let inputAvatar = document.getElementById('pokemonAvatar');
let playerName;
let avatarSrc;
let colIndex;

const colLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
const rowNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const sideColors = ['Black', 'Blue', 'Orange', 'Pink', 'Green', 'Yellow'];
const square1BackFace = []; // SEE COMMENT IN FUNCTION chooseSelection AT THE END OF THE DOCUMENT


//------
function fillFaceWithNumber(colorFace, i, j, cellNew) {

  switch (colorFace) {
    case "boardBlack": cellNew.innerText = "0"; break;
    case "boardBlue": cellNew.innerText = getSolutionNr(i, j, 1); break;
    case "boardOrange": cellNew.innerText = getSolutionNr(i, j, 2); break;
    case "boardPink": cellNew.innerText = getSolutionNr(i, j, 3); break;
    case "boardGreen": cellNew.innerText = getSolutionNr(i, j, 4); break;
    case "boardYellow": cellNew.innerText = getSolutionNr(i, j, 5); break;
  }
}


function getSolutionNr(colIndex, rowIndex, colorFaceIndex) {
  const boardSolution = JSON.parse(localStorage.getItem("boardGameStart"));
  let rowNr = `row${rowIndex}`
  let rowArrayNr = boardSolution.map(function (solution) {
    return solution[rowNr] // will return an array of six element. Each element represents the 9 values of the selected row in each of the color faces. For example is row1 is selected it will return ['', '796831452', '961347285', '923168457', '268794135', '573698124']
  })

  let col = colIndex
  let numberToFill = rowArrayNr[colorFaceIndex][colIndex]
  return numberToFill
}

//-----
let cellNew, row, faceElement
// FUNCTION THAT ALLOWS THE CREATION OF THE FACES AND BUTTONS 
function nameBtn(i, j, color) {
  // CREATION OF THE FACE
  faceElement = document.createElement("div")
  faceElement.classList.add(`${color}` + `Face`); // Name after the color of the face
  wrap.appendChild(faceElement);
  // each Face consists of 9 rows that should be created
  for (const i of colLetters) {
    row = document.createElement('span');
    colIndex = colLetters.indexOf(i)
    // each Row consists of 9 cells (columns) that should be created. These cells are HTML buttons
    for (const j of rowNumbers) {
      cellNew = document.createElement("button");
      cellNew.classList.add("cell");
      fillFaceWithNumber(`board${color}`, colIndex, j, cellNew);

      (cellNew.innerText == "-") ? cellNew.classList.add("valueToFind") : cellNew.classList.add("valueGiven");

      cellNew.classList.add(`${i + j}`);
      cellNew.classList.add(`${color}`);
      cellNew.id = color + String(`${i + j}`);
      cellNew.setAttribute("onmousedown", "showOptions(" + cellNew.id + ")"); // this shows the square with numbers 1 to 9 to select from

      row.appendChild(cellNew);

      // COLORING THE BORDERS OF 3x3 SQUARES

      (rowNumbers.indexOf(j) == 2 || rowNumbers.indexOf(j) == 5) ? cellNew.classList.add("horizontal-line-bottom") : cellNew.classList.add("noline");
      (rowNumbers.indexOf(j) == 3 || rowNumbers.indexOf(j) == 6) ? cellNew.classList.add("horizontal-line-top") : cellNew.classList.add("noline");
      (colLetters.indexOf(i) == 2 || colLetters.indexOf(i) == 5) ? cellNew.classList.add("vertical-line-right") : cellNew.classList.add("noline");
      (colLetters.indexOf(i) == 3 || colLetters.indexOf(i) == 6) ? cellNew.classList.add("vertical-line-left") : cellNew.classList.add("noline");

    }
    row.classList.add(`${color}`);
    faceElement.appendChild(row);

  }
}

// CREATE FACE FUNCTION
// Each face should be the same (9x9)

function createFace2(color) {
  nameBtn(colLetters, rowNumbers, color);

}

for (let i of sideColors) {
  createFace2(i);
}


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


let row1 = []
let arraySquare1 = [{ colorFace: "Blue" }];
// Destructuring + spread --> the idea is to remove the available posibilities if already used
let { elementosCompletados, ...rest } = { elementosCompletados: arraySquare1, val1: 1, val2: 2, val3: 3, val4: 4, val5: 5, val6: 6, val7: 7, val8: 8, val9: 9 };


// FUNCTION TO CHOSE THE NUMBER AND FILL THE BUTTON WITH THE CHOSEN NUMBER
function chooseSelection(sel) {
  let selector = document.getElementById('selection');
  selector.style.display = 'none';
  (sel.id !== "closeOptions") ? currentlyEditing.innerHTML = sel.innerHTML : ""; // in order to allow to close the selection chart
  //square1BackFace.push(selectedNumber); // This is added to test the future function of populating an array
  let idToLook = currentlyEditing.id;
  arraySquare1[idToLook] = currentlyEditing.textContent;
  console.log(arraySquare1);
}
let colorFace2
function getProposedSolution(colorFace2) {
  let colorButtons = document.querySelectorAll(`button.${colorFace2}`)

  let colorSolutionProposed = { colorFace: `${colorFace2}` }
  for (let i = 0; i < 9; i++) {
    let rowNr = `row${i + 1}`
    rowNr = [colorButtons[i].innerHTML, colorButtons[i + 9].innerHTML, colorButtons[i + 18].innerHTML, colorButtons[i + 27].innerHTML, colorButtons[i + 36].innerHTML, colorButtons[i + 45].innerHTML, colorButtons[i + 54].innerHTML, colorButtons[i + 63].innerHTML, colorButtons[i + 72].innerHTML]
    console.log(`row${i + 1}:${rowNr.join('')}`)
    colorSolutionProposed[`row${i + 1}`] = `${rowNr.join('')}`;
  }
  console.log(colorSolutionProposed)
  return colorSolutionProposed
}

let proposedSolution = []
let sol

function uploadSolution() {
  sideColors.forEach(element => {
    sol = getProposedSolution(element)
    proposedSolution[sideColors.indexOf(element)] = sol
  })
  console.log(sol)

    ;
  localStorage.setItem("proposedSolution", JSON.stringify(proposedSolution));
}

let mousepos, selector
// FUNCTION TO SHOW THE POSIBLE NUMBERS --- IT IS SHOW AS A BLACK SQUARE
function showOptions(newButton) {
  currentlyEditing = newButton;

  mousepos = [MouseEvent.clientX, MouseEvent.clientY];
  selector = document.getElementById('selection');
  selector.style.top = +mousepos[1] + 'px'; /* to avoid that it overlaps the number*/
  selector.style.left = +mousepos[0] + 'px';
  selector.style.display = 'block';
}


function checkSolution() {
  let sol1 = JSON.parse(localStorage.getItem("boardSolution"))
  let sol2 = JSON.parse(localStorage.getItem("proposedSolution"))
  let sol3 = JSON.stringify(sol1)
  console.log(sol3)
  let sol4 = JSON.stringify(sol2)
  console.log(sol4)
  let isSolutionEqual = (sol3 == sol4)
  return isSolutionEqual
}


$('#finish').click(function () {
  uploadSolution();
  (checkSolution()) ? answerCorrect() : wrongAnswer();



  function wrongAnswer() {
    Swal.fire({ // implementation of sweet alert
      title: 'WELL OPPS!',
      text: `There is an error in the proposed solution`,
      icon: 'error',
      confirmButtonText: "CONTINUE TRYING",
      showCancelButton: false,

    })
  }

  function answerCorrect() {
    clearTimeout(timex); // clearTimeout() method prevents the setTimeout() method from executing the function.
    $('#continueTime').prop('disabled', true)
    $('#pause').prop('disabled', true)
    $('#finish').prop('disabled', true)
    timeRanking = timeInSeconds;

    Swal.fire({ // implementation of sweet alert
      title: 'WELL DONE!',
      text: `Your time is: ${timeRanking} seconds`,
      icon: 'success',
      confirmButtonText: "PLAY AGAIN",
      showCancelButton: true,

    }).then((result) => {
      if (result.value) {
        UpdateScore();
        $('#continueTime').prop('disabled', false)
        $('#pause').prop('disabled', false)
        $('#finish').prop('disabled', false)
        reStartGame();

      } else {
        UpdateScore();
      }
    })



  }
});


////// ------ RANKING
// It will be stored in LocalStore and access only the first ten fastest players
//let game = document.querySelector("section#game");
//let score = game.querySelector("section#game span.score");
//let high_scores = game.querySelector("section#game ol.high-scores");

let game = document.querySelector("#modalRanking");
let high_scores = game.querySelector("ol.high-scores");
const modalRanking = document.getElementById("modalRanking");

$('#rankingBtn').click(function () {
  showHighscore()

}
);

$('#closeBtn').click(function () {
  hideHighScore()

}
);

/////--------///////


// GAME BEGINING

//GENERATE A RANDOM POKEMON AVATAR WITH THE NAME OF THE PERSON AND SHOW IT IN THE PAGE AND RANKING

function gettingPlayerName(){

(async () => {

  const {value: value} = await swal.fire({
    title: 'YOUR NAME:',
    input: 'text',
      showCancelButton: false,
      inputValidator: (value) => {
          return new Promise((resolve) => {
              if (value !== null && value !== "") {
                  resolve()
                  
              } else {
                  resolve('You need to write your name')
              }
          })
      }
  })
  playerName = value
  console.log(playerName);
  getPokemonAvatar(playerName);
  startTimer();
  })()
}

function getPokemonAvatar(playerNameInput) {

  const sumOfChar = playerNameInput.charCodeAt(0) + playerNameInput.charCodeAt(1);
  console.log(sumOfChar)

  fetch(`https://pokeapi.co/api/v2/pokemon/${sumOfChar}/`)
    .then((res) => res.json())
    .then((data) => {

      createPokemonAvatar(data)

    })

}

function createPokemonAvatar(pokemon) {
  const inputAvatar = document.getElementById("pokemonAvatar");
  const avatarImg = document.createElement("img");
  avatarSrc = pokemon.sprites.front_default
  avatarImg.src = pokemon.sprites.front_default;
  const div = document.createElement("div");
  div.appendChild(avatarImg);
  inputAvatar.append(div)
}

function startingGame() {
  gettingPlayerName(); // ASK FOR PLAYERS NAME IN ORDER TO STORE IT FOR THE RANKING
}

function reStartGame() {
  location.reload()
}

startingGame();




