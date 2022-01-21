// accessing the favData 
let favData = document.getElementById("favData");

// method to delete data from the favourite page 
let deleteElement = (itemName)=>{

	// removing the item from the html page
	if(document.getElementById(itemName))
	document.getElementById(itemName).remove();

	// removing the movie from local storage 
	localStorage.removeItem(itemName);
	
	// checking if the list is empty and showing the empty list message
	if(!checkFavEmpty())
	showNoData();
}

// method to add the movie items to the favourite page 
let addFavCard = (itemName) => 
{ 
	// checking if the movie name start with movie or not
	if(itemName== undefined || !itemName.startsWith("movie") ) return;

	// fatching the movie from the localstorage 
	let urlTxt = localStorage.getItem(itemName);

	// creating div element to add movie poster and remove button
	let mainDiv = document.createElement('div');
	mainDiv.style = "display:inline-block; width:18vw; margin:2%; margin-top:5%";
	
	mainDiv.id =itemName;
	
	let innerFirstDiv = document.createElement('div');
	innerFirstDiv.style = "margin-left:33%";
	
	let innerSecondDiv = document.createElement('div');
	innerSecondDiv.style = "width:100%";
	
	// creating delete button to delete movie from the favourite page  
	let buttonEle = document.createElement('button');
	buttonEle.class = "btn btn-dark";
	buttonEle.id = "movieRm" + itemName;
	buttonEle.setAttribute("count", itemName);

	// adding onclick event on the button
	buttonEle.onclick = function () {
        deleteElement(itemName);
    }

	buttonEle.innerHTML = "Remove";
	
	// creating img tag for the movie poster and adding img source from the local storage 
	let imgEle = document.createElement('img');
	imgEle.src = urlTxt;
	
	mainDiv.appendChild(innerFirstDiv);
	mainDiv.appendChild(innerSecondDiv);
	innerFirstDiv.appendChild(buttonEle);
	innerSecondDiv.appendChild(imgEle);
	
	favData.appendChild(mainDiv);
}

// checking if movies are available in the localStorage
let checkFavEmpty = () => Object.keys(localStorage).some(data => data.startsWith('movie'));

// method to show not available message when no movie is available to show 
let showNoData = () => {
	let mainDiv = document.createElement('h1');
	mainDiv.style = "text-align:center;";
	
	mainDiv.innerHTML = "Opps!!! There's nothing to show ";
	favData.appendChild(mainDiv);
}

// checking if movie is available in the local storage or not 
if(!checkFavEmpty()){
	showNoData();
}

// accessing all the keys items from the local storage and send it to addFavCard method to show movie on the page  
if(checkFavEmpty()){
	let keys = Object.keys(localStorage);
	keys.forEach(addFavCard);
}

