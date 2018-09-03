//defining function addRow
function addRow(){
var table = document.querySelector("#dynamic-table"); //calling table from html
var row = table.insertRow(0);  //adding row
var cell1 = row.insertCell(0); //adding cells to row
var cell2 = row.insertCell(1);
cell1.innerHTML = " CELL1";  //naming the cell
cell2.innerHTML = " CELL2";
}
var button = document.querySelector("input");// calling input type button
button.addEventListener('click',  addRow);  // adding event listener to the button 