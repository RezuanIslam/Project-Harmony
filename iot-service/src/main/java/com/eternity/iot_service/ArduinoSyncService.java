package com.eternity.iot_service;

import com.fazecast.jSerialComm.SerialPort;
import org.springframework.stereotype.Service;

@Service
public class ArduinoSyncService {

    public String getArduinoData() {
        // Specify COM7 port (change to the appropriate port if necessary)
        SerialPort comPort = SerialPort.getCommPort("COM5");

        if (comPort.openPort()) {
            System.out.println("Port opened successfully.");
        } else {
            return "Failed to open port.";
        }

        comPort.setComPortParameters(9600, 8, 1, 0);
        comPort.setComPortTimeouts(SerialPort.TIMEOUT_READ_SEMI_BLOCKING, 1000, 0);

        StringBuilder dataFromArduino = new StringBuilder();

        try {
            System.out.println("Listening for data...");
            if (comPort.bytesAvailable() > 0) {
                byte[] readBuffer = new byte[comPort.bytesAvailable()];
                int numRead = comPort.readBytes(readBuffer, readBuffer.length);
                String data = new String(readBuffer, "UTF-8");

                dataFromArduino.append(data);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return "Error reading data.";
        } finally {
            comPort.closePort();
        }

        return dataFromArduino.toString();
    }
}
