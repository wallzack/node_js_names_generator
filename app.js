const fs = require('fs');

const genders = ['F', 'M'];

const femaleNames = [
    'Kasia',
    'Stasia',
    'Basia',
    'Wiesia',
    'Krysia',
    'Zdzisia',
    'Asia',
    'Danusia',
    'Ewusia',
];

const maleNames = [
    'Krzysio',
    'Zdzisio',
    'Wiesio',
    'Stasio',
    'Tomcio',
    'Robcio',
    'Jaśko',
    'Ukanio',
    'Waldzio',
];

const lastNames = [
    'Kowal',
    'Nowak',
    'Mickiew',
    'Sienkiew',
    'Iksinek',
    'Igrekow',
    'Lewand',
    'Biedrow',
    'Latow',
    'Bońkow',
    'Szczęsnow',
];

const randChoice = arr => arr[Math.floor(Math.random() * arr.length)];

const people = [];

for (let i = 0; i <= 20; i++) {
	let person = {};

	person.gender = randChoice(genders);

	let getName = () => {
		if (person.gender === 'M') {
			return randChoice(maleNames);
		} else {
			return randChoice(femaleNames);
		}
	};

	person.name = getName();

	person.surname = lastNames[Math.floor(Math.random() * lastNames.length)];

	person.age = Math.floor(Math.random() * (50 - 18 + 1)) + 18;

	people.push(person);
}

const data = JSON.stringify(people);

fs.writeFile('people.json', data, err => {
	if (err) throw err;
	console.log('The file has been saved!');
});

console.log(data);