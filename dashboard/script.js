// dashboard stats

const stats = {
views: "60.5k",
likes: 150,
comments: 320,
published: 70
};

document.getElementById("views").textContent = stats.views;
document.getElementById("likes").textContent = stats.likes;
document.getElementById("comments").textContent = stats.comments;
document.getElementById("published").textContent = stats.published;


// search + status filter

const searchInput = document.getElementById("searchInput");
const statusFilter = document.getElementById("statusFilter");
const table = document.querySelector("table");

searchInput.addEventListener("keyup", filterTable);
statusFilter.addEventListener("change", filterTable);

function filterTable(){

const searchValue = searchInput.value.toLowerCase();
const statusValue = statusFilter.value;

const rows = Array.from(table.rows).slice(1);

rows.forEach(row => {

const article = row.cells[0].textContent.toLowerCase();
const status = row.cells[3].textContent;

let searchMatch = article.includes(searchValue);
let statusMatch = statusValue==="all" || status===statusValue;

if(searchMatch && statusMatch){
row.style.display="";
}else{
row.style.display="none";
}

});

}


// sorting

function sortTable(column,order){

const rows = Array.from(table.rows).slice(1);

rows.sort((a,b)=>{

let valA = a.cells[column].textContent;
let valB = b.cells[column].textContent;

if(column===1 || column===2){
valA = parseFloat(valA);
valB = parseFloat(valB);
}

if(order==="asc"){
return valA>valB ? 1 : -1;
}else{
return valA<valB ? 1 : -1;
}

});

rows.forEach(row => table.appendChild(row));

}