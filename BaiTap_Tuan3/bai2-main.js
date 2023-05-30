const notes = require('./bai2-notes.js');


function showMenu() {

	console.log('1. Add Note');

	console.log('2. Show Notes');

	console.log('3. Exit');

	console.log('------------------');

	inquirer

	.prompt([

	{

		type: 'input',

		name: 'option',

		message: 'Enter an option:'

	}

	])

	.then(answers => {

		const option = parseInt(answers.option);

		switch (option) {

		case 1:

			notes.addNote();

			showMenu();

			break;

		case 2:

			notes.showNotes();

			showMenu();

			break;

		case 3:

			console.log('Goodbye!');

			break;

		default:

			console.log('Invalid option. Please try again.');

			showMenu();

			break;

		}

	});

}

showMenu();