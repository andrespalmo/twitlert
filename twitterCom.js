module.exports = {
  lookForTweet : function(word,tweetText,dataValue) {
    var secret = require('./secretKeys');
    var Twitter = new require('twitter')(secret.twitter);
    Twitter.stream('statuses/filter', {track: word}, function(stream) {
      stream.on('data', function(tweet) {
        var tweetBy = tweet.user.screen_name;
        console.log("Found Tweet by: " + tweetBy);
        console.log("Tweet: " + tweet.text);
        var Trigger = require('./triggers.js');
        if (tweetText != 0) {
          Trigger.postTweet(tweetText,tweetBy);
        }
        if (dataValue != 0) {
          Trigger.sendData(dataValue);
        }
      });
      stream.on('error', function(error) {
        console.log(error);
      });
    });
  },
  postTweet : function(tweetText,replyToUser) {
    var secret = require('./secretKeys');
    var Twitter = new require('twitter')(secret.twitter);
    tweetText = "@" + replyToUser + " " + tweetText;
    Twitter.post('statuses/update', {status: tweetText},  function(error, tweet, response){
      if(error){
        console.log(error);
      }
      console.log("Replied to: " + replyToUser);
      console.log("Tweet: " + tweet.text);
      //console.log(response);
    });
  }
};
