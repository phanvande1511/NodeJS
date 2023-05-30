const inquirer = require('inquirer');

let notes = [];

function addNote() {

	inquirer

	.prompt([

	{

		type: 'input',

		name: 'note',

		message: 'Enter your note:'

	}

	])

	.then(answers => {

		const note = answers.note;

		notes.push(note);

		console.log('Note added successfully!');

		showNotes();

	});

}

function showNotes() {

	console.log('Notes:');

	notes.forEach((note, index) => {

		console.log(`${index + 1}. ${note}`);

	});

}

module.exports = {

	addNote,

	showNotes

};