var TwitterPackage = require('twitter');

var secret = {
  consumer_key: 'fcxNWolwf2MYKj1tVzz4keB1M',
  consumer_secret: '2iILrXND0DjEHqLc8xGON6GjDh1jnpZAMtFixSIEICKoU12bWA',
  access_token_key: '50940458-qKczwpGZQ1UqnuTMaK1r7SBcg3aNOyqqgJ85MKsOj',
  access_token_secret: 'GhRWBx9OtbgdY0D0aremtPlTH8iVUEsrObvnXh6sQSn91'
}
var Twitter = new TwitterPackage(secret);

/* Twitter.post('statuses/update', {status: '...'},  function(error, tweet, response){
  if(error){
    console.log(error);
  }
  console.log(tweet);  // Tweet body.
  // console.log(response);  // Raw response object.
}); */

Twitter.stream('statuses/filter', {track: '#Test505'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
    console.log("echo '4' > /dev/ttyUSB1");
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
