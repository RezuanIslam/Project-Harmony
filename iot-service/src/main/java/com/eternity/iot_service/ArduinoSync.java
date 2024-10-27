package com.eternity.iot_service;

import com.fazecast.jSerialComm.SerialPort;

public class ArduinoSync {
    public static void main(String[] args) {
        // Open the COM7 port
        SerialPort comPort = SerialPort.getCommPort("COM5"); // Specify COM7 port

        // Open the serial port
        comPort.openPort();

        // Set the port parameters
        comPort.setComPortParameters(9600, 8, 1, 0); // Baud rate, data bits, stop bits, parity
        comPort.setComPortTimeouts(SerialPort.TIMEOUT_READ_SEMI_BLOCKING, 1000, 0); // Timeout settings

        // Reading data from Arduino
        try {
            while (true) {
                if (comPort.bytesAvailable() > 0) {
                    byte[] readBuffer = new byte[comPort.bytesAvailable()];
                    int numRead = comPort.readBytes(readBuffer, readBuffer.length);
                    String data = new String(readBuffer, "UTF-8");
                    
                    // Process and print the sensor data
                    System.out.print(data);
                    
                    // You can parse and store the data for further processing (e.g., store in a database)
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // Close the port when done
            comPort.closePort();
        }
    }
}








/*import com.fazecast.jSerialComm.SerialPort;

public class ArduinoSync {
    public static void main(String[] args) {
        // Find available serial ports
        SerialPort comPort = SerialPort.getCommPort("COM7"); //[8];  // Select the first available port (e.g., "COM3")

        // Open the serial port
        comPort.openPort();

        // Set the port parameters
        comPort.setComPortParameters(9600, 8, 1, 0); // Baud rate, data bits, stop bits, parity
        comPort.setComPortTimeouts(SerialPort.TIMEOUT_READ_SEMI_BLOCKING, 1000, 0); // Timeout settings

        // Reading data from Arduino
        try {
            while (true) {
                if (comPort.bytesAvailable() > 0) {
                    byte[] readBuffer = new byte[comPort.bytesAvailable()];
                    int numRead = comPort.readBytes(readBuffer, readBuffer.length);
                    String data = new String(readBuffer, "UTF-8");
                    
                    // Process and print the sensor data
                    System.out.println("Received from Arduino: " + data);
                    
                    // You can parse and store the data for further processing (e.g., store in a database)
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // Close the port when done
            comPort.closePort();
        }
    }
}

*/