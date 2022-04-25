// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
console.log("in")

let wallet = document.getElementById("wallet")
let balance = JSON.parse(localStorage.getItem("amount"))
console.log(balance)
wallet.innerText =Number(JSON.parse(localStorage.getItem("amount")) )


async function myFunction()
{

try
{
    let query = document.getElementById("search").value 
//console.log(query)
let res = await fetch(`https://www.omdbapi.com/?apikey=41ab18cf&s=${query}`)

let data = await res.json()
let movies = data.Search
// appnedMovies(movies)
return movies
//console.log(movies)
}
catch(err)
{
    console.log(err)
}

}

let moviesDiv = document.getElementById("movies")
let id;
function appnedMovies(data)
{
    moviesDiv.innerHTML = null
//console.log(data)
    data.map(function(ele)
    {
   //console.log(ele)
   let Div = document.createElement("div")
   let image = document.createElement("img")
   image.src = ele.Poster
   let title = document.createElement("p")
   title.innerText = ele.Title
   let button = document.createElement("button")
   button.innerText = "Book Now"
   button.setAttribute("class","book_now")
button.addEventListener("click",function()
{
    storeMovie(ele)
    window.location.href = "checkout.html"
})

   Div.append(image,title,button)
   document.getElementById("movies").append(Div)
    })
}
function   storeMovie(ele)
{
    let selected = ele
    localStorage.setItem("movie",JSON.stringify(selected))
    
}

async function main()
{
    let data = await myFunction()

    if(data === undefined)
    {
        return false
    }
    
    appnedMovies(data)
    console.log(data)
}
function debounce(func,delay)
{
    if(id)             //for clearing previous id .. like for avengers .. itype a then ave then ave so previous ids should be clear
    {
        clearTimeout(id)
    }

   id = setTimeout(function()
    {
        func()
    },delay)
}
