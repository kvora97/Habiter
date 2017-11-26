/*
function buttonClicked() {
	console.log('Button Clicked');
}
*/

// user clicked inside add button
// if there is any text inside input field, make a new to do item
document.getElementById('add').addEventListener('click', function() {

	var value = document.getElementById('item').value;

	if (value) {
		addItemToDo(value);
	}

});


function addItemToDo (text) {
	var item = document.createElement('ul');
	item.innerText = text;

	var buttons = document.createElement('div');
	buttons.classList.add('buttons');

	var remove = document.createElement('button');
	remove.classList.add('remove');

	var complete = document.createElement('button');
	complete.classList.add('complete');
}