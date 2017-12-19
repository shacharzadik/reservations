// Here we have a reservation system where people can claim their reservations when they arrive. Finish the claimReservation function. It should:

//If the reservation exists and is unclaimed, welcome the user (use alert).
//If the reservation exists and is already claimed, inform the user about the situation (use alert).
//If there is no reservation, tell the user there is nothing under their name (user alert).



var reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

var name = prompt('Please enter the name for your reservation');

console.log(reservations.hasOwnProperty(name));

console.log(name in reservations); //true or false if the user name is in the array

 var claimReservation = function() {
 
 if (name in reservations) { 
  if (
    reservations.hasOwnProperty(name) &&
    reservations[name].claimed === false
  ) {
    alert('Welcome');
  } else if (
    reservations.hasOwnProperty(name) &&
    reservations[name].claimed === true
  ) {
    alert('Somebody used your reservation!');
  } 
 
   
 } else {
   alert("You don't have a reservation, sorry!");
   }  
 } 

claimReservation();

//INDIVIDUAL EXERCISE 1

//It so happens that our restaurant has a bunch of open tables. 
//Therefore, if someone doesn't have a reservation, 
//add it to the reservations object and set "claimed" to true for that person. Alert them of their new reservation.


var reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

var name = prompt('Please enter the name for your reservation');

console.log(reservations.hasOwnProperty(name));

console.log(name in reservations); //true or false if the user name is in the array

 var claimReservation = function() {
 
 if (name in reservations) { 
  if (
    reservations.hasOwnProperty(name) &&
    reservations[name].claimed === false
  ) {
    alert('Welcome');
  } else if (
    reservations.hasOwnProperty(name) &&
    reservations[name].claimed === true
  ) {
    alert('Somebody used your reservation!');
  } 
 
   
 } else {

    reservations[name] = { claimed: true}; // adding a new object to reservations and then an object inside of it for claimed:true
    console.log(reservations);
    alert("You don't have a reservation, but we have a free table!");
 }  
 } 

claimReservation();


//INDIVIDUAL EXERCISE 2

//As of now, 'Ted' and 'ted' are two different names in our system. Change your code so that 'ted' and 'Ted' or even 'TeD' is all the same. Use Google and Stack Overflow to help with this.

var reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

var name = prompt('Please enter the name for your reservation');

console.log(reservations.hasOwnProperty(name));

console.log(name in reservations); //true or false if the user name is in the array

name = name.toLowerCase();
name = name.charAt(0).toUpperCase() + name.slice(1);





console.log(reservations.Bob.toLowerCase);

  var claimReservation = function() {
  
  name = name.toLowerCase();
  name = name.charAt(0).toUpperCase() + name.slice(1);
 if (name in reservations) { 
  if (
    reservations.hasOwnProperty(name) &&
    reservations[name].claimed === false
  ) {
    alert('Welcome');
  } else if (
    reservations.hasOwnProperty(name) &&
    reservations[name].claimed === true
  ) {
    alert('Somebody used your reservation!');
  } 
 
   
 } else {

    reservations[name] = { claimed: true}; // adding a new object to reservations and then an object inside of it for claimed:true
    console.log(reservations);
    alert("You don't have a reservation, but we have a free table!");
 }  
 } 

claimReservation();