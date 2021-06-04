// select the select tag with an id of #dropdown and assign it to a variable dropdown
const dropdown = document.querySelector('#dropdown');

const appendKennel = (breedObj) => {
  // use a certain method to change the keys of the object to an array (so we can iterate over them)
  const breeds = Object.keys(breedObj);

  // for each breed, we'll:
  breeds.forEach((breed) => {
    // create an option tag to represent that breed called breedOption
    const breedOption = document.createElement('option');
    // make the text content of the breed's name-o the option tag
    breedOption.innerText = breed;
    // append the option tag to our select
    dropdown.append(breedOption);
  });
}

// get some data
// write an async function
const fetchBreeds = async () => {
  try {
    // we can declare a url variable to hold our url
    const url = "https://dog.ceo/api/breeds/list/all";
    // assign a response object to an awaited axios.get request to our url,
    const response = await axios.get(url);
    // console.log the data we get back!
    const breedObj = response.data.message;
    appendKennel(breedObj);
  } catch (error) {
    console.error(error);
  }
}

fetchBreeds();