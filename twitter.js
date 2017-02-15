module.exports = {
  postTweet : function(tweetText) {
    require('./twitter');
    var secret = require('./secretKey');
    var Twitter = new require('twitter')(secret);
    Twitter.post('statuses/update', {status: tweetText},  function(error, tweet, response){
      if(error){
        console.log(error);
      }
      console.log(tweet);
      //console.log(response);
    });
  },
  lookForTweet : function(word) {
    require('./twitter');
    var secret = require('./secretKey');
    var Twitter = new require('twitter')(secret);
    Twitter.stream('statuses/filter', {track: word}, function(stream) {
      stream.on('data', function(tweet) {
        console.log(tweet.text);
        wordFound();
      });
      stream.on('error', function(error) {
        console.log(error);
      });
    });
  }
};
