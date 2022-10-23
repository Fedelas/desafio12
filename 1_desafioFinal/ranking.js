////// RANKING
// It will be stored in LocalStore and access only the first ten fastest players
// Whitin this file there are three main functions that allows to show, hide and update the high score. 
///And two auxiliary functions that helps the main ones (removechilds and compareValues)

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

  }
  ;
}

function hideHighScore() {
  const parentToRemoveChildsFrom = document.getElementById("high-scores")
  removeChilds(parentToRemoveChildsFrom);
  modalRanking.style.display = "none";

}

// FUNCTION TO REMOVE THE CHILDS TO CLOSE THE HIGH SCORE
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