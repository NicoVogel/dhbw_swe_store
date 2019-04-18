package dhbw.swe.server.error;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * contains rest input error, like wrong format
 * @author nivogel
 *
 */

@Data
@EqualsAndHashCode()
@AllArgsConstructor
class ApiValidationError {
	private String field;
	private Object rejectedValue;
	private Class<?> targetType;
	private String format;
}
