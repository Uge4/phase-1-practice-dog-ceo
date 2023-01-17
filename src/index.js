function fetchDogs() {
  // To pass the tests, don't forget to return your fetch!
  fetch(`https://dog.ceo/api/breeds/image/random/4`)
  .then(res => res.json())
  .then(dogs => displayDogs(dogs))
  
}

function displayDogs(dogs) {
  
    const container = document.querySelector('#dog-image-container')

    const messages = Object.values(dogs["message"]);
    

    for(let dog in messages) { 
      
      // const result = messages[dog];
      const image = document.createElement('img')
      image.src  = messages[dog]
      document.querySelector('#dog-image-container').appendChild(image)
    
    }
}

document.addEventListener('DOMContentLoaded', function() {
  fetchDogs();
});

