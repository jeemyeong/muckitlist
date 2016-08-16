var REQUEST_URL = 'http://52.78.99.238/foods.json';
export default function getData(callback) {  
  fetch(REQUEST_URL)
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    callback(data);
  }).catch(function(err) {
    console.log('Error ', err);
  });
}