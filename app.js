var Twitlert = require('./twitter');
var serialPort = require('./serialPort');
function wordFound() {
  serialPort.sendData(1);
  Twitlert.postTweet('Word Founded');
}
Twitlert.lookForTweet('#8821');
