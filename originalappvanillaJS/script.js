
// Retrieves list of dogs from API and displays to user in a dropdown list

//const breedListUrl = https://api.thedogapi.com/v1/breeds,
const breedList = document.getElementById("breed-list")


window.addEventListener("load", )


function getBreedList(){
  return fetch(breedListUrl)
}

fetch('http://example.com/movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));







































// Object containing exising oodle names. App checks against this list and will use 

const knownOodles = {
    Labrador: 'Labradoodle',
    'Cavalier King Charles Spaniel': ['Cavoodle, Cavapoo'],
    'Cocker Spaniel': ['Spoodle', 'Cockapoo'],
    Maltese: ['Moodle', 'Maltipoo'],
    Schnauzer: 'Schnoodle',
    'Golden Retriever': ['Groodle', 'Goldendoodle'],
    'Old English Sheep Dog': 'Sheepadoodle',
    'Yorkshire Terrier': 'Yorkiepoo',
    'Shih Tzu': ['Shoodle', 'Shihpoo'],
    Chihuahua: 'Poochi',
    'Tibetan Spaniel': 'Tiboodle',
    'Bernese Mountain Dog': 'Bernedoodle',
    'Border Collie': 'Bordoodle',
    'Australian Shephard': 'Aussiedoodle',
    'English Springer Spaniel': ['Springerdoodle', 'Sproodle', 'Springerpoo'],
    'Soft-Coated Wheaten Terrier': 'Whoodle',
    'West Highland White Terrier': 'Westiepoo',
    'Weimaraner': 'Weimardoodle',
    'Pomeranian': 'Pomapoo',
    'Havanese': ['Havapoo', 'Havadoodle', 'Poovanese'],
    'Bichon Frise': ['Poochon', 'Bichpoo', 'Bichoodle'],
    Pekingese: 'Peekapoo',
  };