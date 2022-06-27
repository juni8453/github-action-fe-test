package team20.issuetracker.exceptionhandler;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class ErrorResponse {

    private final String errorMessage;

    static ErrorResponse create(String errorMessage) {
        return new ErrorResponse(errorMessage);
    }
}
