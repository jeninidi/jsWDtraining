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