package com.kolafied.bearsui.HealthCareUI;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class HealthCareUiApplication {

	public static void main(String[] args) {
		SpringApplication.run(HealthCareUiApplication.class, args);
	}

}
