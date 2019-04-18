package dhbw.swe.server;


import java.util.Arrays;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.env.Environment;

import lombok.extern.slf4j.Slf4j;

/**
 * This is the main class which starts the server
 * @author nivogel
 *
 */
@Slf4j
@SpringBootApplication
public class SWEApplication {

	@Autowired
	Environment env;
	
	/**
	 * Java entry point, starts the server
	 * @param args
	 */
	public static void main(String[] args) {
		SpringApplication.run(SWEApplication.class, args);
	}
	
	/**
	 * logs which profiles are active
	 */
	@PostConstruct
	public void info() {
		log.info(Arrays.toString(env.getActiveProfiles()));
		log.info(Arrays.toString(env.getDefaultProfiles()));
	}
}
