//exercise 1
var colors = ['red', 'blue', 'green'];

for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

colors.forEach(function(color){
    console.log(color);
});

//exercise2

//create an array of numbers
var numbers = [1,2,3,4,5];
//create a variable to hold the sum
var sum = 0;

function adder (number) {
    sum += number;
}
//loop over the array, incrementing the sum
//numbers.forEach(function(number){
    sum+= number;
    numbers.forEach(adder);
//});
//print the sum var
sum;

//exercise 3
var numbers = [1,2,3];
for (var i = 0; i < numbers.length; i++) {
    doubledNumbers.push (numbers[i] * 2);
}
var doubled = numbers.map(function(number){
return number * 2
});
doubled;
doubledNumbers;

//exercise 4

var cars = [
    {model: 'model', price:'cheap'},
    {model: 'model1', price: 'expensive'}
];
var prices = cars.map(function(){
return cars.price
});
prices;

//exercise 5
var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
  ];
  //var heights = [];
  
  var heights = images.map(function(image){
   return image.height
  }) 

//exercise 6
var trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
  ];
  
  var speeds = trips.map(function(trip){
      return trip.distance / trip.time
  });