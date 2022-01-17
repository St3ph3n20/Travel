var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + "/index.html", "<h1>Test</h1>", function(error) {
    if (error) {
        return console.log(error);
    } else {
        return console.log("Congrats")
    }
});

var myPhotoLoc = 'https://github.com/LearnWebCode/welcome-to-git/blob/master/images/dog.jpg?raw=true';

https.get(myPhotoLoc, function(response){
    response.pipe(fs.createWriteStream(__dirname + "/dog.jpg"));
})