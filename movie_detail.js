// getting the imdbID of the movie which we set in the index.js page 
const movieId = localStorage.getItem("id");

// accessing the add to favourite button
const favBtn = document.getElementById("favouriteBtn");

// accessing the content box
const contentBox = document.getElementById("result2");
var result = "";
var poster;

// creating the xhr object and sending the requesting to the api
const xhr = new XMLHttpRequest();
xhr.open("GET" , "https://www.omdbapi.com/?i=" + movieId + "&apikey=eb9227bb");

xhr.onload = function(){

if(this.status === 200){

    // checking the response status if it is okay or not then send the response data to the data variable 
    let data = JSON.parse(this.responseText);
    poster = data.Poster;

    // appending the data to the result variable 
    result = ` 
    <img class="rounded mx-auto d-block" src="${data.Poster}">
    <div class="textCenter">
    <h1 style="color:black">  ${data.Title} </h1>
    <p><strong>IMDB : </strong>${data.imdbRating}</p> 
    <p> <strong>Released : </strong>  ${data.Released}</p>
    <p><strong>Language : </strong>${data.Language}</p> 
    <p><strong>Duration : </strong>${data.Runtime}</p>
    <p class="text-justify">  ${data.Plot} </p>
    </div>
    `
    // appending the data to the result box 
    contentBox.innerHTML = result;

} else{
    console.log("some error occured");
}    
}

// sending the request 
xhr.send();

favBtn.addEventListener("click" , addToFav);

// adding the movie to the local storage to show it to the favourite page 
function addToFav(){

    let count = localStorage.length+1;
    localStorage.setItem('movie'+count , poster);
}

// ---------------------------------------- j query code ---------------------------------------------//

// $(document).ready(function () {

//     var movieId = localStorage.getItem("movie");

//     var result = "";
//     var poster;

//     $.ajax({
//         method: 'get',
//         url: "http://www.omdbapi.com/?i=" + movieId + "&apikey=eb9227bb",
//         success: function (data) {

//             poster = data.Poster;

//             result = ` 
//                    <img style="width: 15vw ; height:20vw;" class="rounded mx-auto d-block" src="${data.Poster}">
//                    <div style="text-align:center">
//                         <h1>  ${data.Title} </h1>
//                         <p><strong>IMDB : </strong>${data.imdbRating}</p> 
//                         <p> <strong>Released : </strong>  ${data.Released}</p>
//                         <p><strong>Language : </strong>${data.Language}</p> 
//                         <p><strong>Duration : </strong>${data.Runtime}</p>
//                         <p class="text-justify">  ${data.Plot} </p>
//                    </div>
//                 `
//             $("#result").html(result);
//         }
//     })

//     $("#favouriteBtn").click(function () {

//         if (localStorage.getItem('data') == null) {
//             localStorage.setItem('data', '[]');
//         }

//         var old_data = JSON.parse(localStorage.getItem('data'));

//         old_data.push(poster);

//         localStorage.setItem('data', JSON.stringify(old_data));
//     });
// })

