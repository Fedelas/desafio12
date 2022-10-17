let currentlyEditing;
let currentlyEditingTimeout;
let wrap = document.getElementById('wrapper');
let inputAvatar = document.getElementById('pokemonAvatar');
let playerName;
let avatarSrc;
let colIndex;

/*
const colLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
const rowNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
*/
const colLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
const rowNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const sideColors = ['Black', 'Blue', 'Orange', 'Pink', 'Green', 'Yellow'];
const square1BackFace = []; // SEE COMMENT IN FUNCTION chooseSelection AT THE END OF THE DOCUMENT
//numberOfOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // TO BE USE IN THE FUTURE
//let {elementA, elementB, elementC, elementD, elementE,elementF,elementG, elementH, elementI}=elementsInRow

/*
let boardBlue = [
  "796831452",
  "135264789",
  "284759631",
  "968347215",
  "421985376",
  "357126948",
  "642513897",
  "819472563",
  "573698124"
]


let solution = [
  "796831452",
  "135264789",
  "284759631",
  "968347215",
  "421985376",
  "357126948",
  "642513897",
  "819472563",
  "573698124"
]

let boardBlack=[
  "387491625",
  "241568379",
  "569327418",
  "758619234",
  "123784596",
  "496253187",
  "934176852",
  "675832941",
  "812945763"
]
let boardOrange=[
   "923168457",
   "465297381",
   "178345692",
   "614523879",
   "352879164",
   "897614523",
   "549781236",
   "231956748",
   "786432915"
   
]
let boardPink=[
  "268794135",
  "935216784",
  "147385629",
  "593621847",
  "674938512",
  "821547963",
  "782469351",
  "319852476",
  "456173298"
  
]
let boardGreen=[
  "961347285",
  "274158693",
  "385692741",
  "127986534",
  "643715829",
  "859423167",
  "412569378",
  "538274916",
  "796831452",
]
let boardYellow=[
  "573698124",
  "168247395",
  "924315786",
  "256739841",
  "381452967",
  "497186253",
  "639874512",
  "812563479",
  "745921638",
]

//let board=[boardBlack,boardblue, boardorange, boardgreen, boardpink, boardyellow]

let board = {
  "boardBlack": boardBlack,
  "boardBlue": boardBlue,
  "boardOrange": boardOrange,
  "boardGreen": boardGreen,
  "boardPink": boardPink,
  "boardYellow": boardYellow,

};
//Save the new board
localStorage.setItem("board", JSON.stringify(board));*/

/*
function fillFaceWithNumber(colorFace,i, j,cellNew){
  const board = JSON.parse(localStorage.getItem("board"));
  switch(colorFace){
    case "boardBlack": cellNew.innerText = board.boardBlack[rowNumbers.indexOf(j)][colLetters.indexOf(i)]; break;
    case "boardBlue": cellNew.innerText = board.boardBlue[rowNumbers.indexOf(j)][colLetters.indexOf(i)]; break;
    case "boardOrange": cellNew.innerText = board.boardOrange[rowNumbers.indexOf(j)][colLetters.indexOf(i)]; break;
    case "boardGreen": cellNew.innerText = board.boardGreen[rowNumbers.indexOf(j)][colLetters.indexOf(i)]; break;
    case "boardPink": cellNew.innerText = board.boardPink[rowNumbers.indexOf(j)][colLetters.indexOf(i)]; break;
    case "boardYellow": cellNew.innerText = board.boardYellow[rowNumbers.indexOf(j)][colLetters.indexOf(i)]; break;
  }
}*/



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

// FUNCTION THAT ALLOWS THE CREATION OF THE FACES AND BUTTONS 
function nameBtn(i, j, color) {
  // CREATION OF THE FACE
  let faceElement = document.createElement("div")
  faceElement.classList.add(`${color}` + `Face`); // Name after the color of the face
  wrap.appendChild(faceElement);
  // each Face consists of 9 rows that should be created
  for (const i of colLetters) {
    let row = document.createElement('span');
    colIndex = colLetters.indexOf(i)
    // each Row consists of 9 cells (columns) that should be created. These cells are HTML buttons
    for (const j of rowNumbers) {
      let cellNew = document.createElement("button");
      cellNew.classList.add("cell");
      // caracteristics of the cells
      //let text = document.createTextNode(i + j); ---> TO REMOVE
      /*
      let boardColor = JSON.parse(localStorage.getItem("board"))
      //let boardColor = board[index]
      let boardFace = `board${color}`
      console.log(boardFace)
      //console.log(boardColor.boardFace)
      cellNew.innerText = boardFace[colLetters.indexOf(i)][rowNumbers.indexOf(j)]
      */
      fillFaceWithNumber(`board${color}`, colIndex, j, cellNew);

      (cellNew.innerText=="-") ? cellNew.classList.add("valueToFind") : cellNew.classList.add("valueGiven");

      cellNew.classList.add(`${i + j}`);
      cellNew.classList.add(`${color}`);
      cellNew.id = color + String(`${i + j}`);
      //cellNew.appendChild(text); ---> TO REMOVE
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


let row1=[]
let arraySquare1 = [{colorFace: "Blue"}];
// Destructuring + spread --> the idea is to remove the available posibilities if already used
let { elementosCompletados, ...rest } = { elementosCompletados: arraySquare1, val1: 1, val2: 2, val3: 3, val4: 4, val5: 5, val6: 6, val7: 7, val8: 8, val9: 9 };


// FUNCTION TO CHOSE THE NUMBER AND FILL THE BUTTON WITH THE CHOSEN NUMBER
function chooseSelection(sel) {
  let selector = document.getElementById('selection');
  selector.style.display = 'none';
  (sel.id !== "closeOptions") ? currentlyEditing.innerHTML = sel.innerHTML : ""; // in order to allow to close the selection chart
  //currentlyEditing = null;
  // CODE TO BE USE IN THE FUTURE TO GET THE VALUES OF EVERY CELL
  //let selectedNumber = sel.textContent
  //square1BackFace.push(selectedNumber); // This is added to test the future function of populating an array
  let idToLook = currentlyEditing.id;
  arraySquare1[idToLook] = currentlyEditing.textContent;
  console.log(arraySquare1);
}
let colorFace2
function getProposedSolution(colorFace2){
  // let button = document.getElementsByTagName("button")
  let colorButtons = document.querySelectorAll(`button.${colorFace2}`)
  /*
  colorButtons.forEach(element => {
    let idToLook = element.id;
  blueButtonsArray[idToLook] = currentlyEditing.textContent;
  });*/
  let colorSolutionProposed={colorFace: `${colorFace2}`}
  for (let i = 0; i < 9; i++) {
    let rowNr=`row${i+1}`
    rowNr= [colorButtons[i].innerHTML,colorButtons[i+9].innerHTML,colorButtons[i+18].innerHTML,colorButtons[i+27].innerHTML,colorButtons[i+36].innerHTML,colorButtons[i+45].innerHTML,colorButtons[i+54].innerHTML,colorButtons[i+63].innerHTML,colorButtons[i+72].innerHTML]
    console.log(`row${i+1}:${rowNr.join('')}`)
    colorSolutionProposed[`row${i+1}`]=`${rowNr.join('')}`;
}
  console.log(colorSolutionProposed)
  return colorSolutionProposed
}

let proposedSolution = []
let sol

function uploadSolution(){
sideColors.forEach(element => {
  sol = getProposedSolution(element)
  proposedSolution[sideColors.indexOf(element)]=sol
})
  console.log(sol)  

;
localStorage.setItem("proposedSolution", JSON.stringify(proposedSolution));
}

// FUNCTION TO SHOW THE POSIBLE NUMBERS --- IT IS SHOW AS A BLACK SQUARE
function showOptions(nuevoBoton) {

  //console.log(rest); // to be use in future to show in DOM the available posibilities

  currentlyEditing = nuevoBoton;
  //let selector = document.getElementById('selection');
  let mousepos = [MouseEvent.clientX, MouseEvent.clientY];
  let selector = document.getElementById('selection');
  selector.style.top = +mousepos[1] + 'px'; /* esto es para que no aparezca encima*/
  selector.style.left = +mousepos[0] + 'px';
  selector.style.display = 'block';
}

//// TIMER 
let hours = 0;
let mins = 0;
let seconds = 0;
let timeInSeconds = 0;
let timeRanking = 0;

$('#continueTime').click(function () {
  startTimer();
});

$('#pause').click(function () {
  clearTimeout(timex); // clearTimeout() method prevents the setTimeout() method from executing the function.
});

function checkSolution(){
let sol1=JSON.parse(localStorage.getItem("boardSolution"))
let sol2=JSON.parse(localStorage.getItem("proposedSolution"))
let sol3=JSON.stringify(sol1)
console.log(sol3)
let sol4=JSON.stringify(sol2)
console.log(sol4)
let isSolutionEqual = (sol3==sol4)
return isSolutionEqual
}


$('#finish').click(function () {
  uploadSolution();
  (checkSolution()) ? answerCorrect() : "" ;


  function answerCorrect(){
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
      reStartingGameSamePlayer();

    } else {
      UpdateScore();
    }
  })



}});

function startTimer() {
  timex = setTimeout(function () {
    seconds++;
    if (seconds > 59) {
      seconds = 0; mins++;
      if (mins > 59) {
        mins = 0; hours++;

        if (hours < 10) { $("#hours").text('0' + hours + ':') } else $("#hours").text(hours + ':');
      }

      if (mins < 10) {
        $("#mins").text('0' + mins + ':');
      }
      else $("#mins").text(mins + ':');
    }
    if (seconds < 10) {
      $("#seconds").text('0' + seconds);
    } else {
      $("#seconds").text(seconds);
    }


    startTimer();
  }, 1000);

  timeInSeconds = hours * 3600 + mins * 60 + seconds;
}

////// RANKING
// It will be stored in LocalStore and access only the first ten fastest players
//let game = document.querySelector("section#game");
//let score = game.querySelector("section#game span.score");
//let high_scores = game.querySelector("section#game ol.high-scores");

let game = document.querySelector("#modalRanking");
let high_scores = game.querySelector("ol.high-scores");
const modalRanking = document.getElementById("modalRanking");

//let rankingButtonClicked = false

$('#rankingBtn').click(function () {
  showHighscore()
  /*
  (rankingButtonClicked == false)? showHighscore() : hideHighScore();
  console.log(rankingButtonClicked);*/
}
);

$('#closeBtn').click(function () {
  hideHighScore()
  /*
  (rankingButtonClicked == false)? showHighscore() : hideHighScore();
  console.log(rankingButtonClicked);*/
}
);



function showHighscore() {
  modalRanking.style.display = "block";
  let rank;
  let highScoresList = JSON.parse(localStorage["high-scores"]);

  const title = document.createElement("span");
  title.innerText = "HIGH SCORE";
  high_scores.appendChild(title);

  for (let i = 0; i < 10; i++) {
    let player = highScoresList[i].playerName   // I create this variable because sometimes I get an error in the following line despite it is
    rank = `${player}` + ":" + `${highScoresList[i].timeInSeconds}` + "seconds";

    const avatarImg = document.createElement("img");
    avatarImg.src = highScoresList[i].avatar;
    high_scores.appendChild(avatarImg);


    let fragment = document.createElement('li');
    fragment.classList.add("listElementRanking")
    fragment.innerHTML = (typeof (rank) != "undefined" ? rank : "");
    high_scores.appendChild(fragment);



    //rankingButtonClicked = true
  }
  ;
}

function hideHighScore() {

  const parentToRemoveChildsFrom = document.getElementById("high-scores")
  removeChilds(parentToRemoveChildsFrom);
  modalRanking.style.display = "none";
  //rankingButtonClicked = false;

}


const removeChilds = (parent) => {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
};

function UpdateScore() {

  // Parse any JSON previously stored in allEntries
  let HighScores = JSON.parse(localStorage.getItem("high-scores"));
  if (HighScores == null) HighScores = [];

  let entry = {
    "playerName": playerName,
    "timeInSeconds": timeInSeconds,
    "avatar": avatarSrc
  };
  //Save the new score
  localStorage.setItem("newScore", JSON.stringify(entry));
  // Save allEntries back to local storage in ascending order related to the time in seconds it took to solve the game
  HighScores.push(entry);
  HighScores = HighScores.sort(compareValues("timeInSeconds"));
  localStorage.setItem("high-scores", JSON.stringify(HighScores));
}



// FUNCTION TO SORT THE VALUES IN ASCENDING / DESC ORDER

function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}


// GAME BEGINING

//GENERATE A RANDOM POKEMON AVATAR WITH THE NAME OF THE PERSON AND SHOW IT IN THE PAGE AND RANKING

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





function gettingPlayerName() {
  let input = prompt("PLAYERS NAME:");

  if (input !== null && input !== "") {
    playerName = input
    getPokemonAvatar(playerName);

  }
  else {
    alert("Please fill with your Name");
    gettingPlayerName();
  }

  console.log(playerName);
}

function startingGame() {
  gettingPlayerName(); // ASK FOR PLAYERS NAME IN ORDER TO STORE IT FOR THE RANKING
  startTimer();
}

function reStartingGameSamePlayer() {
  hours = 0; mins = 0; seconds = 0;
  $('#hours', '#mins').html('00:');
  $('#seconds').html('00');
  startTimer();
}





startingGame();




