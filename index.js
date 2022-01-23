// fatching the button to get the movie details 

var fatchBtn1 = document.getElementById("fatchBtn");

fatchBtn1.onclick = function () {
    fatchMovieDetails();
}

// creating a method to send api request and get the data(response)  

function fatchMovieDetails(){

    // geting the movie entered 
    const movie =  document.querySelector('#movie').value;

    var result="";

    const xhr = new XMLHttpRequest();

    // sending get request to the omdb api with the movie entered 
    xhr.open("GET" , "https://www.omdbapi.com/?t="+movie+"&apikey=eb9227bb");
    
    xhr.onload = function(){

    if(this.status === 200){

    // get the data to the data variable  
    let data = JSON.parse(this.responseText);

    // setting the imdbID value to the local storage to get the movie details on the movie_details page with the key name id
    localStorage.setItem('id', data.imdbID);

    // appending all the required data to the result variable to show on the main page 
    result = `  
        <a href="movie_detail.html">
            <img src="${data.Poster}">
        </a>  
        
        <h1>  ${data.Title} </h1>
        <p class="text-justify">  ${data.Plot} </p>
    
    `
    // accessing the result1 div to append the result on it 
    var contentBox = document.getElementById("result1");

    // appending the result to the contentbox
    contentBox.innerHTML = result;

    } else{
    console.log("some error occured");
    }
        
    }

    // sending the request 
    xhr.send();
} 

// -----------------------------------------------------------------

// $(document).ready(function () {

//     $("#movieForm").submit(function (event) {
//         event.preventDefault();

//         var movie = $('#movie').val();

//         var result = ""

//         $.ajax({
//             method: 'get',
//             url: "http://www.omdbapi.com/?t=" + movie + "&apikey=eb9227bb",
//             success: function (data) {

//                 localStorage.setItem('movie', data.imdbID);

//                 result = ` 
                
//                     <a href="movie_detail.html" style="margin-left:10vw">
//                         <img src="${data.Poster}">
//                     </a>  
                  
//                   <h1 style="text-align:center">  ${data.Title} </h1>
//                   <p class="text-justify">  ${data.Plot} </p>
                
//                 `
//                 $("#result").html(result);
//             }
//         })
//     })
// })

