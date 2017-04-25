let button = document.querySelector("button");
let click_counter = 0;

button.addEventListener('click', function(event) {
	click_counter++;
	console.log("Button clicked " + click_counter + " times");
});