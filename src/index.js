// In this lab, you will write JavaScript to get images of dogs and a list of dog breeds from API's and render them to the DOM. You will also add some click behavior to the list elements and implement a filter.
document.addEventListener('DOMContentLoaded', function() {
    initialize()
    // fetchImgUrls();

  });

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
// Fetch 1
function fetchImgUrls(){
    fetch(imgUrl)
    .then(res => res.json())
    .then(data => insertImages(data.message))
}

function insertImages(dogUrls){
    let dogImageContainer = document.getElementById('dog-image-container')
    dogUrls.map(function(url){
        let img = document.createElement('img') // create new img node
        img.src = url;
        dogImageContainer.appendChild(img)
    })
}
//Fetch 2
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 

function initialize(){
    let dropdown = document.getElementById('breed-dropdown');// grab element dropdown
    if(dropdown.value === 'a'){
        dropdown.addEventListener('click', fetchBreeds);
    }
    dropdown.addEventListener('change', fetchBreeds);
}

function fetchBreeds(){
    fetch(breedUrl)
    .then(res => res.json())
    .then(data => insertBreeds(Object.keys(data.message)))
}

function insertBreeds(breeds){
    let dropdown = document.getElementById('breed-dropdown');// grab element dropdown
    let ul = document.getElementById('dog-breeds')
    // Remove all children elements from the ul
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    removeAllChildNodes(ul);
    // capture option from dropdown
    let selectedLetter = dropdown.value; // value user picked from dropdown
    const filteredBreeds = breeds.filter(function(breed){
        return breed.substring(0,1) === selectedLetter;
    })
    filteredBreeds.map(function(breed){
        let li = document.createElement('li') // create new list node
        li.innerHTML = breed;
        li.setAttribute('style',"color:#000")
        // li.addEventListener('mouseover', changeColor(li))
        ul.appendChild(li)
    })
}







// document.addEventListener('DOMContentLoaded', () => {
//     console.log('%c HI', 'color: firebrick')
//     // Store the URL in  Variable to pass by name into the fetch
//     const imgUrl = "https://dog.ceo/api/breeds/image/random/all";

//     //Create a variable to store dogData
//     let dogData;

//     // Fetch data so that we can have access to it
//     fetch(imgUrl)
//     .then(res => res.json())
//     .then(data => dogData = data)
//     console.log(dogData)

//     console.log(dogData)

//     // Capture the DOM elements that will be affected
//     const dropdown = document.getElementById('breed-dropdown'); // captured dropdown node
//     const ul = document.getElementById('dog-breeds') // ul node captured 
//     let selectedLetter = '';

//     const dropdownHandler = () => {
//         //#1 capture selected option from the dropdown
//         selectedLetter = dropdown.value; // Stores the selected letter into the designated variable.
//         console.log(selectedLetter)
//         //#2 filter through the data using SelectedLetter as the match.
//         let dogArr = dogData.message;
//         console.log(dogArr)
//         const filteredDogArr = dogArr.filter((url) => {
//             const splitUrl = url.split('/');
//             console.log(splitUrl)
//             console.log(splitUrl[4].substring(0,1))
//             return splitUrl[4].substring(0,1).toLowerCase() === selectedLetter;
//         })
//         console.log(dogArr)
//         console.log(filteredDogArr)
//         //#3Declare a funcion that creates image elements for every url and sets the src property to every url passed.
//         let createImgElements = () =>{
//             const imgTags = filteredDogArr.map((item) => {
//                 let img = document.createElement('img')
//                 img.setAttribute('src', item)
//                 return img; 
//             })
//             return imgTags;
//         }
//         //#4 append the img elements to the previously captured ul node
//         function appendImgElements(){
//             for(let item of createImgElements()){
//                 ul.appendChild(item);
//             }
//         }

//         // function call to append img items to ul
//         appendImgElements;
//     }


//     //Dropdown event listener

//     dropdown.addEventListener('click', dropdownHandler);

    
// })