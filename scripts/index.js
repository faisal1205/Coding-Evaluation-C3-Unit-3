// Store the wallet amount to your local storage with key "amount"
console.log("hi")

// var walletBalance = JSON.parse(localStorage.getItem("amount")) ||[]
function addAmount()
{
    let amount  = document.getElementById("amount").value
// moneyArr.push(amount)
    console.log(amount)
    let display = document.getElementById("wallet")

  var x  = Number(amount) + Number(JSON.parse(localStorage.getItem("amount")) )

  display.innerText= x
    // walletBalance.push(amount)

    localStorage.setItem("amount",JSON.stringify( x))

}
