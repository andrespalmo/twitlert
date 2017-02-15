module.exports = {
  sendData : function(dataValue) {
    var serialport = require('serialport');
    portName = '/dev/cu.wchusbserial1420';///dev/ttyUSB0,/dev/cu.usbmodem1421
    portConfig = {
      baudRate: 9600,
      parser: serialport.parsers.readline('\n')
    };
    var myPort = new serialport(portName, portConfig);
    function sendData() {
      myPort.write(dataValue);
    }
    function closePort() {
      myPort.close();
    }
    setTimeout(sendData, 2000);
    setTimeout(closePort, 3000);
  }
};
