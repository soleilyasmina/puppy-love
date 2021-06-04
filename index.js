// select the select tag with an id of #dropdown and assign it to a variable dropdown
const dropdown = document.querySelector('#dropdown');

// get some data
// write an async function
const fetchBreeds = async () => {
  // we can declare a url variable to hold our url
  const url = "https://dog.ceo/api/breeds/list/all";
  // assign a response object to an awaited axios.get request to our url,
  const response = await axios.get(url);
  // console.log the data we get back!
  console.log(response.data);
}

fetchBreeds();