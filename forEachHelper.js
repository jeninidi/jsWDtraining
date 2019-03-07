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

//exercise 7
var products = [
{name: 'cucumber', type: 'vegetable'},
{name: 'banana', type: 'fruit'},
{name: 'celery', type: 'vegetable'},
{name: 'orange', type: 'fruit'}
];

var filteredProducts = [];

for (let i = 0; i < products.length; i++) {
    if (products[i].type === 'fruit') {
        filteredProducts.push(products[i]);  
    }    
}

filteredProducts;

products.filter (function(product){
return product.type === 'fruit';
});

//exercise 8
var products = [
    {name: 'cucumber', type: 'vegetable' ,quantity: 0, price: 1},
    {name: 'banana', type: 'fruit' ,quantity: 10, price: 15},
    {name: 'celery', type: 'vegetable' ,quantity: 30, price: 13},
    {name: 'orange', type: 'fruit' ,quantity: 3, price: 5}
    ];

    products.filter (function(product){
        return product.type === 'vegetable'
        && product.quantity > 0
        && product.price < 10
    });  

//exercise 9
 var post = {id:4 , title: 'new post'};
 var comments = [
     {postId: 4, content: 'awesome post'},
     {postId: 3, content: 'it was okay'},
     {postId: 2, content: 'neat'},
 ];

 function commentsForPost(post, comments) {
     return comments.filter(function (comment){
return comment.postId === post.id
     });
 }

 commentsForPost(post,comments);

 //exercise 10 
 var users = [
     {name: 'Jill'},
     {name: 'Alex'},
     {name: 'Bill'},
 ];
 var user;

 for (let index = 0; index < users.length; index++) {
     if (users[index].name === 'Alex'){
         user = users[index];
         break;
     }
 } 

 user;
//or
 users.find (function(user){
     return user.name === 'Alex';
 }); 

 //ex 12

 function Car (model){
     this.model = model;
 }

 var cars = [
     new Car('Buick'),
     new Car('Camaro'),
     new Car('Focus'),
 ];

 cars.find(function(car){
     return car.model === 'Focus'
 });

 //2
 var posts =[
     {id: 1, title: 'New post'},
     {id: 2, title: 'Old post'}
 ];
 var comment = {postId:1, content: 'Great post'};
 function postForComment(posts, comment){
     return posts.find(function(post){
         return post.id === comment.postId;
     });
 }
 postForComment(posts, comment);

 //ex 13
   var computers = [
       name: 'Apple', 
   ] 