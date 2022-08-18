const simple_colours = ['red', 'purple', 'pink', 'black', 'yellow', 'blue', 'green'];
const change_button = document.getElementById('change-button');
const colour_description = document.getElementById('colour-description'); 

// event listener for change button
change_button.addEventListener('click', function (){
  const random_number = getRandomNumber();
  document.body.style.backgroundColor = simple_colours[random_number];
  colour_description.innerHTML = simple_colours[random_number];
})

// generate random number in array length
function getRandomNumber(){
  return Math.floor(Math.random() * simple_colours.length);
}