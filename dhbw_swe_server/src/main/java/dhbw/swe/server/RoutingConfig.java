package dhbw.swe.server;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.slf4j.Slf4j;


@Slf4j
@Configuration
public class RoutingConfig {

	@RequestMapping(value = {"/product","/producer","/supplier", "/customer", "/deliverynote", "/search", "/setting"})
    public String index() {
		log.info("changed routing");   
		return "index";
    }
}
