module.exports = {
  lookForTweet : function(word,tweetText,dataValue) {
    var Twitlert = require('./twitterCom');
    Twitlert.lookForTweet(word,tweetText,dataValue);
  },
  postTweet : function(tweetText,tweetBy) {
    var Twitlert = require('./twitterCom');
    Twitlert.postTweet(tweetText,tweetBy);
  },
  sendData : function(value) {
    var SerialPort = require('./serialPortCom');
    SerialPort.sendData(value);
  }
};
