// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
//console.log("in")

let selected = JSON.parse(localStorage.getItem("movie"))
//console.log(selected.Title)

var Div=document.createElement("div")
let title = document.createElement("p")
title.innerText = selected.Title
let image = document.createElement("img")
image.src = selected.Poster
Div.append(title,image)
document.getElementById("movie").append(Div)

let amount = JSON.parse(localStorage.getItem("amount"))
let wallet =document.getElementById("wallet")
wallet.innerText = amount


function bookingFunction()
{
    //console.log("in")
    let seats = document.getElementById("number_of_seats").value 
    console.log(seats)

    if(amount >= (100*seats))
    {
         alert("Booking successful!")
         var balance = amount-(100*seats)
         localStorage.setItem("amount",JSON.stringify(balance))
      location.reload()
    }
    else{
        alert("Insufficient Balance!")
    }
}
