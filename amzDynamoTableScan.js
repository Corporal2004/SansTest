var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-1'});

// Create DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
 ExpressionAttributeValues: {
  ":title": {
    S: "PHRASE"
   }
 },
 FilterExpression: "contains (Movietitle, :title)",
 ProjectionExpression: "Title, MovieTitle, Length, Release Year, Rating",
 TableName: "Movies"
};

ddb.scan(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    data.Items.forEach(function(element, index, array) {
      console.log(element.Title.S + " (" + element.MovieTitle.S + ")"		 + " (" + element.MovieTitle.S + ")"    + " (" + element.Length.S + ")"		 + " (" + element.ReleaseYear.S + ")"			 + " (" + element.Rating.S + ")");});
  }
});