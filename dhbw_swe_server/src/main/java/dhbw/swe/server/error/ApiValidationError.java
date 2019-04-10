package dhbw.swe.server.error;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
class ApiValidationError extends ApiSubError {
   private String field;
   private Object rejectedValue;
   private Class<?> targetType;
   private String format;
}
