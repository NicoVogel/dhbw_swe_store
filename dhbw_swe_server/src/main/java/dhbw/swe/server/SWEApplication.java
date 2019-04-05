package dhbw.swe.server;


import java.util.Arrays;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.env.Environment;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@SpringBootApplication
public class SWEApplication {

	@Autowired
	Environment env;
	
	public static void main(String[] args) {
		SpringApplication.run(SWEApplication.class, args);
	}
	
	@PostConstruct
	public void info() {
		log.info(Arrays.toString(env.getActiveProfiles()));
		log.info(Arrays.toString(env.getDefaultProfiles()));
	}
}
