module.exports = {
  sendData : function(port) {
    var serialport = require('serialport');
    if (port == 1) {
      portName = '/dev/cu.wchusbserial1420';
    } else {
      portName = '/dev/ttyUSB0';
    }
    portConfig = {
      baudRate: 9600,
      parser: serialport.parsers.readline('\n')
    };
    var myPort = new serialport(portName, portConfig);
    function sendData() {
      myPort.write(1);
    }
    function closePort() {
      myPort.close();
    }
    setTimeout(sendData, 2000);
    setTimeout(closePort, 3000);
  }
};
