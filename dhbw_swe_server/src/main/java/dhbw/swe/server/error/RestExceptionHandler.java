package dhbw.swe.server.error;

import java.util.Date;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.fasterxml.jackson.databind.exc.InvalidFormatException;

@Order(Ordered.HIGHEST_PRECEDENCE)
@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {

	@Override
	protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		ApiError apiError = null;
		if (ex.getCause() instanceof InvalidFormatException) {
			InvalidFormatException iex = (InvalidFormatException) ex.getCause();
			apiError = new ApiError(HttpStatus.BAD_REQUEST, "Bad parameterin JSON request", iex);

			Class<?> targetType = iex.getTargetType();
			String format = "";
			if (targetType.equals(Date.class)) {
				format = "dd.mm.yyyy";
			} else if (targetType.equals(double.class)) {
				format = ".";
			}

			apiError.getSubErrors().add(
					new ApiValidationError(iex.getPath().get(0).getFieldName(), iex.getValue(), targetType, format));
		} else {
			apiError = new ApiError(HttpStatus.BAD_REQUEST, "Malformed JSON request", ex);
		}

		return new ResponseEntity<>(apiError, apiError.getStatus());
	}
}
