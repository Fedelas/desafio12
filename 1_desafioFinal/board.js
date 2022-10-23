localStorage.removeItem("proposedSolution") // the proposed solution is the solution it will be compared to. First we have to remove it

//------GAME SOLUTION OBJECTS.-----

//These objects will be use for the creation of the initial setup and to see if the solution is correct.
let gameSolution= [ {
    colorFace: "Black",
    row1:"000000000",
    row2:"000000000",
    row3:"000000000",
    row4:"000000000",
    row5:"000000000",
    row6:"000000000",
    row7:"000000000",
    row8:"000000000",
    row9:"000000000"
},
{
    colorFace: "Blue",
    row1:"796831452",
    row2:"135264789",
    row3:"284759631",
    row4:"968347215",
    row5:"421985376",
    row6:"357126948",
    row7:"642513897",
    row8:"819472563",
    row9:"573698124"
   },
{
    colorFace: "Orange",
    row1:"923168457",
    row2:"465297381",
    row3:"178345692",
    row4:"614523879",
    row5:"352879164",
    row6:"897614523",
    row7:"549781236",
    row8:"231956748",
    row9:"786432915"
},
{
    colorFace: "Pink",
    row1:"268794135",
    row2:"935216784",
    row3:"147385629",
    row4:"593621847",
    row5:"674938512",
    row6:"821547963",
    row7:"782469351",
    row8:"319852476",
    row9:"456173298"
  },
{
    colorFace: "Green",
    row1:"961347285",
    row2:"274158693",
    row3:"385692741",
    row4:"127986534",
    row5:"643715829",
    row6:"859423167",
    row7:"412569378",
    row8:"538274916",
    row9:"796831452",
   },
{
    colorFace: "Yellow",
    row1:"573698124",
    row2:"168247395",
    row3:"924315786",
    row4:"256739841",
    row5:"381452967",
    row6:"497186253",
    row7:"639874512",
    row8:"812563479",
    row9:"745921638",
}]
localStorage.setItem("boardSolution", JSON.stringify(gameSolution)); // stores the correct solution
//-----------

// ---------FILL ALL THE CELLS WITH EITHER - OR A NUMBER. To do that we work from the solution
let boardFace = []
const boardGameStart = JSON.parse(localStorage.getItem("boardSolution"));
for (let indice = 1; indice<10; indice++){
let element = boardGameStart.map(function (solution) {
    let rowNr=`row${indice}`
    return solution[rowNr] // will return an array of six element. Each element represents the 9 values of the selected row in each of the color faces. For example is row1 is selected it will return ['000000000', '796831452', '961347285', '923168457', '268794135', '573698124']
  
})
generateBoardGame(element)}


function generateBoardGame(element) {
const complexity = .3; // 0 to .99 if more then more letters in src string will be replaced by random ones 
const randsArr = ("------------------------------------------------------").split('');
for (let j = 0; j < 6; j++) {
        let srcArr = (element[j]).split('');
        result = $.map(srcArr, function (el) { return (Math.random() > complexity) ? el : (randsArr.length) ? randsArr.shift() : el; }).join('');
        boardFace.push(result)
}
return boardFace
}

function gameStart(boardFace){
    let gameStart=[{colorFace: "Black"},{colorFace: "Blue"},{colorFace: "Orange"},{colorFace: "Pink"},{colorFace: "Green"},{colorFace: "Yellow"}]
    
    gameStart.forEach(element => {
        let i = gameStart.indexOf(element)
        element.row1 =boardFace[i],
        element.row2 =boardFace[i+6],
        element.row3 =boardFace[i+12],
        element.row4 =boardFace[i+18],
        element.row5 =boardFace[i+24],
        element.row6 =boardFace[i+30],
        element.row7 =boardFace[i+36],
        element.row8 =boardFace[i+42],
        element.row9 =boardFace[i+48]       
        
    }); 
    return gameStart
}

localStorage.setItem("boardGameStart", JSON.stringify(gameStart(boardFace)));
//----------


