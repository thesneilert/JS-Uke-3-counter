//henter div fra index.html 
//const fordi den skal ikke endres i det hele tatt
const app = document.getElementById("app");

//dette er base nummer
//let fordi nummeret skal endres
let number = 0;

//viser "number"
//() kaller en funksjon med samme navn
showNumber();

//oppdaterer nummer etter trykk
function showNumber(){
    app.innerHTML = number;
}

//+1 knapp (button onclick funksjon)
//() kaller en funksjon med samme navn
function incrementNumber(){
    number = number+1;
    showNumber();
}

//+10 knapp (button onclick funksjon)
//() kaller en funksjon med samme navn
function incrementNumberByTen(){
    number = number+10;
    showNumber();
}

//-1 knapp (button onclick funksjon)
//() kaller en funksjon med samme navn
function decrementNumber(){
    number = number-1;
    showNumber();
}

//-10 knapp (button onclick funksjon)
//() kaller en funksjon med samme navn
function decrementNumberByTen(){
    number = number-10;
    showNumber();
}

//restart knapp (button onclick funksjon)
//() kaller en funksjon med samme navn
function resetNumber(){
    number = 0;
    showNumber();
}