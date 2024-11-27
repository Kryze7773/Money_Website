//tbh idrk what this shit does but oh well more to learn

// Script to display an alert when the page loads
window.addEventListener('load', () => {
	alert('Welcome to my GitHub Page!');
});

// Function to change the text of the paragraph when clicked
document.addEventListener('DOMContentLoaded', () => {
	const paragraph = document.querySelector('p');

	paragraph.addEventListener('click', () => {
		paragraph.textContent = 'You just clicked the paragraph!';
	});
});
