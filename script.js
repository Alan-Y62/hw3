let numRows = 0;
let numCols = 0;
let colorSelected; 

function singleColor(box) {
    box.style.background = colorSelected;
}

//Add a row
function addR() {
    //alert("Clicked Add Row")
    let table = document.querySelector('table')
    let newRow = document.createElement('tr')
    let newBox = document.createElement('td')
    if(numRows !== 0) {
        for(let i = 0; i< numCols; i++) {
            let newBox = document.createElement('td')
            newBox.setAttribute('onclick',"singleColor(this)")
            newRow.appendChild(newBox)
        }
        table.appendChild(newRow)
        numRows++;
    }
    else {
        newBox.setAttribute('onclick',"singleColor(this)")
        newRow.appendChild(newBox)
        table.appendChild(newRow)
        numCols++;
        numRows++;
    }
}
//Add a column
function addC() {
    //alert("Clicked Add Col")
    let table = document.querySelector('table')
    let newCol = document.createElement('tr')
    let newBox = document.createElement('td')
    if(numCols !== 0) {
        tableRow = document.querySelectorAll('tr')
        for (i = 0; i < numRows; i++) {
            let newBox = document.createElement('td')
            newBox.setAttribute('onclick',"singleColor(this)")
            tableRow[i].appendChild(newBox)
        }
        numCols++;
    }
    else {
        newBox.setAttribute('onclick',"singleColor(this)")
        newCol.appendChild(newBox)
        table.appendChild(newCol)
        numCols++;
        numRows++;
    }
}

//Remove a row
function removeR() {
    //alert("Clicked Remove Row")
    let table = document.querySelector('table')
    let lastChild = table.lastElementChild;
    table.removeChild(lastChild)
}
//Remove a column
function removeC() {
    //alert("Clicked Remove Col")
    let allRows = document.querySelectorAll('tr')
    for(let i = 0; i < allRows.length; i++) {
        let lastChild = allRows[i].lastElementChild
        allRows[i].removeChild(lastChild)
    }

}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    //alert("Clicked Fill All")
    let allBox = document.querySelectorAll('td');
    for(let i = 0; i < allBox.length; i++) {
        allBox[i].style.background = colorSelected;
    }
}

function clearAll(){
    //alert("Clicked Clear All")
    let allBox = document.querySelectorAll('td');
    for(let i = 0; i < allBox.length; i++) {
        allBox[i].style.background = 'white';
    }
}

function fillU(){
    //alert("Clicked Fill All Uncolored")
    let allBox = document.querySelectorAll('td');
    for(let i = 0; i < allBox.length; i++) {
        let color = allBox[i].style.background;
        if(color === "" || color === 'white') {
            allBox[i].style.background = colorSelected;
        }
    }
}
