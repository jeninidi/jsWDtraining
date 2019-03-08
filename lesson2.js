var john = 80;
var nick = 45;
var lowLimit = 51;

if (john > lowLimit && nick > lowLimit) {
    console.log('both students passed');
} else if (john < lowLimit || nick > lowLimit) {
    console.log('one student passed');
} else {
    
    if (nick > lowLimit) {
        console.log('nick passed');
    } else {
        console.log('john passed');
    }
} 

//
function passExam(name, score) {
    var passUni = 71;
    var passColl = 51;

    if (score >= passUni) {
        console.log(name + 'has been enroled in Uni with' + score + 'points');
    } else if (score >= passColl) {
        console.log(name + '  ' + ' has been enrolled in college with  ' + score + ' ' + ' points ')
    } else{
        console.log('student has failed')
    }
}

function calcScore(quizScore, essayScore) {
    var score = quizScore + essayScore;
    return score;
}

passExam('Anna', calcScore(30,40));

//
add(5, 10);
function add(a,b) {
    console.log(a + b);
}

var sum = function (a, b) {
    console.log(a + b);
}
sum(10, 15);

//array functions

var colors = ['white', 'black', 'green']; //create an array
colors[1] = 'green'; //change element with id 1 to green
colors.push('blue'); //add an element in the end of the array
colors.pop(); //remove item from the end of the array
colors.shift(); //remove item from beginning of the array
colors.unshift('purple') //add intem in the beginning in the array
console.log(colors);
console.log(colors.indexOf('red')); //show the array id of element named red
                                    //if element red doesn't exist, console diesplays -1 as a result
 if (colors.indexOf('blue') === -1) {
     colors.push('blue');
     console.log(colors);
     }

//objects 1
var person = new Object();
var job = 'profession';

person.firstName = 'Jeni';
person ['lastName'] = 'Dmitrova';
person[job] = 'instructor';

console.log(person);
console.log(person['lastName']);
console.log(person.firstName);

//objects2
var person = new Object();
person.firstName = 'Jeni';
person.lastName = 'Dimitrova';

person.son = new Object();
person.son.name = 'John';
person.son.age = '18'

console.log(person);

//objects3 literal notation
var person = {
    firstName: 'Jeni',
    lastName: 'Dimitrova', 
    age: 22,
    daughter: {
        name: 'Anna',
        age: 5
    },
    myFunc: function (daughterName, fatherName, daughterAge) {
        console.log( daughterName + ' is a daughter of ' + fatherName + ' and she is ' + daughterAge + ' years old ');
    }

}
console.log(person);
console.log(person.daughter.name);

person.myFunc(person.daughter.name, person.firstName, 
person.daughter.age);

//loops
var people = ['john', 'marry', 'nick', 'bob', 'ana'];
    for (let index = 0; index < people.length; index++) {
        if (people[index] === 'nick') {
            console.log(people[index] + ' is my brother');
            continue;
        }
    console.log(people[index]);
}

//loops2
var i = 0;

while (i <= 10) {
    i++;
    console.log(i); //0 is first but by going through the loop it adds 1 to 0, that's why first displayed element will be 1
}

var colors = ['red' , 'orange', 'blue', 'purple', 'lavender'];
var i = 0;
while (i <= colors.length) {
    
    console.log(colors[i]);
    i++;
}

do {
    console.log(colors[i]);
    i++;
} while (
    i <= colors.length
);

//date object
var date = new Date ();
console.log(date);

var year = date.getFullYear();
console.log(year);

var month = date.getMonth();
console.log(month);

var x = date.setFullYear(1996);
        date.setMonth(9);
        date.setDate(22);
console.log(x);

