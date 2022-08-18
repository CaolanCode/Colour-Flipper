const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const change_button = document.getElementById('change-button');
const colour_description = document.getElementById('colour-description'); 

// event listener for change button
change_button.addEventListener('click', function (){
  let hex_colour = '#';

  for(let i = 0; i < 6; i++){
    hex_colour = hex_colour + hex[getRandomNumber()];
  }

  document.body.style.backgroundColor = hex_colour;
  colour_description.innerHTML = hex_colour;
})

// generate random number in array length
function getRandomNumber(){
  return Math.floor(Math.random() * hex.length);
}