document.addEventListener('DOMContentLoaded', function() {


// challenge 1

function fetchDogs() {
  // To pass the tests, don't forget to return your fetch!
  fetch(`https://dog.ceo/api/breeds/image/random/4`)
  .then(res => res.json())
  .then(dogs => displayDogs(dogs))  
}

function displayDogs(dogs) {
    const messages = Object.values(dogs["message"]);
    for(let dog in messages) { 
      const image = document.createElement('img')
      image.src  = messages[dog]
      document.querySelector('#dog-image-container').appendChild(image)
    }
}


// challenge 2 & 3

function fetchBreeds(){
  fetch(`https://dog.ceo/api/breeds/list/all`)
  .then(res => res.json())
  .then(breeds => addBreeds(breeds))
}

function addBreeds(breeds){

  const breedList = Object.keys(breeds["message"]);

  const ul = document.getElementById('dog-breeds')
  const listItems = ul.getElementsByTagName("li") // returns html collection of li's

  for(let dog in breedList) { 
    
    // create and render li's with breed info
    let li = document.createElement('li')
    li.textContent = breedList[dog]
    // console.log(li);
    li.style.color = 'black'
    document.querySelector('#dog-breeds').appendChild(li)
   
    // add interactivity to li's
    li.addEventListener('click', function(){
      if(li.style.color === 'black'){
          li.style.color = 'red'
        } else 
        {li.style.color = 'black'
        }
  })

  }
}


  fetchDogs();
  fetchBreeds();



});

