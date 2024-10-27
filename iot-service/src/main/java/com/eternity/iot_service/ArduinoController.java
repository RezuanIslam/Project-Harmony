package com.eternity.iot_service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ArduinoController {

    @Autowired
    private ArduinoSyncService arduinoSyncService;

    @GetMapping("/api/arduino-data")
    public String getArduinoData() {
        return arduinoSyncService.getArduinoData();
    }
}
