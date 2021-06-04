//=============================================
// SELECTED ELEMENTS
//=============================================
// select the select tag with an id of #dropdown and assign it to a variable dropdown
const dropdown = document.querySelector('#dropdown');

//=============================================
// FUNCTIONS THAT APPEND DATA / FETCH DATA
//=============================================
// make a function
const goFetchAndAppendPuppyPic = async (event) => {
  // select the main element and assign it to a variable imageContainer
  const imageContainer = document.querySelector('#image-container');
  // clear the main element (i.e. image-container) of any child elements (hint: use the country lab as an example)
  imageContainer.childNodes.forEach((childNode) => {
    childNode.remove();
  });

  // get the value of the dropdown (i.e. the text inside it)
  // this could also be: const puppyBreed = event.target.value;
  const puppyBreed = dropdown.value;
  // we'll interpolate the breed we're looking for into our url
  const url = `https://dog.ceo/api/breed/${puppyBreed}/images/random`;
  // we'll then make an API call to our newly created endpoint, and save the variable in a response object
  const response = await axios.get(url);

  // create an img element and assign it to puppyPic
  const puppyPic = document.createElement('img');
  // set the img element's src to be the url from our response
  puppyPic.src = response.data.message;
  // append the img to our image-container
  imageContainer.append(puppyPic);
}

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

//=============================================
// EVENT LISTENERS/FUNCTIONS CALLED ON PAGELOAD
//=============================================
dropdown.addEventListener('change', goFetchAndAppendPuppyPic);

fetchBreeds();