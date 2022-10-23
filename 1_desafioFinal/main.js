let currentlyEditing;
let currentlyEditingTimeout;
let wrap = document.getElementById('wrapper');
let inputAvatar = document.getElementById('pokemonAvatar');
let playerName;
let avatarSrc;
let colIndex;

const colLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; // columns of the faces
const rowNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']; // rows of the faces
const sideColors = ['Black', 'Blue', 'Orange', 'Pink', 'Green', 'Yellow']; // color of the faces

//------ CREATION OF THE FACES ------- ////

// FUNCTION THAT ALLOWS THE CREATION OF THE FACES AND BUTTONS
// There are three important functions:  fillFaceWithNumber(), getSolutionNr() and nameBtn()

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

// gets the solution from the board.js file. This file is the generator of each of the five sudokus
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


// creation of the 81 buttons with its characteristics (face,if is available to find)
let cellNew, row, faceElement
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

      (cellNew.innerText == "-") ? cellNew.classList.add("valueToFind") : cellNew.classList.add("valueGiven"); // valueTo Find corresponds to the grey ones. valueGiven corresponds to the others button that have the background color of the face

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

//-----
// CREATION OF THE FACES
for (let color of sideColors) {
  //createFace(i);
  nameBtn(colLetters, rowNumbers, color);
}

/// ----- CLOSE CREATION OF THE FACES ----- /////


// ----- SELECTING NUMBER  ------- //////
//FUNCTIONS TO CHOSE THE NUMBER AND FILL THE BUTTON WITH THE CHOSEN NUMBER
let proposedSolutionValues = [{ colorFace: "Blue" }]; // this file will be use to check is the proposed solution is ok
// Destructuring + spread --> the idea is to store the proposed solutions values to used it in a further upgrade to check if is not incorrect. Not used now
let { filledElements, ...rest } = { filledElements: proposedSolutionValues, val1: 1, val2: 2, val3: 3, val4: 4, val5: 5, val6: 6, val7: 7, val8: 8, val9: 9 };

// Showing the 1-9 numbers  --- IT IS SHOW AS A ROW OF GREY SQUARES WHEN A NUMBER TO FIND CELL IS CLICKED
let mousepos, selector
function showOptions(newButton) {
  currentlyEditing = newButton;

  mousepos = [MouseEvent.clientX, MouseEvent.clientY];
  selector = document.getElementById('selection');
  selector.style.top = +mousepos[1] + 'px'; /* to avoid that it overlaps the number*/
  selector.style.left = +mousepos[0] + 'px';
  selector.style.display = 'block';
}

function chooseSelection(sel) {
  let selector = document.getElementById('selection');
  selector.style.display = 'none';
  (sel.id !== "closeOptions") ? currentlyEditing.innerHTML = sel.innerHTML : ""; // in order to allow to close the selection chart
  //square1BackFace.push(selectedNumber); // This is added to test the future function of populating an array
  let idToLook = currentlyEditing.id;
  proposedSolutionValues[idToLook] = currentlyEditing.textContent;
}

///////----CLOSE SELECTING NUMBER----///////

//------FINISHING GAME ------ /////
let colorFace
function getProposedSolution(colorFace) {
  let colorButtons = document.querySelectorAll(`button.${colorFace}`)

  let colorSolutionProposed = { colorFace: `${colorFace}` }
  for (let i = 0; i < 9; i++) {
    let rowNr = `row${i + 1}`
    rowNr = [colorButtons[i].innerHTML, colorButtons[i + 9].innerHTML, colorButtons[i + 18].innerHTML, colorButtons[i + 27].innerHTML, colorButtons[i + 36].innerHTML, colorButtons[i + 45].innerHTML, colorButtons[i + 54].innerHTML, colorButtons[i + 63].innerHTML, colorButtons[i + 72].innerHTML]
    //console.log(`row${i + 1}:${rowNr.join('')}`)
    colorSolutionProposed[`row${i + 1}`] = `${rowNr.join('')}`;
  }
  //console.log(colorSolutionProposed)
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

function checkSolution() {
  let sol1 = JSON.parse(localStorage.getItem("boardSolution"))
  let sol2 = JSON.parse(localStorage.getItem("proposedSolution"))
  let sol3 = JSON.stringify(sol1)
  //console.log(sol3)
  let sol4 = JSON.stringify(sol2)
  //console.log(sol4)
  let isSolutionEqual = (sol3 == sol4) 
  return isSolutionEqual
}


$('#finish').click(function () {
  uploadSolution();
  (checkSolution()) ? answerCorrect() : wrongAnswer(); //if it is correct it will upload otherwise an alert comes and continue the game



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

/////----CLOSE FINISHING GAME----///////

///// ------ RANKING ------ /////
/// shows/close and update ranking. Use ranking.js file
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

/////----CLOSE RANKING----///////


////// ------GAME BEGINING------/////

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


startingGame(); // Starts the game




