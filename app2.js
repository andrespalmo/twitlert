// serial port initialization:
 var serialport = require('serialport'),
     SerialPort = serialport.SerialPort,
     portName = '/dev/cu.wchusbserial1420',
     portConfig = {
         baudRate: 9600,
         // call myPort.on('data') when a newline is received:
         parser: serialport.parsers.readline('\n')
     };

var myPort = new SerialPort(portName, portConfig);

//myPort.on('open', openPort); // called when the serial port opens

function openPort() {
    var twitLedAlert = 1;
    function sendData() {
         myPort.write(twitLedAlert);
         console.log('Sending ' + twitLedAlert + ' out the serial port');
    }
    setInterval(sendData, 500);
}

openPort();
