/*let boardBlue = [
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

let boardBlack = [ 
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
let boardOrange = [
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
let boardPink = [
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
let boardGreen = [
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
let boardYellow = [
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

// generate the boardGame aka board without all the numbers. It is generated from the solution
let boardFace = []
function generateBoardGame(element,i) {

    const complexity = .5; // 0 to .99 if more then more letters in src string will be replaced by random ones 
    const randsArr = ("---------").split('').sort(function () { return 0.5 - Math.random() });

    for (let j = 0; j < element.length; j++) {
            let srcArr = (element[j]).split('');
            result = $.map(srcArr, function (el) { return (Math.random() > complexity) ? el : (randsArr.length) ? randsArr.shift() : el; }).join('');
        
        boardFace.push(result)
        
    }
    
    return boardFace
    
    

}*/




//let boardGame = new Map();


//let boardFaceNames = [boardBlack, boardBlue, boardGreen, boardOrange, boardPink, boardYellow]
//let boardFaceNames = {boardBlack:boardBlack, boardBlue:boardBlue, boardGreen:boardGreen, boardOrange:boardOrange, boardPink:boardPink, boardYellow:boardYellow}
/*
function getKeyandValue(boardGame){
for (let i=0; i<6;i++){
    let key2 = Object.keys(board)[i]
    let value2 = Object.values(board)[i]
    console.log(value2)
    value2[i] = generateBoardGame(value2)
    boardGame.set(key2,value2[i])

}
console.log(boardGame)
return boardGame
}*/

/*
  let key2 = Object.keys(boardFaceNames)
    let value2 = Object.values(boardFaceNames)
    console.log(key2)
    console.log(value2)
    value2 = generateBoardGame(value2)
    boardGame.set(key2,value2)
    console.log(boardGame)*/

/*
for (const boardFaceName of boardFaceNames){
    let key2 = Object.keys(user)
    let value2 = Object.values(user)
    console.log(key2)
    console.log(value2)}*/


/*
function getKeyandValue(boardGame){
    for (const boardFaceName of boardFaceNames){
        console.log(boardFaceName)
        let key2 = Object.keys(boardFaceName)
        let value2 = Object.values(boardFaceName)
        value2 = generateBoardGame(value2)
        console.log(value2)
        boardGame.set(boardFaceName,value2)
        //console.log(boardGame)
    }
    
    return boardGame
    }




getKeyandValue(boardGame)

boardGame = Object.fromEntries(boardGame); // to convert Map into Object

localStorage.setItem("boardGame", JSON.stringify(boardGame));*/



//Creation of FaceObjects. These objects will be use for the creation of the initial setup and to see if the solution is correct.
let gameSolution= [ {
    colorFace: "Black",
    row1:"",
    row2:"",
    row3:"",
    row4:"",
    row5:"",
    row6:"",
    row7:"",
    row8:"",
    row9:""
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


localStorage.setItem("boardSolution", JSON.stringify(gameSolution));


// generate the boardGame aka board without all the numbers. It is generated from the solution
/*let boardFace = []
function generateBoardGame(element,i) {

    const complexity = .5; // 0 to .99 if more then more letters in src string will be replaced by random ones 
    const randsArr = ("---------").split('').sort(function () { return 0.5 - Math.random() });

    for (let j = 1; j < element.length; j++) {
            let srcArr = (element[j]).split('');
            result = $.map(srcArr, function (el) { return (Math.random() > complexity) ? el : (randsArr.length) ? randsArr.shift() : el; }).join('');
        
        boardFace.push(result)
        
    }
    return boardFace
}*/


let boardFace = []
const boardGameStart = JSON.parse(localStorage.getItem("boardSolution"));
for (let indice = 1; indice<10; indice++){
//console.log(boardGameStart)
let element = boardGameStart.map(function (solution) {
    let rowNr=`row${indice}`
    console.log(rowNr)
    return solution[rowNr] // will return an array of six element. Each element represents the 9 values of the selected row in each of the color faces. For example is row1 is selected it will return ['', '796831452', '961347285', '923168457', '268794135', '573698124']
  
})
console.log(element)
generateBoardGame(element)}


function generateBoardGame(element) {
//let rowNr = `row${rowIndex}`
const complexity = .5; // 0 to .99 if more then more letters in src string will be replaced by random ones 
const randsArr = ("---------").split('').sort(function () { return 0.5 - Math.random() });

for (let j = 0; j < element.length; j++) {
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
        element.row2 =boardFace[i+5],
        element.row3 =boardFace[i+10],
        element.row4 =boardFace[i+15],
        element.row5 =boardFace[i+20],
        element.row6 =boardFace[i+25],
        element.row7 =boardFace[i+30],
        element.row8 =boardFace[i+35],
        element.row9 =boardFace[i+40]       
        
    }); 
    
    return gameStart
}



localStorage.setItem("boardGameStart", JSON.stringify(gameStart(boardFace)));
//console.log(gameStart(boardFace)) // ACA LOGRO HACER UNA ARRAY CON 54 SUBARRAYS CON GUIONES

