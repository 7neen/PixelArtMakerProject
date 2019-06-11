// Select color input
// Select size input

const SizePicker = document.querySelector('#sizePicker');
const PixelCanvas = document.querySelector('#pixelCanvas');
const Table = document.querySelector('Table');

// When size is submitted by the user, call makeGrid()
document.getElementById('sizePicker').onsubmit  = function () {
    event.preventDefault();
    let NumOfRow = document.querySelector('#inputHeight').value;
    let NumOfColumns = document.querySelector('#inputWidth').value;
    makeGrid(NumOfRow,NumOfColumns)};


function makeGrid(NumOfRow,NumOfColumns) {

// Your code goes here!
// clear the Grid
  while (Table.rows.length > 0) {
    Table.deleteRow(0);
  }
// drow the Grid.
for (var i = 1; i <= NumOfRow; i++) {
    var RowNum = document.createElement('tr');
    pixelCanvas.appendChild(RowNum);
    for (var j = 1; j <= NumOfColumns; j++) {
      var ColumnNum = document.createElement('td');
      RowNum.appendChild(ColumnNum);
      addClickEventColore(ColumnNum);
         }
       }
    }
// add color to each  pixels in the grid.
function addClickEventColore(CellNum) {
    CellNum.addEventListener('click', function(){
       var PixleColored = document.querySelector('#colorPicker').value;
       this.style.backgroundColor = PixleColored;
     });
    }
