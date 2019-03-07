//
function BasicAddition(num1, num2) {
    return num1 + num2;
}

var result = BasicAddition(3, 4);
console.log(result);

function BasicSustraction(num1, num2) {
    return num1 - num2;
}
var result = BasicSustraction(6, 4);
console.log(result);

//
function GoodMorning() {
    console.log('Good morning! <br> ');
    GoodNight();
}

function GoodNight() {
    console.log('Good night! <br>');
    GoodMorning();
}

function Start() {
    GoodMorning();

}
Start();

//
var num1 = 2;
var num2 = 3;
if (num1 != num2) {
    console.log('some message');
}

//
function ChoppingBanana() {
    console.log('Chopping banana...');
}

function ChoppingPineapple() {
    console.log('Chopping pineapple...');
}

function ChoppingCherry() {
    console.log('Chopping cherry...');
}

if ('banana' === 'pineapple') {
    ChoppingBanana();
} else if ('banana' === 'cherry') {
    ChoppingCherry();
} else {
    ChoppingPineapple();
}

//
function VendingPendingMachine(pendingTime) {
    switch (pendingTime) {
        case 1:
            //case for 1
            PendingMessage(pendingTime);
            break;

        case 2:
            //case for 2
            PendingMessage(pendingTime);
            break;

        default:
            PendingMessage(pendingTime);
            break;
    }
}

function PwndingMessage(time) {
    alert('some message here' + time);
}

//
var text = 'something written here'

function WriteLineMachine(lineText) {

    for (let i = 0; i < 10; i++) {
        Write(lineText);
    }

}

function Write(lineText) {
    console.log(lineText);
}

function StartMachine(lineText) {
    WriteLineMachine(lineText);
}

StartMachine(text);

//
var names = ['Tony' , 'Bob', 'Ana']; 
console.log(names);

//