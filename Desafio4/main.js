let currentlyEditing;
let currentlyEditingTimeout;
let wrap = document.getElementById('wrapper');
restart();


function restart() {
  wrap.innerHTML = "";
  for (let i = 0; i < 13; i++) {
    let row = document.createElement('div');
    for (let j = 0; j < 13; j++) {
      let nuevoBoton = document.createElement('button');
      nuevoBoton.innerHTML = '<span style="color: #ccc;"></span>';
      nuevoBoton.id = "c" + String(i).padStart(2, '0') + String(j).padStart(2, '0');
      nuevoBoton.title = String(i).padStart(2, '0') + ", " + String(j).padStart(2, '0');
      nuevoBoton.setAttribute("onmousedown", "showOptions(" + nuevoBoton.id + ")");
      row.appendChild(nuevoBoton);

      if (i+j<=5 && j<5 && i<2){
        nuevoBoton.style.backgroundColor = "black";
        nuevoBoton.disabled = true
        
      }


      if (i+j>7 && j>7 && i<2){
        nuevoBoton.style.backgroundColor = "black";
        nuevoBoton.disabled = true
      }

      if (i+j>10 && i>10 && j<5){
        nuevoBoton.style.backgroundColor = "black";
        nuevoBoton.disabled = true
      }

      if (i+j>17 && i>10 && j>7){
        nuevoBoton.style.backgroundColor = "black";
        nuevoBoton.disabled = true
      }

      if (i+j<=5 && j<2 && i>1 && i<5){
        nuevoBoton.style.backgroundColor = "black";
        nuevoBoton.disabled = true
      }

      if (i+j>12 && j>10 && i>1 && i<5){
        nuevoBoton.style.backgroundColor = "black";
        nuevoBoton.disabled = true
      }

      if (i+j>12 && j>10 && i>1 && i<5){
        nuevoBoton.style.backgroundColor = "black";
        nuevoBoton.disabled = true
      }

      if (i+j>9 && j>10 && i>7 && i<11){
        nuevoBoton.style.backgroundColor = "black";
        nuevoBoton.disabled = true
      }

      if (i+j>7 && j<2 && i>7 && i<11){
        nuevoBoton.style.backgroundColor = "black";
        nuevoBoton.disabled = true
      }

    }
    wrap.appendChild(row);
  }
  
}


function showOptions(nuevoBoton) {
  clearTimeout(currentlyEditingTimeout);
  currentlyEditing = nuevoBoton;
  let mousepos = [MouseEvent.clientX, MouseEvent.clientY];
  let selector = document.getElementById('selection');
  selector.style.top = +mousepos[1] + 'px'; /* esto es para que no aparezca encima*/
  selector.style.left = +mousepos[0] + 'px';
  selector.style.display = 'block';
  currentlyEditingTimeout = setTimeout(function(){selector.style.display = 'none';}, 100000);
}

function chooseSelection(sel) {
  let selector = document.getElementById('selection');
  selector.style.display = 'none';
  currentlyEditing.innerHTML = sel.innerHTML;
  currentlyEditing = null;

  
}