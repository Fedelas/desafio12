let currentlyEditing;
let currentlyEditingTimeout;
let wrap = document.getElementById('wrapper');
let playerName;


const rowsLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
const colNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const directions = ['red', 'blue', 'orange', 'pink', 'green', 'yellow'];
const square1BackFace = []; // SEE COMMENT IN FUNCTION chooseSelection AT THE END OF THE DOCUMENT
//numberOfOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // TO BE USE IN THE FUTURE
//let {elementA, elementB, elementC, elementD, elementE,elementF,elementG, elementH, elementI}=elementsInRow

// FUNCTION THAT ALLOWS THE CREATION OF THE FACES AND BUTTONS 
function nameBtn(i, j, direction) {
  // CREATION OF THE FACE
  let faceElement = document.createElement("div")
  faceElement.classList.add(`${direction}` + `Face`); // Name after the color of the face
  wrap.appendChild(faceElement);
  // each Face consists of 9 rows that should be created
  for (const i of rowsLetters) {
    let row = document.createElement('span');
    // each Row consists of 9 cells (columns) that should be created. These cells are HTML buttons
    for (const j of colNumbers) {
      let cellNew = document.createElement("button");
      cellNew.classList.add("cell");
      // caracteristics of the cells
      let text = document.createTextNode(i + j);
      cellNew.classList.add(`${i + j}`);
      cellNew.classList.add(`${direction}`);
      cellNew.id = direction + String(`${i + j}`);
      cellNew.appendChild(text);
      cellNew.setAttribute("onmousedown", "showOptions(" + cellNew.id + ")"); // this shows the square with numbers 1 to 9 to select from
      row.appendChild(cellNew);

    }
    row.classList.add(`${direction}`);
    faceElement.appendChild(row);

  }
}

// CREATE FACE FUNCTION
// Each face should be the same (9x9)

function createFace2(direction) {
  nameBtn(rowsLetters, colNumbers, direction);

}

for (let i of directions) {
  createFace2(i);
}


// CODE TO MAKE THE CUBE ROTATE
let xAngle, yAngle, zAngle;
document.addEventListener('keydown', function (e) {
  switch (e.keyCode) {
    // for left key
    case 37:
      yAngle -= 30;
      xAngle -= 30;
      zAngle = 0;
      //wrap.style.transform = `rotateX(${xAngle}deg) rotateY(${-yAngle}deg) rotateZ(${0}deg)`
      wrap.style.transform = `rotateX(${xAngle}deg) rotateY(${-yAngle}deg)`
      xAngle = xAngle;
      yAngle = yAngle;
      zAngle = zAngle;
      break;

    case 38:// for up key  
      xAngle += 30;
      yAngle = 0;
      zAngle = 0;
      //wrap.style.transform = `rotateX(${xAngle}deg) rotateY(${0}deg) rotateZ(${0}deg)`
      wrap.style.transform = `rotateX(${xAngle}deg)`
      xAngle = xAngle;
      yAngle = yAngle;
      zAngle = zAngle;
      break;

    case 39:// for right key  
      yAngle += 30;
      xAngle = 0;
      zAngle = 0;
      //wrap.style.transform = `rotateX(${0}deg) rotateY(${-yAngle}deg) rotateZ(${0}deg)`
      wrap.style.transform = `rotateY(${-yAngle}deg)`
      xAngle = xAngle;
      yAngle = yAngle;
      zAngle = zAngle;
      break;

    case 40:// for down key  
      zAngle -= 30;
      xAngle = 0;
      yAngle = 0;
      //wrap.style.transform = `rotateX(${0}deg) rotateY(${0}deg) rotateZ(${zAngle}deg)`
      wrap.style.transform = `rotateZ(${zAngle}deg)`
      xAngle = xAngle;
      yAngle = yAngle;
      zAngle = zAngle;
      break;
  }
  
})

let arraySquare1 = {}; 
// Destructuring + spread --> the idea is to remove the available posibilities if already used
let {elementosCompletados, ...rest} = {elementosCompletados: arraySquare1, val1: 1, val2: 2, val3:3, val4:4, val5:5, val6:6, val7:7, val8:8, val9:9};


// FUNCTION TO CHOSE THE NUMBER AND FILL THE BUTTON WITH THE CHOSEN NUMBER
function chooseSelection(sel) {
  let selector = document.getElementById('selection');
  selector.style.display = 'none';
  (sel.id!=="closeOptions")? currentlyEditing.innerHTML = sel.innerHTML : ""; // in order to allow to close the selection chart
  //currentlyEditing = null;
  // CODE TO BE USE IN THE FUTURE TO GET THE VALUES OF EVERY CELL
  //let selectedNumber = sel.textContent
  //square1BackFace.push(selectedNumber); // This is added to test the future function of populating an array
  let idToLook = currentlyEditing.id;
  arraySquare1[idToLook] = currentlyEditing.textContent;
  //console.log(arraySquare1);
 }

// FUNCTION TO SHOW THE POSIBLE NUMBERS --- IT IS SHOW AS A BLACK SQUARE
function showOptions(nuevoBoton) {
  
  console.log(rest); // to be use in future to show in DOM the available posibilities

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

 $('#finish').click(function () {
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

    }else{
      UpdateScore();
    }
})


  
 }); 

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
let game = document.querySelector("section#game");
let score = game.querySelector("section#game span.score");
let high_scores = game.querySelector("section#game ol.high-scores");
let rankingButtonClicked = false

$('#rankingBtn').click(function () {
  (rankingButtonClicked == false)? showHighscore() : hideHighScore();
  console.log(rankingButtonClicked);
} 
);

function showHighscore(){
  let rank;
  highScoresList = JSON.parse(localStorage["high-scores"]);
  
  for (let i = 0; i < 10; i++) {
        
    rank = `${highScoresList[i].playerName}` + ":" + `${highScoresList[i].timeInSeconds}` + "seconds";
  
  
   console.log(rank);
   let fragment = document.createElement('li');
   fragment.classList.add("listElementRanking")
    fragment.innerHTML = (typeof(rank) != "undefined" ? rank : "" );
    high_scores.appendChild(fragment);
    rankingButtonClicked = true
  }
;
}

function hideHighScore(){
  const parentToRemoveChildsFrom = document.getElementById("high-scores")
  removeChilds(parentToRemoveChildsFrom);
  rankingButtonClicked = false;
  
}


const removeChilds = (parent) => {
  while (parent.lastChild) {
      parent.removeChild(parent.lastChild);
  }
};

function UpdateScore() {

      // Parse any JSON previously stored in allEntries
      let HighScores = JSON.parse(localStorage.getItem("high-scores"));
      if(HighScores == null) HighScores = [];
      
      let entry = {
          "playerName": playerName,
          "timeInSeconds": timeInSeconds
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
function gettingPlayerName() {
  let input = prompt("PLAYERS NAME:");

  if (input !== null && input !== "") {
    playerName = input

  }
  else {
    alert("Please fill with your Name");
    gettingPlayerName();
  }

  console.log(playerName);
}

function startingGame(){
  gettingPlayerName(); // ASK FOR PLAYERS NAME IN ORDER TO STORE IT FOR THE RANKING
  startTimer(); 
}

function reStartingGameSamePlayer(){
  hours =0;      mins =0;      seconds =0;
  $('#hours','#mins').html('00:');
  $('#seconds').html('00'); 
  startTimer(); 
}

startingGame();




