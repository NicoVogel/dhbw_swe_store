package dhbw.swe.server.error;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

/**
 * Used to cover default rest exceptions
 * 
 * @author nivogel
 *
 */
@Getter
@Setter
@AllArgsConstructor
public class ApiError {

	private HttpStatus status;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
	private LocalDateTime timestamp;
	private String message;
	private String debugMessage;
	@Setter(value = AccessLevel.NONE)
	private List<ApiValidationError> subErrors;

	/**
	 * create new api error
	 * @param status http status of the error
	 * @param message reason for this error
	 * @param ex origin
	 */
	ApiError(HttpStatus status, String message, Throwable ex) {
		timestamp = LocalDateTime.now();
		this.status = status;
		this.message = message;
		this.debugMessage = ex.getLocalizedMessage();
	}

	/**
	 * get sub errors
	 * @return
	 */
	public List<ApiValidationError> getSubErrors() {
		if (this.subErrors == null) {
			this.subErrors = new ArrayList<>();
		}
		return this.subErrors;
	}

}
